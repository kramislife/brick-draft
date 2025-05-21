import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import {
  BackToTopButton,
  ScrollToTop,
} from "@/components/layout/scroll/ScrollToTop";

const RootLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1 mx-auto w-full max-w-screen-2xl">
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default RootLayout;
