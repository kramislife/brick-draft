import React from "react";
import { Routes, Route } from "react-router-dom";
import RootLayout from "@/components/routes/RootLayout";
import ProtectedRoutes from "@/components/routes/ProtectedRoutes";
import Home from "@/components/pages/Home";
import About from "@/components/pages/About";
import Contact from "@/components/pages/Contact";
import History from "@/components/pages/History";
import Login from "@/components/pages/auth/Login";
import TermsofUse from "@/components/layout/footer/TermsofUse";
import PrivacyPolicy from "@/components/layout/footer/PrivacyPolicy";
import Register from "@/components/pages/auth/Register";
import Profile from "@/components/pages/auth/Profile";
import ForgotPassword from "@/components/pages/auth/ForgotPassword";
const UserRoutes = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/history" element={<History />} />
        <Route path="/terms" element={<TermsofUse />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Protected Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<div>Dashboard Page</div>} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default UserRoutes;
