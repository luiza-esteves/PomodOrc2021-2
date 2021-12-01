import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListTasks from "./pages/ListTasks";
import Home from "./pages/Home";
import Pomodoro from "./pages/Pomodoro";

const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<ListTasks/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/pomodoro" element={<Pomodoro/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default Router