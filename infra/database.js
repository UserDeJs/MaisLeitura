const { Client } = require("pg");

async function query(sql, args = []) {
  const client = new Client({
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || "Gustavo",
    database: process.env.DB_NAME || "mydatabase",
    password: process.env.DB_PASSWORD || "1324",
  });
  await client.connect();

  const res = await client.query(sql, args);

  await client.end();
  return res.rows;
}
module.exports = { query };