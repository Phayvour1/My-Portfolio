import { useEffect, useRef } from "react";
import { fadeUp, staggerReveal, lineExpand } from "../utils/animations";

const projects = [
  {
    title: "Herbetea E-commerce Website",
    outcome: "Developed a modern, scalable e-commerce platform ensuring smooth cart flow and product management.",
    tools: ["React", "Node.js", "Tailwind"],
    imageUrl: "/herbetea.png",
    projectUrl: "https://herbetea.netlify.app/",
  },
  {
    title: "Craneo Blog",
    outcome: "Built a robust static blog system providing an optimized reading experience and easy content administration.",
    tools: ["Next.js", "Sanity", "Tailwind", "Vercel"],
    imageUrl: "/CraneoBlog.png",
    projectUrl: "https://craneo-blog.vercel.app/",
  },
  {
    title: "Project Management Dashboard",
    outcome: "Created a real-time data dashboard to track active projects, timelines, and metrics efficiently.",
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
    <section className="section-container" ref={containerRef}>
      <div className="w-full mb-16 space-y-12">
        <h2 ref={headingRef} className="text-[40px] font-semibold tracking-tight text-black text-center opacity-0">
          Selected Projects
        </h2>
        <div ref={lineRef} className="w-full h-[1px] bg-black/10 origin-left scale-x-0"></div>
      </div>

      {/* Projects container */}
      <div className="w-full flex flex-col space-y-12">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            ref={(el) => {
               if (el && !projectCardsRef.current.includes(el)) projectCardsRef.current.push(el);
            }}
            className="group block w-full p-12 md:p-16 rounded-2xl border border-black/10 bg-white opacity-0 transition-transform duration-200 ease-out hover:-translate-y-[6px]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Content Section */}
              <div className="flex flex-col space-y-6">
                <h3 className="text-[24px] font-semibold tracking-tight text-black">
                  {project.title}
                </h3>

                <p className="text-[18px] leading-relaxed text-neutral-500 max-w-paragraph">
                  {project.outcome}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-[14px] text-neutral-500 bg-gray-50 border border-black/10 px-3 py-1 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Section */}
              <div className="overflow-hidden bg-gray-50 aspect-video relative rounded-lg border border-black/10">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
