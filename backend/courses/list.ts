import { api } from "encore.dev/api";
import { db } from "../db";

export interface Course {
  id: number;
  title: string;
  titleUz: string;
  description: string;
  descriptionUz: string;
  price: number;
  duration: string;
  format: "online" | "offline" | "hybrid";
  level: string;
  startDate: string;
  image: string;
  category: string;
}

export interface ListCoursesResponse {
  courses: Course[];
}

// Lists all available courses from database
export const list = api<void, ListCoursesResponse>(
  { expose: true, method: "GET", path: "/courses" },
  async (): Promise<ListCoursesResponse> => {
    const courses = await db.query<Course>`
      SELECT 
        id,
        title,
        title_uz as "titleUz",
        description,
        description_uz as "descriptionUz",
        price,
        duration,
        format,
        level,
        start_date::text as "startDate",
        COALESCE(image, '/courses/default.jpg') as image,
        category
      FROM courses
      ORDER BY id ASC
    `;

    return { courses: Array.isArray(courses) ? courses : [] };
  }
);