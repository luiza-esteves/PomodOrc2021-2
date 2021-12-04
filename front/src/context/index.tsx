import React, {createContext, ReactNode} from "react";
import Api from "../services/Api";
import {useState, useEffect} from 'react';
import { idText } from "typescript";

interface IContextData{
    taskLists: ITaskList[];
    refreshTaskLists : ()=>void;
    createTaskList : (title: String) => Promise<void>;
    deleteTaskList: (id: string) => Promise<void>;
    tasks: ITask[];
    refreshTasks: (tasklistId: string) => Promise <void>;
    createTasks : (title: String, tasklistId: string) => Promise<void>;

}

interface IProviderProps{
    children: ReactNode
}

export const Context = createContext({} as IContextData)
export function Provider({children}:IProviderProps){
    const [taskLists, setTaskLists] = useState<ITaskList[]>([])
    const [tasks, setTasks] = useState<ITask[]>([])

    async function refreshTaskLists(){
      const response = await Api.get('/tasklist');
   
      setTaskLists([...response.data]);
      return ;
    }

    async function createTaskList(title: String){
        await Api.post('/tasklist', {title});
        await refreshTaskLists();
    }

    async function deleteTaskList(id:String) {
        try {
            const response = await Api.delete('tasklist/${id}',{});
           
            setTaskLists([...response.data]);

        } catch (err) {
            console.error({ error: err })
        }

    }

    async function refreshTasks(tasklistId: string){
        const response = await Api.get('/task/' + tasklistId);
     
        setTasks([...response.data]);
        return ;
      }
  
      async function createTasks(title: String, tasklistId: string){
          await Api.post('/tasklist', {title, tasklistId});
          await refreshTasks(tasklistId);
      }

      async function deleteTask(id:String) {
        try {
            const response = await Api.delete('task/${id}',{});
           
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

