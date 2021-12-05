import React, { createContext, ReactNode } from "react";
import Api from "../services/Api";
import { useState, useEffect } from 'react';
import { idText } from "typescript";

interface IContextData {
    taskLists: ITaskList[];
    refreshTaskLists: () => void;
    createTaskList: (title: string) => Promise<void>;
    deleteTaskList: (id: string) => Promise<void>;
    tasks: ITask[];
    refreshTasks: (tasklistId: string) => Promise<void>;
    createTasks: (title: string, tasklistId: string) => Promise<void>;
    deleteTask: (id: string, taskListId: string) => Promise<void>
    checkTask: (id: string, taskListId: string, state: boolean) => Promise<void>
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

    async function createTaskList(title: string) {
        await Api.post('/tasklist', { title });
        await refreshTaskLists();
    }

    async function deleteTaskList(id: string) {
        try {
            const response = await Api.delete(`tasklist/${id}`, {});

            refreshTaskLists()

        } catch (err) {
            console.error({ error: err })
        }

    }

    async function refreshTasks(tasklistId: string) {
        const response = await Api.get('/task/tasks/' + tasklistId);


        setTasks([...response.data]);
        return;
    }

    async function createTasks(title: string, taskListId: string) {
        console.log('chamou createTasks')
        const aux = await Api.post('/task', { title: title, taskListId: taskListId, estado: false, tempo: 0 });
        await refreshTasks(taskListId);
    }

    async function deleteTask(id: string, taskListId: string) {
        try {
            const testandoumamerda = id.toString()
            const response = await Api.delete(`/task/${testandoumamerda}`, { data: { id } });

            refreshTasks(taskListId)
            // setTasks([...response.data]);

        } catch (error) {
            console.error({ error: error })
        }

    }

    async function checkTask(id: string, taskListId: string, state: boolean) {
        try {
            await Api.patch(`/task/${id}`, {estado: !state })

            refreshTasks(taskListId)

        } catch (error) {
            console.error({error})
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
        deleteTask,
        checkTask,

    }}>{children}</Context.Provider>
}

