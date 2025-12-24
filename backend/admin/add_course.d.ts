export interface AddCourseRequest {
    title: string;
    titleUz: string;
    description: string;
    descriptionUz: string;
    price: number;
    duration: string;
    level: string;
    category: string;
}
export interface AddCourseResponse {
    success: boolean;
    id: number;
}
export declare const addCourse: (params: AddCourseRequest) => Promise<AddCourseResponse>;
