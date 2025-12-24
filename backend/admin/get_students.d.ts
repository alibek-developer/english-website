export interface Student {
    userId: string;
    email: string | null;
    courseId: number;
    courseName: string;
    courseNameUz: string;
    paymentStatus: string;
    paymentMethod: string | null;
    enrolledAt: Date;
}
export interface GetStudentsResponse {
    students: Student[];
}
export declare const getStudents: () => Promise<GetStudentsResponse>;
