import { api } from "encore.dev/api";
import { db } from "../db";
// Lists all testimonials
export const list = api({ expose: true, method: "GET", path: "/testimonials" }, async () => {
    const rows = await db.queryAll `
      SELECT id, student_name, student_name_uz, course, rating, before_score, after_score, testimonial, testimonial_uz, image
      FROM testimonials
      ORDER BY created_at DESC
    `;
    const testimonials = rows.map(row => ({
        id: row.id,
        studentName: row.student_name,
        studentNameUz: row.student_name_uz,
        course: row.course,
        rating: row.rating,
        beforeScore: row.before_score || undefined,
        afterScore: row.after_score || undefined,
        testimonial: row.testimonial,
        testimonialUz: row.testimonial_uz,
        image: row.image || undefined,
    }));
    return { testimonials };
});
//# sourceMappingURL=list.js.map