import React from "react";
import { NavLink } from "react-router-dom";
import { Moon, Sun, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import MobileMenu from "@/components/layout/header/MobileMenu";
import { publicNavLinks } from "@/components/constant/publicNavigation";
import { useThemeToggle } from "@/components/hooks/toggleTheme";

// Icon button component
const IconButton = ({
  icon,
  onClick,
  label,
  title,
  variant = "ghost",
  className = "",
  asChild = false,
}) => (
  <Button
    variant={variant}
    size="icon"
    onClick={onClick}
    aria-label={label}
    title={title}
    className={`hover:cursor-pointer ${className}`}
    asChild={asChild}
  >
    {icon}
  </Button>
);

const Header = () => {
  const { darkMode, toggleDarkMode } = useThemeToggle();

  return (
    <div className="sticky top-0 z-50 w-full border-b border-border backdrop-blur">
      <div className="p-5 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold">
          <span className="text-foreground">Brick</span>{" "}
          <span className="text-accent">Draft</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-10">
          {publicNavLinks.map((link) => {
            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors flex items-center gap-2 ${
                    isActive
                      ? "text-accent"
                      : "text-foreground dark:hover:text-accent"
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        <div className="flex items-center md:gap-1">
          {/* Theme Toggle */}
          <IconButton
            icon={darkMode ? <Sun /> : <Moon />}
            onClick={toggleDarkMode}
            label="Toggle dark mode"
            title={darkMode ? "Toggle dark mode" : "Toggle light mode"}
          />

          {/* Desktop Sign In */}
          <NavLink to="/login">
            <Button
              className="hover:cursor-pointer hidden md:flex"
              variant="accent"
            >
              Sign In
            </Button>
          </NavLink>

          {/* Mobile Sign In */}
          <NavLink to="/login" className="md:hidden">
            <IconButton icon={<User />} label="Sign In" title="Sign In" />
          </NavLink>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <IconButton
                icon={<Menu />}
                label="Open menu"
                title="Open menu"
                className="md:hidden"
              />
            </SheetTrigger>
            <MobileMenu navLinks={publicNavLinks} />
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
