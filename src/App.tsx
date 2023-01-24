import { Navigate, Route, Routes } from "react-router-dom";
import MessagesContainer from "./components/messages/MessagesContainer";
import AppContent from "./pages/AppContent";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppContent />}>
          <Route index element={<div>Choose Dialog</div>} />
          <Route path="dialog/:id" element={<MessagesContainer />} />
        </Route>
        <Route path="/authorization" element={<LoginPage />} />
        <Route path="/registration" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
