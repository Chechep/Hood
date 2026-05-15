import { motion } from "framer-motion";
import AlertCard from "../components/AlertCard";
import VendorStatusCard from "../components/VendorStatusCard";
import NotificationCard from "../components/NotificationCard";
import MapPreview from "../components/MapPreview";
import FloatingAlertButton from "../components/FloatingAlertButton";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-14">
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-400/20 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-3xl"
        >
          <span className="px-4 py-2 rounded-full bg-yellow-300/10 text-yellow-200 text-sm border border-yellow-300/20">
            Live Community Tracking
          </span>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mt-6">
            Stay Connected To Your Neighborhood In Real Time
          </h1>

          <p className="text-gray-400 text-lg mt-6">
            Track nearby vendors, receive alerts, and monitor
            community activity instantly.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-yellow-300 text-black font-semibold shadow-lg shadow-emerald-500/20">
              Open Dashboard
            </button>

            <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5">
              Explore Alerts
            </button>
          </div>
        </motion.div>
      </section>

      <VendorStatusCard />

      <MapPreview />

      <section className="grid md:grid-cols-2 gap-6">
        <AlertCard
          title="Milk Vendor Nearby"
          location="Westlands"
          time="2 mins ago"
          urgent
        />

        <AlertCard
          title="Fresh Bread Delivery"
          location="Kilimani"
          time="5 mins ago"
        />
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <NotificationCard
          title="New Vendor Joined"
          description="A new grocery vendor is active near your area."
        />

        <NotificationCard
          title="Traffic Update"
          description="Vendor route adjusted due to congestion."
        />

        <NotificationCard
          title="Safety Notice"
          description="Community watch alert has been issued."
        />
      </section>

      <FloatingAlertButton />
    </div>
  );
}