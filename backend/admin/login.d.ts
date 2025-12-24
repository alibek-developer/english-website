import { Cookie } from 'encore.dev/api';
export interface AdminLoginRequest {
    email: string;
    password: string;
}
export interface AdminLoginResponse {
    success: boolean;
    session?: Cookie<'admin_session'>;
    error?: string;
}
export declare const login: (params: AdminLoginRequest) => Promise<AdminLoginResponse>;
