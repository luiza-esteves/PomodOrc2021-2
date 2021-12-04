import React, { createContext, ReactNode } from "react";
import Api from "../services/Api";
import { useState, useEffect } from 'react';
import { idText } from "typescript";

interface IContextData {
    taskLists: ITaskList[];
    refreshTaskLists: () => void;
    createTaskList: (title: String) => Promise<void>;
    deleteTaskList: (id: string) => Promise<void>;
    tasks: ITask[];
    refreshTasks: (tasklistId: string) => Promise<void>;
    createTasks: (title: String, tasklistId: string) => Promise<void>;

}

interface IProviderProps {
    children: ReactNode
}

export const Context = createContext({} as IContextData)
export function Provider({ children }: IProviderProps) {
    const [taskLists, setTaskLists] = useState<ITaskList[]>([])
    const [tasks, setTasks] = useState<ITask[]>([])

    async function refreshTaskLists() {
        const response = await Api.get('/tasklist');

        setTaskLists([...response.data]);
        return;
    }

    async function createTaskList(title: String) {
        await Api.post('/tasklist', { title });
        await refreshTaskLists();
    }

    async function deleteTaskList(id: String) {
        try {
            const response = await Api.delete('tasklist/${id}', {});

            setTaskLists([...response.data]);

        } catch (err) {
            console.error({ error: err })
        }

    }

    async function refreshTasks(tasklistId: string) {
        const response = await Api.get('/task/tasks/' + tasklistId);

        console.log(typeof(response.data))
        console.log({response})
        
            setTasks([...response.data]);
        return;
    }

    async function createTasks(title: String, taskListId: string) {
        const aux = await Api.post('/task', { title:title, taskListId:taskListId, estado:false, tempo:0 });
        console.log({response:aux.data})
        await refreshTasks(taskListId);
    }

    async function deleteTask(id: String) {
        try {
            const response = await Api.delete('task/${id}', {});

            setTasks([...response.data]);

        } catch (err) {
            console.error({ error: err })
        }

    }

    return <Context.Provider value={{
        taskLists,
        refreshTaskLists,
        createTaskList,
        deleteTaskList,
        tasks,
        refreshTasks,
        createTasks,

    }}>{children}</Context.Provider>
}

