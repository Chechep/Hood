import Button from "../components/Button";

export default function Dashboard() {
  const sendAlert = () => {
    alert("Alert sent to nearby users 🚀");
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
        Vendor Dashboard
      </h2>

      <Button text="I'm in this area" onClick={sendAlert} />
    </div>
  );
}