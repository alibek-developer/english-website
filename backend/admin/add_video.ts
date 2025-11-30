import { api } from "encore.dev/api";
import { db } from "../db";

export interface AddVideoRequest {
  courseId: number;
  title: string;
  titleUz: string;
  description?: string;
  descriptionUz?: string;
  videoUrl: string;
  duration?: number;
  orderIndex: number;
}

export interface AddVideoResponse {
  success: boolean;
  id: number;
}

export const addVideo = api<AddVideoRequest, AddVideoResponse>(
  { expose: true, method: "POST", path: "/admin/videos" },
  async (req): Promise<AddVideoResponse> => {
    // Store videos as lessons with video_url
    const result = await db.queryRow<{ id: number }>`
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
  }
);
