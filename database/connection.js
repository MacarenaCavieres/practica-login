import "dotenv/config";
import pg from "pg";

const { Pool } = pg;
const connectionString = process.env.PG;

export const pool = new Pool({
    connectionString,
    allowExitOnIdle: true,
});

try {
    await pool.query("select now()");
    console.log("Database 🔥🔥");
} catch (error) {
    console.error(error);
}
