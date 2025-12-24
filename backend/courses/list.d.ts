export interface Course {
    id: number;
    title: string;
    titleUz: string;
    description: string;
    descriptionUz: string;
    price: number;
    duration: string;
    format: 'online' | 'offline' | 'hybrid';
    level: string;
    startDate: string;
    image: string;
    category: string;
}
export interface ListCoursesResponse {
    courses: Course[];
}
export declare const list: () => Promise<ListCoursesResponse>;
