export interface Stats {
    totalStudents: number;
    totalRevenue: number;
    pendingPayments: number;
    completedCourses: number;
}
export declare const getStats: () => Promise<Stats>;
