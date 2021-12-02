import { Router } from "express";
import TaskController from "../controllers/TaskController";

const taskRoutes = Router();
const taskController = new TaskController;


taskRoutes.post('/', (req, res) =>{
    taskController.createTask(req,res);
});

taskRoutes.get('/', (req, res) =>{
    taskController.getAllTasks(req,res);
});

taskRoutes.get('/:id', (req, res) =>{
    taskController.getOneTask(req,res);
});

taskRoutes.patch('/:id', (req, res) =>{
    taskController.updateOneTask(req,res);
});

taskRoutes.delete('/:id', (req, res) =>{
    taskController.deleteOneTask(req,res);
});

export default taskRoutes;