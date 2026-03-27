import { useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { fadeUp, staggerReveal, lineExpand } from "../utils/animations";

const ContactPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement[]>([]);

  const icons = [
    { icon: <FaLinkedin />, link: "https://linkedin.com/in/falola_favour" },
    { icon: <FaGithub />, link: "https://github.com/phayvour1" },
    { icon: <FaTwitter />, link: "https://twitter.com/falola_favour" },
    { icon: <FaEnvelope />, link: "mailto:pharlorlah700@gmail.com" },
  ];

  useEffect(() => {
    if (headingRef.current) fadeUp(headingRef.current);
    if (lineRef.current) lineExpand(lineRef.current);
    if (iconsRef.current.length > 0) {
      staggerReveal(iconsRef.current, containerRef.current);
    }
  }, []);

  return (
    <section className="section-container min-h-screen justify-center" ref={containerRef}>

      <div className="max-w-paragraph w-full text-center mb-16">
         {/* Heading Text Animation */}
        <h2
          ref={headingRef}
          className="text-[40px] font-semibold tracking-tight text-black mb-12 opacity-0"
        >
          Let's Work Together
        </h2>
        <div ref={lineRef} className="w-16 h-[1px] bg-black mx-auto origin-center scale-x-0"></div>
      </div>
      
      {/* Icons Animation */}
      <div className="flex flex-wrap justify-center gap-10 md:gap-16">
        {icons.map((item, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el && !iconsRef.current.includes(el)) iconsRef.current.push(el);
            }}
            className="text-[32px] cursor-pointer text-neutral-500 hover:text-black hover:scale-[1.03] transition-all duration-200 ease-out opacity-0 translate-y-4"
            onClick={() => window.open(item.link, "_blank")}
          >
            {item.icon}
          </div>
        ))}
      </div>

      <div className="mt-32 text-center text-[14px] font-medium text-neutral-500">
        © {new Date().getFullYear()} Falola Favour
      </div>
    </section>
  );
};

export default ContactPage;
