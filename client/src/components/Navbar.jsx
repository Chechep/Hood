import { Bell, Radio } from "lucide-react";
import { motion } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-darkgreen-300 flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <Radio />
          </div>

          <div>
            <h1 className="font-bold text-xl">Hood Alert</h1>
          </div>
        </motion.div>

        <div className="flex items-center">

          <DarkModeToggle />
        </div>
      </div>
    </header>
  );
}