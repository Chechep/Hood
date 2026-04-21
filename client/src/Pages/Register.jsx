export default function Register() {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-80">
          <h2 className="text-xl font-bold mb-4 text-emerald-600">Register</h2>
          <input type="text" placeholder="Name" className="w-full mb-3 p-2 border rounded" />
          <input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
          <button className="w-full bg-emerald-500 text-lightyellow p-2 rounded">
            Sign Up
          </button>
        </div>
      </div>
    );
  }