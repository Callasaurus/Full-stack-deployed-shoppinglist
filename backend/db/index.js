import pg from "pg";
import { db } from "../config/index.js";

export const pool = new pg.Pool({
  connectionString: db.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
