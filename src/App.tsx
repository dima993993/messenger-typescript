import { Navigate, Route, Routes } from "react-router-dom";
import AppContent from "./pages/AppContent";
import LoginPage from "./pages/LoginPage";
import Messages from "./pages/Messages";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppContent />}>
          <Route path="dialog/:id" element={<Messages />} />
        </Route>
        <Route path="/authorization" element={<LoginPage />} />
        <Route path="/registration" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
