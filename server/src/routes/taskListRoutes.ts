import { Router } from "express";
import TaskListController from "../controllers/TaskListController";

const taskListRoutes = Router();
const taskListController = new TaskListController;


taskListRoutes.post('/', (req, res) =>{
    taskListController.createTaskList(req,res);
});

taskListRoutes.get('/', (req, res) =>{
    taskListController.getAllTasks(req,res);
});

taskListRoutes.get('/:id', (req, res) =>{
    taskListController.getOneTask(req,res);
});

taskListRoutes.patch('/:id', (req, res) =>{
    taskListController.updateOneTask(req,res);
});

taskListRoutes.delete('/:id', (req, res) =>{
    taskListController.deleteOneTask(req,res);
});

export default taskListRoutes;