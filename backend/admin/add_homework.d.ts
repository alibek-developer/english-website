export interface AddHomeworkRequest {
    courseId: number;
    title: string;
    titleUz: string;
    description: string;
    descriptionUz: string;
    deadline?: Date;
}
export interface AddHomeworkResponse {
    success: boolean;
    id: number;
}
export declare const addHomework: (params: AddHomeworkRequest) => Promise<AddHomeworkResponse>;
