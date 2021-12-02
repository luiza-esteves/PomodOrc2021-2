import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home";
import TaskList from "./pages/TasksPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasklist" element={<TaskList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;