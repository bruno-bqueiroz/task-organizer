import express from "express";
import { status } from "./controllers/status-controller.js";
var server = express();
server.get('/status', status);
server.listen(5000, function () { return console.log("listen on port 5000"); });
