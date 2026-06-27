import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll's Link
import { Link as RouterLink } from "react-router-dom";

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
    <nav className="sticky top-0 bg-gradient-to-br from-gray-300 to-gray-100 text-gray-800 shadow-md z-50 p-4 md:px-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Title: "falola." static, "FAVOUR" dynamic */}
        <h1 className="mt-2 text-2xl font flex items-center gap-1">
          <RouterLink to="/" className="flex items-center gap-1">
            Falola.
            <motion.span
              className={`transition-all duration-10 ${currentFont}`}
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 1.2, 1],
                transition: {
                  duration: 0.5,
                  repeat: Infinity,
                },
              }}
            >
              FAVOUR
            </motion.span>
          </RouterLink>
        </h1>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-3xl focus:outline-none ml-4 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            className="w-5 h-0.5 bg-black mb-1 rounded-full"
            initial={{ rotate: 0 }}
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 6 : 0,
            }}
            transition={{ duration: 0.3 }}
          ></motion.div>
          <motion.div
            className="w-5 h-0.5 bg-black mb-1 rounded-full"
            animate={{
              opacity: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
          ></motion.div>
          <motion.div
            className="w-5 h-0.5 bg-black rounded-full"
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -6 : 0,
            }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {[
            { name: "Resume", link: "/resume", type: "router" },
            { name: "Projects", link: "projects", type: "scroll" },
            { name: "Contact", link: "contact", type: "scroll" },
          ].map(({ name, link, type }) => (
            <li key={name} className="relative group">
              {type === "router" ? (
                <RouterLink
                  to={link}
                  className="hover:text-gray-400 text-lg relative"
                >
                  <span>{name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </RouterLink>
              ) : (
                <ScrollLink
                  to={link}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-gray-400 text-lg relative"
                >
                  <span>{name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
                </ScrollLink>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.ul
            className="absolute top-16 left-0 w-full bg-gray-100 shadow-md flex flex-col items-center py-20 md:hidden"
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: "0%" }}
            exit={{
              opacity: 0,
              y: "-100%",
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            transition={{
              opacity: { duration: 0.3 },
              y: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            {[
              { name: "Resume", link: "/resume", type: "router" },
              { name: "Projects", link: "projects", type: "scroll" },
              { name: "Contact", link: "contact", type: "scroll" },
            ].map(({ name, link, type }) => (
              <li key={name} className="py-4 gap-3 relative group">
                {type === "router" ? (
                  <RouterLink
                    to={link}
                    className="text-7xl font-light  tracking-wider relative"
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  </RouterLink>
                ) : (
                  <ScrollLink
                    to={link}
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-7xl font-light  tracking-wider relative"
                    onClick={() => setIsOpen(false)}
                  >
                    {name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-700 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  </ScrollLink>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
