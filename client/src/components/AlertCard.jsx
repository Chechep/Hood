import { motion } from "framer-motion";
import { BellRing, MapPin } from "lucide-react";

export default function AlertCard({
  title,
  location,
  time,
  urgent,
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-3xl p-5 border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <BellRing
              className={`${
                urgent ? "text-yellow-300" : "text-emerald-400"
              }`}
            />

            <h3 className="font-semibold text-lg">{title}</h3>
          </div>

          <div className="flex items-center gap-2 mt-3 text-sm text-gray-400">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
        </div>

        <span className="text-xs text-gray-500">{time}</span>
      </div>
    </motion.div>
  );
}