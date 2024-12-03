import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Dsvg from "./components/Dsvg";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import ParticlesBackground from "./components/ParticlesBackground";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const animateWobbleAndHover = {
  hidden: { rotate: 0, scale: 1 },
  show: {
    rotate: [0, -1, 2, -1, 2, 0],
    scale: 1,
    transition: {
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
  hover: {
    scale: 1.15,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const animateOnLoad = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function App() {
  return (
    <Router>
      <div className="relative bg-gradient-to-br from-gray-300 to-gray-100 text-gray-800">
        {/* Particles Background */}
        <ParticlesBackground />



        {/* Navbar */}
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
<div className="relative w-full flex flex-col items-center justify-center pt-10 min-h-[55vh] sm:pt-14 lg:pt-16">
  <h4
    className="absolute left-[15%] top-[18%] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light transform -translate-x-1/2"
  >
    <motion.span variants={animateOnLoad} initial="hidden" animate="show">
      Your
    </motion.span>
  </h4>
  <h1
    className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-signika flex justify-center relative overflow-hidden text-center"
    style={{
      fontSize: "clamp(2rem, 12vw, 16rem)", // Adjusted clamp for scaling
      lineHeight: "1.1",
      textShadow: "5px 4px 6px rgba(0, 0, 0, 0.3)", // Keep the text shadow for consistency
    }}
  >
    {["F", "R", "O", "N", "T", "-", "E", "N", "D"].map((letter, index) => (
      <motion.span
        key={index}
        className="inline-block"
        variants={animateWobbleAndHover}
        initial="hidden"
        animate="show"
        whileHover="hover"
      >
        {letter}
      </motion.span>
    ))}
  </h1>
  <h4
    className="absolute right-[15%] bottom-[5%] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light transform translate-x-1/2"
  >
    <motion.span variants={animateOnLoad} initial="hidden" animate="show">
      Guy
    </motion.span>
  </h4>
</div>

                <div>
                  <About />
                </div>
                <div>
                  <Dsvg />
                </div>
                <div id="projects">
                  <Projects />
                </div>
                <div id="contact">
                  <Contact />
                </div>
                <div>
                  <Footer />
                </div>
              </>
            }
          />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}