import postgres from "postgres";

export const db = postgres(process.env.DATABASE_URL as string,  { ssl: 'verify-full' });