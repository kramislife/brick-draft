import React from "react";
import { NavLink } from "react-router-dom";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const MobileMenu = ({ navLinks }) => {
  return (
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle className="text-left sr-only">Menu</SheetTitle>
        <SheetDescription className="sr-only">
          This is a mobile menu
        </SheetDescription>
      </SheetHeader>
      <nav className="flex flex-col gap-3 mt-10">
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-base transition-colors p-2 rounded-md flex items-center gap-3 ${
                  isActive
                    ? "dark:text-accent-foreground bg-accent"
                    : "hover:bg-muted"
                }`
              }
            >
              <SheetClose asChild>
                <span className="flex items-center gap-3 w-full">
                  <Icon size={20} />
                  {link.name}
                </span>
              </SheetClose>
            </NavLink>
          );
        })}
      </nav>
    </SheetContent>
  );
};

export default MobileMenu;
