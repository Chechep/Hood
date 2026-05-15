import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import MobileNav from "../components/MobileNav";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden">
      <Navbar />

      <main className="pb-28 pt-36 md:pt-40 px-4 md:px-8 max-w-7xl mx-auto">
        <Outlet />
      </main>

      <MobileNav />
    </div>
  );
}