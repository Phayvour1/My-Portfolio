import { useEffect, useRef } from "react";
import { fadeUp, staggerReveal, lineExpand } from "../utils/animations";

const projects = [
  {
    title: "Herbetea E-commerce Website",
    tools: ["React", "Node.js", "Tailwind"],
    imageUrl: "/herbetea.png",
    projectUrl: "https://herbetea.netlify.app/",
  },
  {
    title: "Craneo Blog",
    tools: ["Next.js", "Sanity", "Tailwind", "Vercel"],
    imageUrl: "/CraneoBlog.png",
    projectUrl: "https://craneo-blog.vercel.app/",
  },
  {
    title: "Project Management Dashboard",
    tools: ["Next.js", "Socket.io", "Chart.js", "Tailwind"],
    imageUrl: "/CraneoPM.png",
    projectUrl: "https://dashboard.example.com",
  },
];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const projectCardsRef = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    if (headingRef.current) fadeUp(headingRef.current);
    if (lineRef.current) lineExpand(lineRef.current);
    if (projectCardsRef.current.length > 0) {
      staggerReveal(projectCardsRef.current, containerRef.current);
    }
  }, []);

  return (
    <div className="bg-white min-h-screen p-6 md:p-12 lg:p-24" ref={containerRef}>
      <div className="mb-16 max-w-7xl mx-auto">
        <h1 ref={headingRef} className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6 opacity-0">
          Selected Works
        </h1>
        <div ref={lineRef} className="w-full h-[1px] bg-gray-200 origin-left scale-x-0"></div>
      </div>

      {/* Projects container */}
      <div className="max-w-7xl mx-auto flex flex-col space-y-24">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            ref={(el) => {
               if (el && !projectCardsRef.current.includes(el)) projectCardsRef.current.push(el);
            }}
            className="group block w-full opacity-0 transform translate-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Image Section */}
              <div className="md:col-span-8 overflow-hidden bg-gray-50 aspect-video relative rounded-lg border border-gray-100">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content Section */}
              <div className="md:col-span-4 flex flex-col space-y-4">
                <h3 className="text-2xl font-semibold tracking-tight text-black group-hover:text-gray-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1 border border-gray-100 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center text-sm font-medium text-black">
                  View Project
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
