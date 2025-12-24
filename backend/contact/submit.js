import { api } from "encore.dev/api";
import { db } from "../db";
// Submits a contact form
export const submit = api({ expose: true, method: "POST", path: "/contact" }, async (req) => {
    await db.exec `
      INSERT INTO contacts (name, phone, email, course_interest, message)
      VALUES (${req.name}, ${req.phone}, ${req.email || null}, ${req.courseInterest || null}, ${req.message || null})
    `;
    return {
        success: true,
        message: "Your message has been sent successfully! We will contact you soon.",
    };
});
//# sourceMappingURL=submit.js.map