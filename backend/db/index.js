import { SQLDatabase } from 'encore.dev/storage/sqldb';
export const db = new SQLDatabase('db', {
    migrations: './migrations',
});
//# sourceMappingURL=index.js.map