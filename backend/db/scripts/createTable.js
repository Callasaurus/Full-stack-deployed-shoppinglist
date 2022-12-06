import { pool } from "../index.js";

async function createTable() {
  const created = await pool.query(
    `CREATE TABLE IF NOT EXISTS shopping (
      id SERIAL PRIMARY KEY,
      item TEXT NOT NULL,
      completed BOOL NOT NULL
    );`
  );
  console.log("shopping table created", created.command);
}

try {
  await createTable();
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
