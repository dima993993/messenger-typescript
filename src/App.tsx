import { Navigate, Route, Routes } from "react-router-dom";
import MessagesContainer from "./components/messages/MessagesContainer";
import { useAppSelector } from "./hooks/redux-hooks";
import AppContent from "./pages/AppContent";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  const { currentTheme } = useAppSelector((state) => state.theme);
  const body: any = document.querySelector("body");
  body.setAttribute("data-theme", currentTheme);
  return (
    <>
      <Routes>
        <Route path="/" element={<AppContent />}>
          <Route index element={<HomePage />} />
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
