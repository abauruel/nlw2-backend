import { Router } from "express";
import Classes from "./modules/classes/http/classes.routes";
import Connections from "./modules/classes/http/connections.routes";

const routes = Router();
routes.use("/classes", Classes);
routes.use("/connections", Connections);

export default routes;
