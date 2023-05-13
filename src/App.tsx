import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<LoginPage />} path="/*" />
      </Routes>
    </div>
  );
}

export default App;
