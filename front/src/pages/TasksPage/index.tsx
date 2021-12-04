import './styles.css';
import TaskList from "../../Components/Task/TaskList";
import { useParams } from 'react-router-dom'

const TaskPage = (props: any) => {
    const { tasklistId } = useParams()
    return (
        <div className="container">
            <div className="borda-left"></div>
            <div className="taskList">
                <TaskList tasklistId={tasklistId} />
            </div>
            <div className="borda-right"></div>
        </div>
    );

}

export default TaskPage;