import React, {useState} from 'react';
import TaskForm from './Taskform';
import {ReactComponent as Close} from '../../assets/close.svg';
import {ReactComponent as CLock} from '../../assets/clock.svg';
import {ReactComponent as Edit} from '../../assets/edit.svg';
import { Link } from "react-router-dom";
import { Text } from "./styles";

const Task = ({tasks, completeTask, updateTask,removeTask}) => {
    const [edit, setEdit] = useState({
      id: null,
      value: ''
    });

    const submitUpdate = value => {
        updateTask(edit._id, value)
        setEdit({
            id: null,
            value: ''
        })
    }
;
    
    if(edit._id){
        return <TaskForm edit={edit} onSubmit={submitUpdate}/>;
    }

    return tasks.map((task, index) =>(
        <div
            className={task.estado ? 'task-row complete' : 'task-row'}
            key={index}
            >
            <div className = "name" key={task._id}
            
            onClick={() => completeTask(task._id)}>
                
                {task.title}
             

            </div>
            <div className='icons'>
                <Close onClick={() => removeTask({id: task._id})} className='delete-icon'/>
                <Edit
                    onClick={() => setEdit({ id: task._id, value: task.text})}
                    className='edit-icon'
                />
                 <Link to="/pomodoro"> <CLock className='clock-icon'/> </Link>
             
            </div>
        </div>
    ));
}

export default Task;