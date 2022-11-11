import  {Request, Response} from 'express';

import {Task} from '../protocols/task.js'

import {insertTask, tasks, update, delTask} from '../repositories/task-repository.js';

async function deleteTask (req: Request,res: Response){
    const id = parseInt(req.params.id); 
    try {
        delTask(id)
        return res.sendStatus(204);
    } catch (error) {
        console.log(error)
        return res.send(error.message)
    }
}

async function updateTask(req: Request,res: Response){
        
        const id = parseInt(req.params.id); 
        const {feito} = req.body;
        
    try {
        update(id, feito)
        return res.sendStatus(204);
    } catch (error) {
        console.log(error)
        return res.send(error.message)
    }

}

async function newTask(req: Request,res: Response){
    const task = req.body as Task;

    try {
        insertTask(task);
        return res.status(201).send(`task inserted`);

    } catch (error) {
        return res.send(error.message)
    }
}

async function listTask(req: Request,res: Response) {
    const list = await tasks()

    return res.send(list.rows)
}


export {
    newTask,
    listTask,
    updateTask,
    deleteTask
}