import { Bell, Home, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-emerald-600 dark:bg-emerald-800 text-lightyellow px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">HoodAlert</h1>

      <div className="flex gap-4">
        <Link to="/" className="flex items-center gap-1">
          <Home size={18} /> Home
        </Link>
        <Link to="/dashboard" className="flex items-center gap-1">
          <Bell size={18} /> Alerts
        </Link>
        <Link to="/settings" className="flex items-center gap-1">
          <User size={18} /> Settings
        </Link>
      </div>
    </nav>
  );
}