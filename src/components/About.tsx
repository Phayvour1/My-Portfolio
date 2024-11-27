import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [, setBgBlack] = useState(false);
  const [expanded] = useState(false);  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setBgBlack(true);
      } else {
        setBgBlack(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hoverEffect = {
    scale: 1.3,
    transition: { type: "spring", stiffness: 200 },
  };

  const cursorStyle = {
    cursor: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="15" fill="red" /></svg>') 20 20, auto`,
  };

  return (
    <div
      className={`transition-colors duration-500 bg-gradient-to-br from-gray-300 to-gray-100 min-h-screen`}
    >
      <section className="py-10 px-4 max-w-full mx-auto">
        <p className="text-2xl md:text-2xl leading-relaxed">
          I build{" "}
          <motion.span
            whileHover={hoverEffect}
            style={cursorStyle}
            className="font-bold text-gray-800 text-2xl md:text-2xl"
          >
            pixel-perfect
          </motion.span>{" "}
          and{" "}
          <motion.span
            whileHover={hoverEffect}
            style={cursorStyle}
            className="font-bold text-gray-800 text-2xl md:text-2xl"
          >
            high-performance UIs
          </motion.span>{" "}
          that are not only visually stunning but also intuitive enough for
          anyone to use.
        </p>
        <p className="text-2xl md:text-2xl leading-relaxed mt-8">
          I’m not just a{" "}
          <motion.span
            whileHover={hoverEffect}
            style={cursorStyle}
            className="font-bold text-gray-800 text-2xl md:text-2xl"
          >
            frontend developer
          </motion.span>
          —I’m a problem-solver and creator who thrives on being part of the
          entire product development process. From{" "}
          <motion.span
            whileHover={hoverEffect}
            style={cursorStyle}
            className="font-bold text-gray-900 text-2xl md:text-2xl"
          >
            ideating solutions
          </motion.span>{" "}
          to engineering seamless functionality, I bring passion and precision
          to every project.
        </p>
       

        {/* Conditional text expansion for smaller screens */}
        <p className={`text-2xl md:text-2xl leading-relaxed mt-8 ${expanded ? '' : 'line-clamp-3'}`}>
          Let’s create something{" "}
          <motion.span
            whileHover={hoverEffect}
            style={cursorStyle}
            className="font-bold text-gray-900 text-3xl md:text-3xl"
          >
            extraordinary
          </motion.span>{" "}
        </p>

      </section>
    </div>
  );
};

export default About;
