import { defineConfig } from "drizzle-kit"
import dontenv from "dotenv";

dontenv.config();

export default defineConfig({
    dialect: "postgresql",
    schema: "./src/db/schema.ts",
    out: "./src/db/",
    dbCredentials: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        ssl: "require"
    },
    verbose: true,
    strict: true
})