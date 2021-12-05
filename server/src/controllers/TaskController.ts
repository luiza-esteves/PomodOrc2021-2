import {Request, Response} from 'express';
import Task from '../models/taskSchema';
import TaskList from '../models/taskListSchema';
import { ObjectId  } from 'mongoose';

export default class TaskController{
    createTask = async(req: Request, res: Response) => {
        const {title, estado, tempo, taskListId} = req.body;
        try { 
            
            const taskListVerification = await TaskList.findById(taskListId);
            
            if(!taskListVerification){
                return res.status(404).json("tasklist não encontrada");
            }
            await Task.create(req.body);

            return res.status(200).json({message: "Task criada com sucesso"});
        } catch (error) { 
            console.log(error); 
            return res.status(400).json({message: "erro ao criar a task"});
        }
    }

    getAllTasks = async(req: Request, res: Response) => {
        try {
            const response = await Task.find();
            return res.status(200).json(response);

        } catch (error) {
            console.log(error);
            return res.status(400).json({message: "erro ao pegar todas as tasks"});
        }
    }

    getOneTask = async(req: Request, res: Response) => {
        const {id} = req.params;

        try {
            const response = await Task.findById(id);
            return res.status(200).json(response);

        } catch (error) {
            console.log(error);
            return res.status(400).json({message: "erro ao pegar a task"});
        }
    }

    getTasksByTasklist  = async(req: Request, res: Response) => {
        const {taskListId} = req.params;
        const taskListVerification = await TaskList.findById(taskListId);
            if(!taskListVerification){
                return res.status(404).json("tasklist não encontrada");
            }

        try {

            const response = await Task.find({taskListId: taskListId});
            
            return res.status(200).json(response);

        } catch (error) {
            console.log(error);
            return res.status(400).json({message: "erro ao pegar tasks"});
        }
    }

    updateOneTask = async(req: Request, res: Response) => {
        const {id} = req.params;

        try { 
            const tasks = await Task.findById(id);
            if(!Task){
                return res.status(400).json({message: "Task não existe"});
            }
            await Task.updateOne(req.body);
            return res.status(200).json({message: "task atualizada com sucesso"});

        } catch (error) {
            console.log(error);
            return res.status(400).json({message: "falha ao atualizar task"});
        }
    }

    deleteOneTask = async(req: Request, res: Response) => {
        const id = req.body.id;
    

        try {
            // const test = await Task.findById(id.id)
        
            await Task.findByIdAndDelete(id.id);
            return res.status(200).json({message: "task deletada com sucesso"});

        } catch (error) {
            console.log(error.message);
            return res.status(400).json({message: "erro ao deletar a task"});
        }
    }
}