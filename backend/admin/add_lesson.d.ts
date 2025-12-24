export interface AddLessonRequest {
    courseId: number;
    title: string;
    titleUz: string;
    content: string;
    contentUz: string;
    orderIndex: number;
}
export interface AddLessonResponse {
    success: boolean;
    id: number;
}
export declare const addLesson: (params: AddLessonRequest) => Promise<AddLessonResponse>;
