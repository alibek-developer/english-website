import { api, APIError } from 'encore.dev/api';
import { db } from '../db';
// Retrieves a specific course by ID
export const get = api({ expose: true, method: 'GET', path: '/courses/:id' }, async ({ id }) => {
    const course = await db.queryRow `
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
      WHERE id = ${id}
    `;
    if (!course) {
        throw APIError.notFound('course not found');
    }
    return { course };
});
//# sourceMappingURL=get.js.map