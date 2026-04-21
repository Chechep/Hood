import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UserSettings from "./pages/UserSettings";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-lightyellow dark:bg-gray-900 min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<UserSettings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}