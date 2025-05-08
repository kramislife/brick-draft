import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

const RootLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mx-auto p-5 w-full max-w-screen-2xl">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
