import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Dsvg from './components/Dsvg'
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



// Define the combined animation variants for wobbling and hover effects
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

// Load animation for text entrance
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
    <div className="bg-gradient-to-br from-gray-300 to-gray-100 text-gray-800">

      <Navbar />
      {/* Wrapper to bring content closer to the navbar */}
      <div className="relative w-full flex flex-col items-center justify-center pt-10 min-h-[55vh] sm:pt-14 lg:pt-16">
        {/* "Your" Text */}
        <h4 className="absolute left-[20%] top-[27%] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light transform -translate-x-1/2">
          <motion.span 
            variants={animateOnLoad} 
            initial="hidden" 
            animate="show"
          >
            Your
          </motion.span>
        </h4>

        {/* Main FRONT-END Text */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold flex justify-center relative overflow-hidden text-center"
          style={{
            fontSize: 'clamp(5rem, 12vw, 16rem)', 
            lineHeight: '1.1',
          }}
        >
          {['F', 'R', 'O', 'N', 'T', '-', 'E', 'N', 'D'].map((letter, index) => (
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

        {/* "Guy" Text */}
        <h4 className="absolute right-[20%] bottom-[9%] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light transform translate-x-1/2">
          <motion.span 
            variants={animateOnLoad} 
            initial="hidden" 
            animate="show"
          >
            Guy
          </motion.span>
        </h4>
      </div>
      <div>
        <Dsvg/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Projects/>
      </div>
      <div>
        <Contact/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
