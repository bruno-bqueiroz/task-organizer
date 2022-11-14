import pg from 'pg';
const { Pool } = pg;

import dotenv from 'dotenv';
dotenv.config();

const databaseConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
}

const connection = new Pool (databaseConfig);

export {connection};