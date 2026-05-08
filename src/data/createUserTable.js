import pool from "../config/db.js";

const createUserTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS users(
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;

  try {
    await pool.query(queryText); // ✅ important
    console.log("✅ User table ensured");
  } catch (err) {
    console.error("❌ Error creating user table:", err.message);
  }
};

export default createUserTable;