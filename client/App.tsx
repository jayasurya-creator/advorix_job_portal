import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Auth Pages
import CandidateSignup from "./pages/auth/CandidateSignup";
import PartnerSignup from "./pages/auth/PartnerSignup";
import AdminLogin from "./pages/auth/AdminLogin";
import Login from "./pages/auth/Login";

// Dashboard Pages
import CandidateDashboard from "./pages/dashboard/CandidateDashboard";
import PartnerDashboard from "./pages/dashboard/PartnerDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Auth Routes */}
          <Route path="/auth/candidate-signup" element={<CandidateSignup />} />
          <Route path="/auth/partner-signup" element={<PartnerSignup />} />
          <Route path="/auth/admin-login" element={<AdminLogin />} />
          <Route path="/auth/login" element={<Login />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard/candidate" element={<CandidateDashboard />} />
          <Route path="/dashboard/partner" element={<PartnerDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
