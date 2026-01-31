import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Skills from "./components/Skills";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/Footer";


import ApiProjects from "./pages/ApiProjects";
import FrontendProjects from "./pages/FrontendProjects";
import UiProjects from "./pages/UiProjects";
import BackendProjects from "./pages/BackendProjects";
import FullstackProjects from "./pages/FullstackProjects";


// 🔹 Smooth animation wrapper
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 0.8,
      }}
    >
      {children}
    </motion.div>
  );
}


// 🔹 Animated routes controller
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>

        {/* HOME */}
        <Route
          path="/"
          element={
            <PageWrapper>
              <Hero />
              <About />
              <Services />
              <Skills />
              <Portfolio />
              <Contact />
              <Footer />
            </PageWrapper>
          }
        />

        {/* PORTFOLIO CLUSTERS */}
        <Route path="/portfolio/api" element={<PageWrapper><ApiProjects /></PageWrapper>} />
        <Route path="/portfolio/frontend" element={<PageWrapper><FrontendProjects /></PageWrapper>} />
        <Route path="/portfolio/ui" element={<PageWrapper><UiProjects /></PageWrapper>} />
        <Route path="/portfolio/backend" element={<PageWrapper><BackendProjects /></PageWrapper>} />
        <Route path="/portfolio/fullstack" element={<PageWrapper><FullstackProjects /></PageWrapper>} />

      </Routes>
    </AnimatePresence>
  );
}


export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add("dark") : root.classList.remove("dark");
  }, [dark]);

  return (
    <BrowserRouter>
      <div className="bg-white dark:bg-[#0b0b0b] text-black dark:text-white transition-colors duration-500">

        <Navbar dark={dark} toggleTheme={() => setDark(!dark)} />

        {/* Animated routing*/}
        <AnimatedRoutes />

      </div>
    </BrowserRouter>
  );
}
