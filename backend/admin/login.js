import * as crypto from 'crypto';
import { api } from 'encore.dev/api';
export const login = api({ expose: true, method: 'POST', path: '/admin/login' }, async (req) => {
    const simpleHash = crypto
        .createHash('md5')
        .update(req.password)
        .digest('hex');
    if (req.email === 'admin@alibek.uz' && req.password === 'admin2025') {
        const sessionToken = crypto.randomBytes(32).toString('hex');
        return {
            success: true,
            session: {
                value: sessionToken,
                expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
                httpOnly: true,
                secure: true,
                sameSite: 'Lax',
            },
        };
    }
    return {
        success: false,
        error: "Email yoki parol noto'g'ri",
    };
});
//# sourceMappingURL=login.js.map