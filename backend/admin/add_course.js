import { api } from "encore.dev/api";
import { db } from "../db";
export const addCourse = api({ expose: true, method: "POST", path: "/admin/course" }, async (req) => {
    const result = await db.queryRow `
      INSERT INTO courses (title, title_uz, description, description_uz, price, duration, level, category)
      VALUES (${req.title}, ${req.titleUz}, ${req.description}, ${req.descriptionUz}, ${req.price}, ${req.duration}, ${req.level}, ${req.category})
      RETURNING id
    `;
    return { success: true, id: result?.id || 0 };
});
//# sourceMappingURL=add_course.js.map