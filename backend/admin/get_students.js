import { api } from "encore.dev/api";
import { db } from "../db";
export const getStudents = api({ expose: true, method: "GET", path: "/admin/students" }, async () => {
    const result = await db.query `
      SELECT e.user_id as "userId",
             '' as email,
             e.course_id as "courseId",
             c.title as "courseName",
             c.title_uz as "courseNameUz",
             e.payment_status as "paymentStatus",
             e.payment_method as "paymentMethod",
             e.enrolled_at as "enrolledAt"
      FROM enrollments e
      JOIN courses c ON e.course_id = c.id
      ORDER BY e.enrolled_at DESC
    `;
    const students = Array.isArray(result) ? result : [];
    return { students };
});
//# sourceMappingURL=get_students.js.map