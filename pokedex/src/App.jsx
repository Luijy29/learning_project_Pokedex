import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TasksPage } from "./pages/TaskPage";
import { TasksFromPage } from "./pages/TaskFromPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Navigate to="/tasks" />} />
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='/tasks-create' element={<TasksFromPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;