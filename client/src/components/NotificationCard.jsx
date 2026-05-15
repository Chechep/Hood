import { motion } from "framer-motion";

export default function NotificationCard({
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5"
    >
      <h3 className="font-semibold">{title}</h3>

      <p className="text-gray-400 text-sm mt-2">
        {description}
      </p>
    </motion.div>
  );
}