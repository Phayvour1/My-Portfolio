import { useEffect, useRef } from "react";
import { fadeUp } from "../utils/animations";

const Resume = () => {
  const resumeViewUrl = "https://drive.google.com/file/d/13o_vKWFnRPAsCZdm5AaNmbPAZSvQQVmS/preview";
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (headingRef.current) fadeUp(headingRef.current);
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-start pt-24 pb-12 px-4 md:px-10">
      <div className="w-full max-w-7xl mb-8 flex items-center justify-between">
         <h1
           ref={headingRef}
           className="text-3xl md:text-4xl font-bold tracking-tight text-black opacity-0"
         >
           Resume
         </h1>
         <a
           href={resumeViewUrl}
           target="_blank"
           rel="noopener noreferrer"
           className="text-sm font-medium bg-black text-white px-6 py-3 rounded hover:scale-[1.03] transition-transform duration-200 ease-out"
         >
           Open in Drive
         </a>
      </div>

      {/* PDF Viewer */}
      <div className="w-full max-w-7xl h-[80vh] border border-gray-100 rounded-lg overflow-hidden shadow-sm bg-gray-50">
        <iframe
          src={resumeViewUrl}
          className="w-full h-full border-0"
          title="Resume"
        ></iframe>
      </div>
    </div>
  );
};

export default Resume;
