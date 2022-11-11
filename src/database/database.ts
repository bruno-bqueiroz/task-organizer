import pg from 'pg';
const { Pool } = pg;

const databaseConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
}

const connection = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '01234560',
    database: 'database-task-organizer'
});

export {connection};