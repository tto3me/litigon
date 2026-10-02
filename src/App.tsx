import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import litigonLogo from "@/assets/litigon/litigon-logo-optimized.png";

const Home = lazy(() => import("./pages/home"));
const Company = lazy(() => import("./pages/company"));
const Features = lazy(() => import("./pages/features"));
const ProjectsPage = lazy(() => import("./pages/projects"));
const Partners = lazy(() => import("./pages/partners"));
const Contact = lazy(() => import("./pages/contact"));
const Pricing = lazy(() => import("./pages/pricing"));
const StarterPlan = lazy(() => import("./pages/pricing/starter"));
const ProPlan = lazy(() => import("./pages/pricing/pro"));
const EnterprisePlan = lazy(() => import("./pages/pricing/enterprise"));
const CookiePolicyPage = lazy(() => import("./pages/legal/cookie-policy"));
const PrivacyPolicyPage = lazy(() => import("./pages/legal/privacy-&-policy"));
const TermsAndConditionPage = lazy(() => import("./pages/legal/terms-&-condition"));
const ComingSoonPage = lazy(() => import("./pages/utility/coming-soon"));
const DownloadPage = lazy(() => import("./pages/utility/download"));
const NotFound = lazy(() => import("./pages/not-found"));

const queryClient = new QueryClient();

const pageVariants = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

const overlayVariants = {
  initial: { scaleY: 0 },
  animate: {
    scaleY: [0, 1, 1, 0],
    transition: {
      duration: 1.2,
      times: [0, 0.3, 0.7, 1],
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: { scaleY: 0 },
};

const logoVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: {
    opacity: [0, 1, 1, 0],
    scale: [0.8, 1, 1, 0.95],
    transition: {
      duration: 1.2,
      times: [0, 0.25, 0.7, 1],
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: { opacity: 0, scale: 0.8 },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div className="relative" style={{ backgroundColor: "#000" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Suspense fallback={
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black" aria-busy="true">
              <img
                src={litigonLogo}
                alt=""
                className="h-14 w-auto object-contain animate-[logo-pulse_2s_ease-in-out_infinite]"
              />
            </div>
          }>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/company" element={<Company />} />
              <Route path="/features" element={<Features />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/pricing/starter" element={<StarterPlan />} />
              <Route path="/pricing/pro" element={<ProPlan />} />
              <Route path="/pricing/enterprise" element={<EnterprisePlan />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms-&-condition" element={<TermsAndConditionPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="/download" element={<DownloadPage />} />
              <Route path="/coming-soon" element={<ComingSoonPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          key={`overlay-${location.pathname}`}
          variants={overlayVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="pointer-events-none fixed inset-0 z-[9999]"
          style={{ backgroundColor: "#000", transformOrigin: "bottom" }}
        />
        <motion.div
          key={`logo-wrap-${location.pathname}`}
          variants={logoVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="pointer-events-none fixed inset-0 z-[10001] flex items-center justify-center"
        >
          <img
            src={litigonLogo}
            alt=""
            className="h-14 w-auto object-contain"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
