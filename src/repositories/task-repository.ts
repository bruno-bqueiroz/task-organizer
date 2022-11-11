import { connection } from '../database/database.js'
import {QueryResult} from 'pg'
import {Task} from '../protocols/task.js'

async function insertTask( task: Task ){
    connection.query(`
    INSERT INTO TAREFAS ( name, "userId", data, descricao, feito)
        VALUES ( $1, $2, $3, $4, $5);`, [task.name, task.userId, task.data, task.descricao, task.feito])
}

export {
    insertTask
}