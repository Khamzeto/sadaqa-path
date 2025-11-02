import { NavLink } from "react-router-dom";
import { Heart, Target, Clock, MoreHorizontal } from "lucide-react";

const navItems = [
  { path: "/", label: "Пожертвовать", icon: Heart },
  { path: "/campaigns", label: "Кампании", icon: Target },
  { path: "/history", label: "История", icon: Clock },
  { path: "/more", label: "Ещё", icon: MoreHorizontal },
];

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-nav border-t border-border z-50">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg flex-1 transition-colors ${
                isActive
                  ? "text-nav-active"
                  : "text-nav-foreground hover:text-foreground"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
                <span className={`text-xs ${isActive ? "font-semibold" : "font-medium"}`}>
                  {item.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
