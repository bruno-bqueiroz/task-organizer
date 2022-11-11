import { connection } from '../database/database.js'
import {QueryResult} from 'pg'
import {Task} from '../protocols/task.js'


async function insertTask( task: Task ){
    connection.query(`
    INSERT INTO TAREFAS ( name, "userId", data, descricao, feito)
        VALUES ( $1, $2, $3, $4, $5);`, [task.name, task.userId, task.data, task.descricao, task.feito]);
}

async function tasks ():Promise<QueryResult<Task>> {
    return await connection.query (`SELECT * FROM tarefas;`);
}

async function update(id: number, feito: boolean){
    return await connection.query (`UPDATE TAREFAS SET feito=${feito} WHERE id = ${id};`);
}

async function delTask(id: number){
    return await connection.query (`DELETE FROM tarefas WHERE id = ${id};`);
}

export {
    insertTask,
    tasks,
    update,
    delTask
}