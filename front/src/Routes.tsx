import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListTasks from "./pages/ListTasks";
import Home from "./pages/Home";
import Pomodoro from "./pages/Pomodoro";
import TaskPage from "./pages/TasksPage";

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/ListTasks" element={<ListTasks/>} />
            <Route path="/pomodoro" element={<Pomodoro/>} />
            <Route path="/tasklist/:taskListId" element={<TaskPage />} />
            {/* <Route path="/tasklist/:taskListId" element={<p>Tá chamando essa poha</p>} />
            <Route path="/tasklist/" element={<p> chamandooo </p> } /> */}


        </Routes>
        </BrowserRouter>
    )
}

export default Router;