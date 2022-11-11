import { connection } from '../database/database.js'
import {User} from '../protocols/user.js';
import {QueryResult} from 'pg'

async function listUser(): Promise<QueryResult<User>>  {
    return await connection.query(`SELECT * FROM users;`)
}

function insertUser(newUser: User ){
    connection.query(`INSERT INTO users(name) VALUES ($1);`, [newUser.name])
}

export {
    listUser,
    insertUser
}