import { useEffect, useRef } from "react";
import { staggerReveal, imageReveal } from "../utils/animations";

const About = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    if (profileRef.current) {
      imageReveal(profileRef.current);
    }

    if (textRefs.current.length > 0) {
      staggerReveal(textRefs.current, sectionRef.current);
    }
  }, []);

  return (
    <section className="section-container min-h-screen">
      {/* Profile Picture */}
      <div className="flex justify-center items-center mb-16">
        <div
          ref={profileRef}
          className="flex justify-center items-center bg-gray-100 rounded-full w-48 h-48 md:w-64 md:h-64 overflow-hidden opacity-0"
        >
          <img
            src="/cropped favor.png"
            alt="Profile"
            className="object-cover w-full h-full grayscale transition-all duration-500"
          />
        </div>
      </div>

      {/* Text Content */}
      <div ref={sectionRef} className="max-w-paragraph text-center mx-auto space-y-8">
        <h2 className="text-[40px] font-semibold text-black mb-12">
          About
        </h2>
        <p
          ref={(el) => {
             if (el && !textRefs.current.includes(el)) textRefs.current.push(el);
          }}
          className="text-[18px] leading-relaxed text-neutral-500 opacity-0"
        >
          I design and build reliable digital products.
        </p>
      </div>
    </section>
  );
};

export default About;
