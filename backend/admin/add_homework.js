import { api } from "encore.dev/api";
import { db } from "../db";
export const addHomework = api({ expose: true, method: "POST", path: "/admin/homework" }, async (req) => {
    const result = await db.queryRow `
      INSERT INTO homework (course_id, title, title_uz, description, description_uz, deadline)
      VALUES (${req.courseId}, ${req.title}, ${req.titleUz}, ${req.description}, ${req.descriptionUz}, ${req.deadline || null})
      RETURNING id
    `;
    return { success: true, id: result?.id || 0 };
});
//# sourceMappingURL=add_homework.js.map