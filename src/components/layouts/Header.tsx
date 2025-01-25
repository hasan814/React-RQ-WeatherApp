import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme-provider";
import { Link } from "react-router-dom";

const Header = () => {
  // ============== Context ============
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  // ============== Rendering ============
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/30">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <img
            src={isDark ? "/public/dark.svg" : "/public/light.svg"}
            alt="climate Logo"
            className="h-14"
          />
        </Link>
        <div
          className={`flex items-center cursor-pointer transition-transform duration-500 ${
            isDark ? "rotate-180" : "rotate-0"
          }`}
          onClick={() => setTheme(isDark ? "light" : "dark")}
        >
          {isDark ? (
            <Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all" />
          ) : (
            <Moon className="h-6 w-6 text-blue-500 rotate-0 transition-all" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
