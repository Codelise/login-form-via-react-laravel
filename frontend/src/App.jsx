import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/Login";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}
