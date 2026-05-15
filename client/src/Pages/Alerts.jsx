import AlertCard from "../components/AlertCard";

export default function Alerts() {
  return (
    <div>
      <h1 className="text-4xl font-black mb-8">
        Live Neighborhood Alerts
      </h1>

      <div className="space-y-5">
        <AlertCard
          title="Water Truck Nearby"
          location="Langata"
          time="1 min ago"
          urgent
        />

        <AlertCard
          title="Fresh Fruits Vendor"
          location="Karen"
          time="6 mins ago"
        />

        <AlertCard
          title="Gas Delivery Alert"
          location="CBD"
          time="10 mins ago"
          urgent
        />
      </div>
    </div>
  );
}