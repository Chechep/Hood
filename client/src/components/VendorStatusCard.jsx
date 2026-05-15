import { Truck, Radio } from "lucide-react";

export default function VendorStatusCard() {
  return (
    <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-emerald-500/20 to-yellow-300/10 border border-emerald-400/20">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400 blur-3xl opacity-20" />

      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-gray-300 text-sm">Vendor Status</p>

          <h2 className="text-2xl font-bold mt-2">
            Active Nearby
          </h2>

          <p className="text-gray-400 mt-2 text-sm">
            12 delivery vendors are currently live
          </p>
        </div>

        <div className="w-16 h-16 rounded-2xl bg-emerald-400/20 flex items-center justify-center">
          <Truck className="text-emerald-300" />
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 text-emerald-300">
        <Radio className="animate-pulse" size={16} />
        Live tracking enabled
      </div>
    </div>
  );
}