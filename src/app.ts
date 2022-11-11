import express  from "express";
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();


import { status } from "./controllers/status-controller.js";
import { loginUser, newUser } from "./controllers/user-controller.js";
import { newTask, listTask, updateTask, deleteTask } from "./controllers/task-controller.js";

const server = express();
server.use(cors());
server.use(express.json());

server.get('/status', status);
server.get('/', loginUser);
server.post('/', newUser);
server.get('/task', listTask);
server.post('/task', newTask);
server.put('/task/:id', updateTask);
server.delete('/task/:id', deleteTask);

server.listen(process.env.PORT || 5000, ()=> console.log(`Listen on port ${process.env.PORT || 5000}`));