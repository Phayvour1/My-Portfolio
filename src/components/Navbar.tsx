import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const fonts = ["font-serif", "font-signika", "font-sans"];
  const [currentFont, setCurrentFont] = useState(fonts[0]);
  const [isOpen, setIsOpen] = useState(false);

  // Change font every 100ms (for fast blinking effect)
  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
      setCurrentFont(randomFont);
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav
      className="sticky top-0 bg-gradient-to-br from-gray-300 to-gray-100 text-gray-800 shadow-md z-50 p-4 md:px-10"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Title: "falola." static, "FAVOUR" dynamic */}
        <h1 className="mt-2 text-2xl font flex items-center gap-1">
          Falola.
          <motion.span
            className={`transition-all duration-10 ${currentFont}`}
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.2, 1],
              transition: {
                duration: 0.5,
                repeat: Infinity, // Repeat indefinitely for continuous blinking effect
              },
            }}
            onMouseEnter={() => {
              // Font changes continuously on hover as well
              const intervalId = setInterval(() => {
                const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
                setCurrentFont(randomFont);
              }, 100); // Keeps changing every 100ms while hovered

              // Clear interval after mouse leaves
              return () => clearInterval(intervalId);
            }}
          >
            FAVOUR
          </motion.span>
        </h1>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-3xl focus:outline-none ml-4 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* First Line */}
          <motion.div
            className="w-5 h-0.5 bg-black mb-1 rounded-full"
            initial={{ opacity: 1, rotate: 0 }}
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 6 : 0,
              opacity: isOpen ? 1 : 1, // Ensure it stays visible
            }}
            transition={{ duration: 0.3 }}
          ></motion.div>

          {/* Second Line */}
          <motion.div
            className="w-5 h-0.5 bg-black mb-1 rounded-full"
            initial={{ opacity: 1 }}
            animate={{
              opacity: isOpen ? 0 : 1, // Fade out when menu is open
            }}
            transition={{ duration: 0.3 }}
          ></motion.div>

          {/* Third Line */}
          <motion.div
            className="w-5 h-0.5 bg-black rounded-full"
            initial={{ opacity: 1, rotate: 0 }}
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -6 : 0,
              opacity: isOpen ? 1 : 1, // Ensure it stays visible
            }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {["Resume", "Projects", "Contact"].map((item) => (
            <li key={item} className="relative group">
              <Link
                to={item === "Resume" ? "/resume" : `/#${item.toLowerCase()}`}
                className="hover:text-gray-400 text-lg"
              >
                <span className="relative group-hover:text-black">{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.ul
            className="absolute top-16 left-0 w-full bg-gray-100 shadow-md flex flex-col items-center py-20 md:hidden"
            initial={{ opacity: 0, y: "-50%" }} // Starts from above
            animate={{ opacity: 1, y: "0%" }} // Ends in place
            exit={{
              opacity: 0,
              y: "-100%",
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            transition={{
              opacity: { duration: 0.3 },
              y: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            {["Resume", "Projects", "Contact"].map((item) => (
              <li key={item} className="py-4 relative group">
                <Link
                  to={item === "Resume" ? "/resume" : `/#${item.toLowerCase()}`}
                  className="text-8xl font-thin tracking-[15px] leading-tight"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative group-hover:text-black">{item}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full rounded-full"></span>
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
