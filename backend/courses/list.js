import { api } from 'encore.dev/api';
import { db } from '../db';
// Lists all available courses from database
export const list = api({ expose: true, method: 'GET', path: '/courses' }, async () => {
    const courses = await db.query `
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
});
//# sourceMappingURL=list.js.map