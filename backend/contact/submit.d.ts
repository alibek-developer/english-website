export interface SubmitContactRequest {
    name: string;
    phone: string;
    email?: string;
    courseInterest?: string;
    message?: string;
}
export interface SubmitContactResponse {
    success: boolean;
    message: string;
}
export declare const submit: (params: SubmitContactRequest) => Promise<SubmitContactResponse>;
