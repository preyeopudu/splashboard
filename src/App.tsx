import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <div className="h-full">
      <Routes>
        <Route element={<LoginPage />} path="/*" />
        <Route element={<HomePage />} path="/home" />
      </Routes>
    </div>
  );
}

export default App;
