import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-8xl font-black">404</h1>

      <p className="text-gray-400 mt-4">
        Page not found
      </p>

      <Link
        to="/"
        className="mt-8 px-6 py-4 rounded-2xl bg-emerald-400 text-black font-semibold"
      >
        Go Home
      </Link>
    </div>
  );
}