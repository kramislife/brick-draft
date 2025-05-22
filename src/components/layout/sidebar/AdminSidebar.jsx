import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, PanelLeft, PanelRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { adminNavigation } from "@/constant/adminNavigation";

const AdminSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="relative">
      <div
        className={`h-screen border-r flex flex-col transition-all duration-300 ease-in-out ${
          collapsed ? "w-20" : "w-72"
        }`}
      >
        {/* Header with integrated toggle button */}
        <div className="flex items-center justify-between p-5">
          {!collapsed && (
            <div className="flex items-center gap-3">
              <Box size={24} />
              <h1 className="font-bold text-xl whitespace-nowrap">
                Brick Draft
              </h1>
            </div>
          )}

          {/* Toggle button inside header */}
          <Button variant="ghost" size="sm" onClick={toggleSidebar}>
            {collapsed ? <PanelRight /> : <PanelLeft />}
          </Button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-3 py-5">
          {adminNavigation.map((section, index) => (
            <div key={index} className="mb-5">
              {!collapsed && (
                <div className="px-3 mb-3">
                  <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    {section.section}
                  </h2>
                </div>
              )}

              <div className="space-y-2">
                {section.items.map((item, itemIndex) => {
                  const Icon = item.icon;

                  return (
                    <NavLink
                      key={itemIndex}
                      to={item.path}
                      title={item.label}
                      end={item.path === "/admin"}
                      className={({ isActive }) => `
                        group flex items-center p-4 rounded-xl text-sm font-medium transition-all duration-200
                        ${
                          isActive
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground hover:bg-ring/10"
                        }
                      `}
                    >
                      <div
                        className={`flex items-center ${
                          collapsed ? "justify-center w-full" : "gap-4 flex-1"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        {!collapsed && <span>{item.label}</span>}
                      </div>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
