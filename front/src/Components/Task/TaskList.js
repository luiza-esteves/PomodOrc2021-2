import React, {useState} from 'react';
import Task from './Task';
import {ReactComponent as Back} from '../../assets/back.svg';

import TaskForm from "./Taskform";
import { Link } from 'react-router-dom';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const addTask = task => {
        //se a pessoa não digitar uma letra, não será exibida
        if(!task.text || /^\s*$/.test(task.text)){
            return ;
        }

        const newTasks = [task, ...tasks];
        setTasks(newTasks);
    };



    const removeTask = id => {
        const removeArr = [...tasks].filter(task => task.id !== id);
        setTasks(removeArr);
    };

    const updateTask = (taskId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return ;
        }

        setTasks(prev => prev.map(item => (item.id == taskId ? newValue : item)));
    };

    const completeTask = id => {
        let updatedTasks = tasks.map(task =>{
            if(task.id == id){
                task.isComplete = !task.isComplete
            }
            return task
        })

        setTasks(updatedTasks);
    };

    return (
        
        <div>
            <button className="back" >
             <Link to="/ListTasks"><Back className="back-icon" /></Link>
            </button>
            <h1>Tarefas da lista </h1>
            <TaskForm onSubmit={addTask} />
            <Task 
                tasks = {tasks}
                completeTask={completeTask} 
                removeTask = {removeTask}
                updateTask = {updateTask}
            />

        </div>
    );
}

export default TaskList