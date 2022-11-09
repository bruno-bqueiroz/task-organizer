import express  from "express";

const server = express();

server.get('/status', (req, res)=> res.send('ok'));

server.listen(5000, ()=> console.log("listen on port 5000"))