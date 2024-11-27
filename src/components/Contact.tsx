import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactPage = () => {
  const icons = [
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/falola_favour", color: "#0077B5" },
    { icon: <FaGithub />, link: "https://github.com/phayvour1", color: "#171515" },
    { icon: <FaTwitter />, link: "https://twitter.com/falola_favour", color: "#1DA1F2" },
    { icon: <FaEnvelope />, link: "mailto:pharlorlah700@gmail.com", color: "#D44638" },
    { icon: <FaPhoneAlt />, link: "wa.me/+2348094296748", color: "#34B7F1" },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-gray-500 text-gray-800 font-signika p-6">
      <h1 className="text-4xl md:text-5xl lg:text-5xl mb-10 text-center">
        Want to work with me?
        <br />
        Let's Connect
      </h1>
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {icons.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.4, color: item.color }}
            whileTap={{ scale: 0.9 }}
            className="text-5xl md:text-6xl cursor-pointer"
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
