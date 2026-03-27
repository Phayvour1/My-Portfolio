import { useEffect, useRef } from "react";
import { staggerReveal, imageReveal } from "../utils/animations";

const About = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
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
    <div className="bg-white text-black min-h-screen p-6 md:p-12 lg:p-24 flex flex-col justify-center items-center">
      {/* Profile Picture */}
      <div className="flex justify-center items-center mb-16">
        <div
          ref={profileRef}
          className="flex justify-center items-center bg-gray-100 rounded-full w-48 h-48 md:w-64 md:h-64 overflow-hidden opacity-0"
        >
          <img
            src="/cropped favor.png"
            alt="Profile"
            className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>

      {/* Text Content */}
      <section ref={sectionRef} className="max-w-4xl text-center mx-auto space-y-8">
        <p
          ref={(el) => {
             if (el && !textRefs.current.includes(el)) textRefs.current.push(el);
          }}
          className="text-xl md:text-3xl font-medium leading-relaxed tracking-tight text-gray-600 opacity-0"
        >
          I build <span className="text-black font-semibold">pixel-perfect</span> and <span className="text-black font-semibold">high-performance web applications</span> that are not only visually stunning but also intuitive enough for anyone to use.
        </p>
        <p
          ref={(el) => {
             if (el && !textRefs.current.includes(el)) textRefs.current.push(el);
          }}
          className="text-xl md:text-3xl font-medium leading-relaxed tracking-tight text-gray-600 opacity-0"
        >
          I’m not just a <span className="text-black font-semibold">frontend developer</span>—I’m a problem-solver and creator who thrives on being part of the entire product development process. From <span className="text-black font-semibold">ideating solutions</span> to engineering seamless functionality, I bring passion and precision to every project.
        </p>
        <p
          ref={(el) => {
             if (el && !textRefs.current.includes(el)) textRefs.current.push(el);
          }}
          className="text-2xl md:text-4xl font-semibold leading-relaxed tracking-tight text-black mt-12 opacity-0"
        >
          Let’s create something extraordinary.
        </p>
      </section>
    </div>
  );
};

export default About;
