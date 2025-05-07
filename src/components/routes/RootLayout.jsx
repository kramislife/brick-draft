import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/layout/header/Header";

const RootLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mx-auto p-5">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
