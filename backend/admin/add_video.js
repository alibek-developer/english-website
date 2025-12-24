import { api } from "encore.dev/api";
import { db } from "../db";
export const addVideo = api({ expose: true, method: "POST", path: "/admin/videos" }, async (req) => {
    // Store videos as lessons with video_url
    const result = await db.queryRow `
      INSERT INTO lessons (course_id, title, title_uz, content, content_uz, video_url, duration, order_index)
      VALUES (
        ${req.courseId}, 
        ${req.title}, 
        ${req.titleUz}, 
        ${req.description || ''}, 
        ${req.descriptionUz || ''}, 
        ${req.videoUrl},
        ${req.duration || null},
        ${req.orderIndex}
      )
      RETURNING id
    `;
    return { success: true, id: result?.id || 0 };
});
//# sourceMappingURL=add_video.js.map