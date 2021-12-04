import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListTasks from "./pages/ListTasks";
import Home from "./pages/Home";
import Pomodoro from "./pages/Pomodoro";
import TaskList from "./pages/TasksPage";

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/ListTasks" element={<ListTasks/>} />
            <Route path="/pomodoro" element={<Pomodoro/>} />
            <Route path="/tasklist/:tasklistId" element={<TaskList />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router;