// src/app/api/getData/route.js
import pool from "@/lib/pgdb";

// Named export for GET method
export async function GET(req) {
  try {
    const client = await pool.connect();
    try {
      const result = await client.query("SELECT * FROM tests");
      return new Response(JSON.stringify(result.rows), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Database query error:", error);
    return new Response(JSON.stringify({ error: "Error fetching data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
