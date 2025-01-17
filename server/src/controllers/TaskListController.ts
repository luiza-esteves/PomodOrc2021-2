import {Request, Response} from 'express';
import taskListSchema from '../models/taskListSchema';

export default class TaskListController{
    createTaskList = async(req: Request, res: Response) => {
        try {
            await taskListSchema.create(req.body);
            res.status(200).json({message: "Task List criada com sucesso"});
        } catch (error) { 
            console.log(error);
            res.status(400).json({message: "erro ao criar a tasklist"});
        }
    }

    getAllTasks = async(req: Request, res: Response) => {
        try {
            const response = await taskListSchema.find();
            res.status(200).json(response);

        } catch (error) {
            console.log(error);
            res.status(400).json({message: "erro ao pegar todas as tasklists"});
        }
    }

    getOneTask = async(req: Request, res: Response) => {
        const {id} = req.params;

        try {
            const response = await taskListSchema.findById(id);
            res.status(200).json(response);

        } catch (error) {
            console.log(error);
            res.status(400).json({message: "erro ao pegar a tasklist"});
        }
    }

    updateOneTask = async(req: Request, res: Response) => {
        const {id} = req.params;

        try { 
            const task = await taskListSchema.findById(id);
            if(!task){
                res.status(400).json({message: "Tasklist não existe"});
            }
            await task.updateOne(req.body);
            res.status(200).json({message: "tasklist atualizada com sucesso"});

        } catch (error) {
            console.log(error);
            res.status(400).json({message: "falha ao atualizar tasklist"});
        }
    }

    deleteOneTask = async(req: Request, res: Response) => {
        const {id} = req.params;

        try {
            await taskListSchema.findByIdAndDelete(id);
            res.status(200).json({message: "tasklist deletada com sucesso"});

        } catch (error) {
            console.log(error);
            res.status(400).json({message: "erro ao deletar a tasklist"});
        }
    }
}