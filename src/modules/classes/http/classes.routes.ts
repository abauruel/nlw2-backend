import { Router } from "express";

import ClassesController from "./controllers/classesController";
const classesRoutes = Router();

const classesController = new ClassesController();

classesRoutes.post("/", classesController.store);
classesRoutes.get("/", classesController.index);

export default classesRoutes;
