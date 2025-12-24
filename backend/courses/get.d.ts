import type { Course } from './list';
export interface GetCourseParams {
    id: number;
}
export declare const get: (params: GetCourseParams) => Promise<{
    course: Course;
}>;
