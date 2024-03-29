import { Pool } from "pg";

const pool = new Pool({
  host: process.env.host,
  port: Number(process.env.port),
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

export default pool;
