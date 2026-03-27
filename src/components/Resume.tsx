import { useEffect, useRef } from "react";
import { fadeUp } from "../utils/animations";

const Resume = () => {
  const resumeViewUrl = "https://drive.google.com/file/d/13o_vKWFnRPAsCZdm5AaNmbPAZSvQQVmS/preview";
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (headingRef.current) fadeUp(headingRef.current);
  }, []);

  return (
    <section className="section-container min-h-screen justify-start">
      <div className="w-full mb-12 flex flex-col sm:flex-row items-center sm:justify-between gap-6">
         <h1
           ref={headingRef}
           className="text-[40px] font-semibold tracking-tight text-black opacity-0"
         >
           Resume
         </h1>
         <a
           href={resumeViewUrl}
           target="_blank"
           rel="noopener noreferrer"
           className="text-[14px] font-medium bg-black text-white px-6 py-3 rounded hover:scale-[1.03] transition-transform duration-200 ease-out"
         >
           Open in Drive
         </a>
      </div>

      {/* PDF Viewer */}
      <div className="w-full h-[80vh] border border-black/10 rounded-2xl overflow-hidden bg-white">
        <iframe
          src={resumeViewUrl}
          className="w-full h-full border-0"
          title="Resume"
        ></iframe>
      </div>
    </section>
  );
};

export default Resume;
