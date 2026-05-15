import { Radio } from "lucide-react";

export default function FloatingAlertButton() {
  return (
    <button className="fixed bottom-28 right-5 z-50 px-6 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-yellow-300 text-black font-semibold shadow-2xl shadow-emerald-500/30 animate-pulse flex items-center gap-3">
      <Radio />
      I'm In Your Area
    </button>
  );
}