export default function Settings() {
  return (
    <div className="rounded-[40px] bg-white/5 border border-white/10 p-10">
      <h1 className="text-4xl font-black">
        Settings
      </h1>

      <div className="space-y-5 mt-8">
        <div className="flex items-center justify-between">
          <span>Dark Mode</span>

          <button className="w-14 h-8 rounded-full bg-emerald-400" />
        </div>

        <div className="flex items-center justify-between">
          <span>Push Notifications</span>

          <button className="w-14 h-8 rounded-full bg-yellow-300" />
        </div>
      </div>
    </div>
  );
}