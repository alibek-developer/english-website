import { api } from "encore.dev/api";
import { db } from "../db";
export const getStats = api({ expose: true, method: "GET", path: "/admin/stats" }, async () => {
    const studentCount = await db.queryRow `
      SELECT COUNT(DISTINCT user_id)::int as count FROM enrollments
    `;
    const revenue = await db.queryRow `
      SELECT COALESCE(SUM(c.price), 0)::int as total
      FROM enrollments e
      JOIN courses c ON e.course_id = c.id
      WHERE e.payment_status = 'paid'
    `;
    const pending = await db.queryRow `
      SELECT COUNT(*)::int as count FROM enrollments WHERE payment_status = 'pending'
    `;
    const completed = await db.queryRow `
      SELECT COUNT(*)::int as count FROM enrollments WHERE payment_status = 'paid'
    `;
    return {
        totalStudents: studentCount?.count || 0,
        totalRevenue: revenue?.total || 0,
        pendingPayments: pending?.count || 0,
        completedCourses: completed?.count || 0,
    };
});
//# sourceMappingURL=get_stats.js.map