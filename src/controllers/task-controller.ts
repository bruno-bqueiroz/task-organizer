import  {Request, Response} from 'express';

import {Task} from '../protocols/task.js'

import {insertTask} from '../repositories/task-repository.js'


async function newTask(req: Request,res: Response){
    const task = req.body as Task;

    try {
        insertTask(task);
        return res.status(201).send(`task inserted`);

    } catch (error) {
        return res.send(error.message)
    }
}

export {
    newTask
}