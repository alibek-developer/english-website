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
export declare const addVideo: (params: AddVideoRequest) => Promise<AddVideoResponse>;
