import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import { Resume } from "./pages/Resume";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { Loader } from "./components/Loader";
import { CustomCursor } from "./components/CustomCursor";

function AppRoutes() {
  useScrollToTop();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      document.title = document.hidden ? 'Come back — Favour' : 'Favour — Software Engineer';
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>
      <CustomCursor />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <RootLayout>
          <AppRoutes />
        </RootLayout>
      </motion.div>
    </Router>
  );
}
