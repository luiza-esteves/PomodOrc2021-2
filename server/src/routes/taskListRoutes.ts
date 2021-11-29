import { Router } from "express";
import TaskListController from "../controllers/TaskListController";

const taskListRoutes = Router();
const taskController = new TaskListController;


taskListRoutes.post('/', (req, res) =>{
    taskController.createTaskList(req,res);
});

taskListRoutes.get('/', (req, res) =>{
    taskController.getAllTasks(req,res);
});

taskListRoutes.get('/:id', (req, res) =>{
    taskController.getOneTask(req,res);
});

taskListRoutes.patch('/id', (req, res) =>{
    taskController.updateOneTask(req,res);
});

taskListRoutes.delete('/:id', (req, res) =>{
    taskController.deleteOneTask(req,res);
});

export default taskListRoutes;