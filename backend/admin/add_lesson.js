import { api } from "encore.dev/api";
import { db } from "../db";
export const addLesson = api({ expose: true, method: "POST", path: "/admin/lesson" }, async (req) => {
    const result = await db.queryRow `
      INSERT INTO lessons (course_id, title, title_uz, content, content_uz, order_index)
      VALUES (${req.courseId}, ${req.title}, ${req.titleUz}, ${req.content}, ${req.contentUz}, ${req.orderIndex})
      RETURNING id
    `;
    return { success: true, id: result?.id || 0 };
});
//# sourceMappingURL=add_lesson.js.map