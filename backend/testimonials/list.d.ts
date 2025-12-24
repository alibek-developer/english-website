export interface Testimonial {
    id: number;
    studentName: string;
    studentNameUz: string;
    course: string;
    rating: number;
    beforeScore?: string;
    afterScore?: string;
    testimonial: string;
    testimonialUz: string;
    image?: string;
}
export interface ListTestimonialsResponse {
    testimonials: Testimonial[];
}
export declare const list: () => Promise<ListTestimonialsResponse>;
