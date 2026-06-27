import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    projects.forEach((_, index) => {
      gsap.fromTo(
        `.project-card-${index}`,
        {
          opacity: 0,
          x: index % 2 === 0 ? -100 : 100, // Alternating direction
        },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: `.project-card-${index}`,
            start: "top 80%", // Trigger animation when the top of the card is 80% into the viewport
            end: "bottom 20%", // Keep the animation active until the bottom of the card is 20% into the viewport
            scrub: true, // Scrubs animation with the scroll
            once: true, // Trigger only once
          },
          duration: 0.8,
          ease: "power3.out",
        }
      );
    });
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen overflow-hidden p-4">
      <div>
        <h1 className="relative-content text-3xl text-gray-800 pt-10 font-signika">
          Check out some of my works
        </h1>
      </div>
      {/* Projects container */}
      <div className="relative w-full h-full">
        <div className="w-full h-full flex flex-col items-center justify-center space-y-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full h-auto group project-card-${index} shadow-2xl hover:shadow-3xl transition-shadow duration-300 rounded-xl`}
            >
              {/* Project Card */}
              <div className="relative w-full h-auto p-4">
                {/* Image */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-auto object-cover opacity-75 transition-opacity duration-300 ease-in-out group-hover:opacity-100 rounded-xl"
                />
                {/* Content Layer */}
                <div
                  className="text-content absolute inset-x-0 bottom-0 bg-gray-300 text-white p-8 flex flex-col items-center space-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full transition-all duration-500 rounded-xl"
                >
                  <h3 className="text-xl text-gray-600 font-signika">{project.title}</h3>
                  <div className="flex justify-center space-x-4">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-sm font-light text-gray-300 bg-gray-700 px-4 py-2 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
