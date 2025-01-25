import  express from "express";
import MonitorController from "./monitor-controller.js";
import { createMonitorValidator } from "./monitor-validator.js";

const monitorRoter = () => {
    let router = express.Router()
    let monitorController = new MonitorController()
    router.get('/', monitorController.getAll)
    router.get('/:id', monitorController.getById)
    router.post('/', createMonitorValidator, monitorController.create)
    router.delete('/:id', monitorController.delete)
    return router;
}

export { monitorRoter }