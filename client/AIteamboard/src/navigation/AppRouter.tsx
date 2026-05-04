import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage} from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { ResetPage } from "../pages/ResetPage";
import { TasksPage } from "../pages/TaskPage";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/reset" element={<ResetPage />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
    </BrowserRouter>
  );
};