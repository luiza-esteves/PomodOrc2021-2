import React, {useState} from 'react';
import TaskForm from './Taskform';
import {ReactComponent as Close} from '../../assets/close.svg';
import {ReactComponent as CLock} from '../../assets/clock.svg';
import {ReactComponent as Edit} from '../../assets/edit.svg';
import { link } from 'fs';

const Task = ({tasks, completeTask, updateTask,removeTask}) => {
    const [edit, setEdit] = useState({
      id: null,
      value: ''
    });

    const submitUpdate = value => {
        updateTask(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id){
        return <TaskForm edit={edit} onSubmit={submitUpdate}/>;
    }

    return tasks.map((task, index) =>(
        <div
            className={task.isComplete ? 'task-row complete' : 'task-row'}
            key={index}
            >
            <div className = "name" key={task.id} onClick={() => completeTask(task.id)}>
                {task.text}
            </div>
            <div className='icons'>
                <Close onClick={() => removeTask(task.id)} className='delete-icon'/>
                <Edit
                    onClick={() => setEdit({ id: task.id, value: task.text})}
                    className='edit-icon'
                />
              <CLock className='clock-icon'/>
            </div>
        </div>
    ));
}

export default Task;