import VendorStatusCard from "../components/VendorStatusCard";
import AlertCard from "../components/AlertCard";
import ProductBadge from "../components/ProductBadge";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <VendorStatusCard />

      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
          <h3 className="text-gray-400">Active Vendors</h3>
          <h1 className="text-5xl font-black mt-3">18</h1>
        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
          <h3 className="text-gray-400">Alerts Today</h3>
          <h1 className="text-5xl font-black mt-3">42</h1>
        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
          <h3 className="text-gray-400">Neighborhoods</h3>
          <h1 className="text-5xl font-black mt-3">7</h1>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <ProductBadge label="Milk" />
        <ProductBadge label="Groceries" />
        <ProductBadge label="Bread" />
        <ProductBadge label="Gas" />
      </div>

      <div className="space-y-5">
        <AlertCard
          title="Gas Vendor Arriving"
          location="South B"
          time="Now"
          urgent
        />

        <AlertCard
          title="Fresh Vegetables Nearby"
          location="Runda"
          time="8 mins ago"
        />
      </div>
    </div>
  );
}