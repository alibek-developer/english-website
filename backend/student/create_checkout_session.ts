import { api } from "encore.dev/api";
import { getAuthData } from "~encore/auth";
import { stripe } from "../lib/stripe";
import { db } from "../db";

export interface CreateCheckoutSessionRequest {
  courseId: number;
}

export interface CreateCheckoutSessionResponse {
  sessionId: string;
  url: string;
}

export const createCheckoutSession = api<CreateCheckoutSessionRequest, CreateCheckoutSessionResponse>(
  { auth: true, expose: true, method: "POST", path: "/student/create-checkout-session" },
  async (req): Promise<CreateCheckoutSessionResponse> => {
    const auth = getAuthData()!;

    // Get course details
    const course = await db.queryRow<{ id: number; title: string; title_uz: string; price: number }>`
      SELECT id, title, title_uz, price FROM courses WHERE id = ${req.courseId}
    `;

    if (!course) {
      throw new Error("Course not found");
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'uzs',
            product_data: {
              name: course.title,
              description: course.title_uz,
            },
            unit_amount: course.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/payment-success?course=${encodeURIComponent(course.title_uz)}`,
      cancel_url: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/payment-cancel`,
      client_reference_id: auth.userID,
      metadata: {
        userId: auth.userID,
        courseId: course.id.toString(),
      },
    });

    // Create pending enrollment
    await db.exec`
      INSERT INTO enrollments (user_id, course_id, payment_status, stripe_session_id)
      VALUES (${auth.userID}, ${req.courseId}, 'pending', ${session.id})
      ON CONFLICT (user_id, course_id) 
      DO UPDATE SET stripe_session_id = ${session.id}, payment_status = 'pending'
    `;

    return {
      sessionId: session.id,
      url: session.url || '',
    };
  }
);