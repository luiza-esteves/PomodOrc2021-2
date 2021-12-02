import React, {Component} from 'react';
import './styles.css';
import TaskList from "../../components/Task/TaskList";
const TaskPage = () =>{
    return(
        <div className="container">
        <div className="borda-left"></div>
        <div className="taskList">
            <TaskList />
        </div>
        <div className="borda-right"></div>
        </div>
    );
 
}

export default TaskPage;