import React, {createContext, ReactNode} from "react";
import Api from "../services/Api";
import {useState, useEffect} from 'react';

interface IContextData{
    taskLists: ITaskList[];
    refreshTaskLists : ()=>void;
    createTaskList : (title: String) => Promise<void>;

}

interface IProviderProps{
    children: ReactNode
}

export const Context = createContext({} as IContextData)
export function Provider({children}:IProviderProps){
    const [taskLists, setTaskLists] = useState<ITaskList[]>([])

    async function refreshTaskLists(){
      const response = await Api.get('/tasklist');
   
      setTaskLists([...response.data]);
      return ;
    }

    async function createTaskList(title: String){
        await Api.post('/tasklist', {title});
        await refreshTaskLists();
    }

    return <Context.Provider value={{
        taskLists,
        refreshTaskLists,
        createTaskList

    }}>{children}</Context.Provider>
}

