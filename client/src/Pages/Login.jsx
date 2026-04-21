export default function Login() {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-80">
          <h2 className="text-xl font-bold mb-4 text-emerald-600">Login</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-2 rounded border"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-2 rounded border"
          />
          <button className="w-full bg-emerald-500 text-lightyellow p-2 rounded">
            Login
          </button>
        </div>
      </div>
    );
  }