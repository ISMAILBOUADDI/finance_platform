import { defineConfig } from "drizzle-kit";
import {config} from "dotenv"

config({path: ".env.local"})
export default defineConfig({
  // "mysql" | "sqlite" | "postgresql"
  schema: "./db/schema.ts",
  driver : "pg",
  out: "./drizzle",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});