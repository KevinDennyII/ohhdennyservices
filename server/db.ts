import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

const connectionString =
  process.env.RENDER_DATABASE_URL || process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    "DATABASE_URL or RENDER_DATABASE_URL must be set.",
  );
}

export const pool = new Pool({
  connectionString,
  ssl: connectionString.includes("render.com")
    ? { rejectUnauthorized: false }
    : undefined,
});
export const db = drizzle(pool, { schema });
