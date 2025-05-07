import React from "react";
import { Routes, Route } from "react-router-dom";
import RootLayout from "@/components/routes/RootLayout";
import ProtectedRoutes from "@/components/routes/ProtectedRoutes";
import Home from "@/components/pages/Home";
import About from "@/components/pages/About";
import Contact from "@/components/pages/Contact";
import History from "@/components/pages/History";
import Login from "@/components/pages/auth/Login";

const UserRoutes = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/history" element={<History />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<div>Dashboard Page</div>} />
          <Route path="/profile" element={<div>Profile Page</div>} />
        </Route>
      </Route>
    </Routes>
  );
};

export default UserRoutes;
