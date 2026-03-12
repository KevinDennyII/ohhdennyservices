import { defineConfig } from "drizzle-kit";

let dbUrl = process.env.RENDER_DATABASE_URL || process.env.DATABASE_URL;

if (!dbUrl) {
  throw new Error("DATABASE_URL or RENDER_DATABASE_URL must be set");
}

if (dbUrl.includes("render.com") && !dbUrl.includes("sslmode")) {
  dbUrl += (dbUrl.includes("?") ? "&" : "?") + "sslmode=require";
}

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: dbUrl,
  },
});
