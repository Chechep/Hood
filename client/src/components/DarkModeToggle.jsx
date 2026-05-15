import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-11 h-11 rounded-2xl bg-white/10 border border-black/10 flex items-center justify-center"
    >
      {dark ? (
        <Sun className="text-emerald-300" size={18} />
      ) : (
        <Moon className="text-emerald-900" size={18} />
      )}
    </button>
  );
}