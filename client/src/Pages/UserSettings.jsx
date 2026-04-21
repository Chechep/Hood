export default function UserSettings() {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold text-emerald-600 mb-4">
          Settings
        </h2>
  
        <label className="block mb-2">Notification Type</label>
        <select className="p-2 border rounded">
          <option>Push</option>
          <option>SMS</option>
        </select>
      </div>
    );
  }