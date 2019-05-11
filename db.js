const { Pool, Client } = require('pg');

if (!process.env.DATABASE_URL) {
    require('dotenv').config();
}
const connectionString = process.env.DATABASE_URL;


if (!connectionString) {
    console.error("DATABASE_URL ENV not defined");
    process.exit(-1);
}

const pool = new Pool({
    connectionString: connectionString,
    ssl: true
})

module.exports = pool;
