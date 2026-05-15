import FloatingAlertButton from "../components/FloatingAlertButton";

export default function VendorPanel() {
  return (
    <div className="space-y-8">
      <div className="rounded-[40px] bg-white/5 border border-white/10 p-10">
        <h1 className="text-5xl font-black">
          Vendor Broadcast Panel
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl">
          Notify nearby residents instantly when you're active.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <button className="h-40 rounded-3xl bg-gradient-to-br from-emerald-400 to-emerald-700 text-2xl font-bold text-black">
            GO LIVE
          </button>

          <button className="h-40 rounded-3xl bg-yellow-300 text-black text-2xl font-bold">
            SEND ALERT
          </button>
        </div>
      </div>

      <FloatingAlertButton />
    </div>
  );
}