import { api } from "encore.dev/api";
import { stripe } from "../lib/stripe";
import { db } from "../db";
import { secret } from "encore.dev/config";

const stripeWebhookSecret = secret("StripeWebhookSecret");

export interface StripeWebhookRequest {
  body: string;
  signature: string;
}

export interface StripeWebhookResponse {
  received: boolean;
}

export const stripeWebhook = api.raw(
  { expose: true, method: "POST", path: "/webhooks/stripe" },
  async (req, res) => {
    const sig = req.headers['stripe-signature'] as string;
    
    let event;

    try {
      const body = await new Promise<string>((resolve) => {
        let data = '';
        req.on('data', chunk => data += chunk);
        req.on('end', () => resolve(data));
      });

      event = stripe.webhooks.constructEvent(body, sig, stripeWebhookSecret());
    } catch (err: any) {
      res.writeHead(400);
      res.end(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as any;
      
      const userId = session.metadata.userId;
      const courseId = parseInt(session.metadata.courseId);

      if (userId && courseId) {
        // Update enrollment to paid
        await db.exec`
          UPDATE enrollments 
          SET payment_status = 'paid', 
              payment_method = 'stripe',
              updated_at = NOW()
          WHERE user_id = ${userId} 
            AND course_id = ${courseId}
            AND stripe_session_id = ${session.id}
        `;

        // Initialize user progress
        const videoCount = await db.queryRow<{ count: number }>`
          SELECT COUNT(*)::int as count FROM lessons WHERE course_id = ${courseId} AND video_url IS NOT NULL
        `;

        const homeworkCount = await db.queryRow<{ count: number }>`
          SELECT COUNT(*)::int as count FROM homework WHERE course_id = ${courseId}
        `;

        await db.exec`
          INSERT INTO user_progress (user_id, course_id, total_videos, total_homework)
          VALUES (${userId}, ${courseId}, ${videoCount?.count || 0}, ${homeworkCount?.count || 0})
          ON CONFLICT (user_id, course_id) 
          DO UPDATE SET total_videos = ${videoCount?.count || 0}, total_homework = ${homeworkCount?.count || 0}
        `;
      }
    }

    res.writeHead(200);
    res.end(JSON.stringify({ received: true }));
  }
);