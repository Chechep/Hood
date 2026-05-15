export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] px-6">
      <div className="w-full max-w-md rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-2xl p-10">
        <h1 className="text-4xl font-black text-white">
          Welcome Back
        </h1>

        <div className="space-y-5 mt-8">
          <input
            type="email"
            placeholder="Email"
            className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-5 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full h-14 rounded-2xl bg-white/5 border border-white/10 px-5 text-white outline-none"
          />

          <button className="w-full h-14 rounded-2xl bg-gradient-to-r from-emerald-400 to-yellow-300 text-black font-bold">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}