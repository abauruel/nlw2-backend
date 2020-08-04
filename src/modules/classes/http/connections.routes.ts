import { Router } from "express";

import ConnectionsController from "./controllers/connectionsController";
const connections = Router();

const connectionsController = new ConnectionsController();

connections.post("/", connectionsController.store);
connections.get("/", connectionsController.index);

export default connections;
