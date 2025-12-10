import { api, APIError } from 'encore.dev/api'
import { db } from '../db'
import type { Course } from './list'

export interface GetCourseParams {
	id: number
}

// Retrieves a specific course by ID
export const get = api<GetCourseParams, { course: Course }>(
	{ expose: true, method: 'GET', path: '/courses/:id' },
	async ({ id }): Promise<{ course: Course }> => {
		const course = await db.queryRow<Course>`
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
    `

		if (!course) {
			throw APIError.notFound('course not found')
		}

		return { course }
	}
)
