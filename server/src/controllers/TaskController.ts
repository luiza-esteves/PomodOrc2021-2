import {Request, Response} from 'express';
import task from '../models/taskSchema';

export default class TaskController{
    createTask = async(req: Request, res: Response) => {
        try {
            await task.create(req.body);
            res.status(200).json({message: "Task criada com sucesso"});
        } catch (error) { 
            console.log(error);
            res.status(400).json({message: "erro ao criar a task"});
        }
    }

    getAllTasks = async(req: Request, res: Response) => {
        try {
            const response = await task.find();
            res.status(200).json(response);

        } catch (error) {
            console.log(error);
            res.status(400).json({message: "erro ao pegar todas as tasks"});
        }
    }

    getOneTask = async(req: Request, res: Response) => {
        const {id} = req.params;

        try {
            const response = await task.findById(id);
            res.status(200).json(response);

        } catch (error) {
            console.log(error);
            res.status(400).json({message: "erro ao pegar a task"});
        }
    }

    updateOneTask = async(req: Request, res: Response) => {
        const {id} = req.params;

        try { 
            const tasks = await task.findById(id);
            if(!task){
                res.status(400).json({message: "Task não existe"});
            }
            await task.updateOne(req.body);
            res.status(200).json({message: "task atualizada com sucesso"});

        } catch (error) {
            console.log(error);
            res.status(400).json({message: "falha ao atualizar task"});
        }
    }

    deleteOneTask = async(req: Request, res: Response) => {
        const {id} = req.params;

        try {
            await task.findByIdAndDelete(id);
            res.status(200).json({message: "task deletada com sucesso"});

        } catch (error) {
            console.log(error);
            res.status(400).json({message: "erro ao deletar a task"});
        }
    }
}