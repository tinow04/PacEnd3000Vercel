import pgPromise from "pg-promise";

const pgp = pgPromise();

export const db = pgp(process.env.DATABASE_URL as string,  { ssl: 'verify-full' });