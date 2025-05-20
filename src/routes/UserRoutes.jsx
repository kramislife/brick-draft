import React from "react";
import { Routes, Route } from "react-router-dom";
import RootLayout from "@/routes/RootLayout";
import ProtectedRoutes from "@/routes/ProtectedRoutes";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import History from "@/pages/History";
import TermsofUse from "@/components/layout/footer/TermsofUse";
import PrivacyPolicy from "@/components/layout/footer/PrivacyPolicy";
import Profile from "@/pages/auth/Profile";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import LotteryAll from "@/pages/LotteryAll";
import LotteryDetails from "@/pages/LotteryDetails";

const UserRoutes = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/history" element={<History />} />
        <Route path="/terms-of-use" element={<TermsofUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/lottery/all" element={<LotteryAll />} />
        <Route path="/lottery/:id" element={<LotteryDetails />} />
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
