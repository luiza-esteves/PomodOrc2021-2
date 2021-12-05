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

    const {tasks, refreshTasks, createTasks, deleteTask} = useContext(Context)

    useEffect(()=>{
        refreshTasks(params.taskListId);
        console.log(id)
    },[])

    const [tasksaux, setTasks] = useState([]);
    const addTask = task => {
        //se a pessoa não digitar uma letra, não será exibida
        if(!task.text || /^\s*$/.test(task.text)){
            return ;
        }

        // const newTasks = [task, ...tasksaux];
        // setTasks(newTasks);
        createTasks(task.text, params.taskListId)
    };



    const removeTask = id => {
        console.log(id)
        const removeArr = [...tasksaux].filter(task => task.id !== id);
        setTasks(removeArr);
       
        console.log({id})
        deleteTask(id, params.taskListId)
    };

    const updateTask = (taskId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return ;
        }

        setTasks(prev => prev.map(item => (item.id == taskId ? newValue : item)));
    };

    const completeTask = id => {
        let updatedTasks = tasksaux.map(task =>{
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