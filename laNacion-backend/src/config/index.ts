import { config } from 'dotenv';

config({ path: '.env' });

export const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, PORT } = process.env;
