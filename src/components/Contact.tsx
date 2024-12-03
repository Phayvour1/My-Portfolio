import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  const icons = [
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/falola_favour", color: "#0077B5" },
    { icon: <FaGithub />, link: "https://github.com/phayvour1", color: "#171515" },
    { icon: <FaTwitter />, link: "https://twitter.com/falola_favour", color: "#1DA1F2" },
    { icon: <FaEnvelope />, link: "mailto:pharlorlah700@gmail.com", color: "#D44638" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-gray-500 text-gray-800 font-signika p-0">
      {/* Heading Text Animation */}
      <motion.h1
        className="relative-content text-4xl md:text-5xl lg:text-5xl mb-10 text-center p-0"
        initial={{ opacity: 0, y: 50 }}  // Initially offscreen and hidden
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        transition={{ duration: 1 }}
        viewport={{ once: true }}  // Trigger animation only once
      >
        Want to work with me?
        <br />
        Let's Connect
      </motion.h1>
      
      {/* Icons Animation */}
      <div className="relative-content flex flex-wrap justify-center gap-8 md:gap-12">
        {icons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}  // Initially offscreen
            whileInView={{ opacity: 1, y: 0 }}  // Animate when in view
            transition={{ duration: 0.8, delay: index * 0.2 }}  // Stagger delay for each icon
            whileHover={{ scale: 1.4, color: item.color }}
            whileTap={{ scale: 0.9 }}
            className="text-3xl md:text-4xl cursor-pointer"  // Adjusted icon size here
            style={{ transition: "all 0.3s ease" }}
            onClick={() => window.open(item.link, "_blank")}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
