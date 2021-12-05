import React, {useState, useContext, useEffect} from 'react';
import Task from './Task';
import {ReactComponent as Back} from '../../assets/back.svg';
import './Style.css';
import TaskForm from "./Taskform";
import { Link, useParams } from 'react-router-dom';
import { Context } from '../../context';
import Api from '../../services/Api';

function TaskList(props) {

    const { id } = props

    const params = useParams()

    const {tasks, refreshTasks, createTasks, deleteTask, checkTask} = useContext(Context)

    useEffect(()=>{
        refreshTasks(params.taskListId);
     
    },[])

    const [tasksaux, setTasks] = useState([]);
    const addTask = task => {
        //se a pessoa não digitar uma letra, não será exibida
        if(!task.text || /^\s*$/.test(task.text)){
            console.log('entrou na condição')
            console.log({task})
            return ;
        }

        // const newTasks = [task, ...tasksaux];
        // setTasks(newTasks);
        console.log('chamou AddTask')
        createTasks(task.text, params.taskListId)
    };



    const removeTask = id => {
        const removeArr = [...tasksaux].filter(task => task._id !== id);
        setTasks(removeArr);
       
        deleteTask(id, params.taskListId)
    };

    const updateTask = (taskId, newValue) => {
        if(!newValue.title || /^\s*$/.test(newValue.title)){
            return ;
        }

        setTasks(prev => prev.map(item => (item._id == taskId ? newValue : item)));
    };

    const completeTask = id => {
        let updatedTasks = tasks.map(task =>{
            if(task._id == id){
                checkTask(task._id, task.taskListId, task.estado)
                task.estado = !task.estado
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
            <h1>Tarefas da Lista</h1>
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