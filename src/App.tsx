import { Route, Routes } from "react-router-dom";
import AppContent from "./pages/AppContent";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AppContent />} />
        <Route path='/authorization' element={<LoginPage />} />
        <Route path='/registration' element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default App;
