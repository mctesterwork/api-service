import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import dotenv from "dotenv";

dotenv.config();

export const client = postgres(process.env.DB_URL);

export const db = drizzle(client)