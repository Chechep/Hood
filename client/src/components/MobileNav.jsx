import {
    House,
    Bell,
    User,
    LayoutDashboard,
    Radio,
  } from "lucide-react";
  
  import { NavLink } from "react-router-dom";
  
  const links = [
    { icon: House, path: "/" },
    { icon: Bell, path: "/alerts" },
    { icon: Radio, path: "/vendor" },
    { icon: LayoutDashboard, path: "/dashboard" },
    { icon: User, path: "/profile" },
  ];
  
  export default function MobileNav() {
    return (
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
        <div className="backdrop-blur-2xl bg-white/10 border border-white/10 px-6 py-4 rounded-full flex items-center gap-6 shadow-2xl">
          {links.map((item, index) => {
            const Icon = item.icon;
  
            return (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `transition-all ${
                    isActive
                      ? "text-emerald-400 scale-110"
                      : "text-gray-400"
                  }`
                }
              >
                <Icon size={22} />
              </NavLink>
            );
          })}
        </div>
      </div>
    );
  }