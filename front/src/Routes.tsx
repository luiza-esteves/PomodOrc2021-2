import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListTasks from "./pages/ListTasks";
import Home from "./pages/Home";
import Pomodoro from "./pages/Pomodoro";
import TaskList from "./pages/TaskPage";

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/ListTasks" element={<ListTasks/>} />
            <Route path="/pomodoro" element={<Pomodoro/>} />
            <Route path="/tasklist" element={<TaskList />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router;