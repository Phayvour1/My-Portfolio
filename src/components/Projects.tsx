import { motion } from 'framer-motion';

const projects = [
  {
    title: "Herbetea E-commerce Website",
    tools: ["React", "Node.js", "Tailwind", "Stripe"],
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
    title: "Craneo Project Management Dashboard",
    tools: ["Next.js", "Socket.io", "Chart.js", "Tailwind"],
    imageUrl: "/CraneoPM.png",
    projectUrl: "https://dashboard.example.com", 
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-100 min-h-screen overflow-hidden">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 p-6 font-signika mt-10">Check out some of my works</h1>
      </div>
      {/* Projects container */}
      <div className="relative w-full h-full">
        <div className="w-full h-full flex flex-col items-center justify-center space-y-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-auto group"
            >
              {/* Project Card */}
              <div className="relative w-full h-auto">
                {/* Image */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-auto object-cover opacity-75 transition-opacity duration-300 ease-in-out group-hover:opacity-100" // Image brightens on hover
                />
                
                {/* Content Layer */}
                <motion.div
                  className="text-content absolute inset-x-0 bottom-0 bg-gray-300 text-white p-6 flex flex-col items-center space-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-full transition-all duration-500"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0", opacity: 1 }} 
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl text-gray-600 font-signika">{project.title}</h3>
                  <div className="flex justify-center space-x-4">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-sm font-semibold text-gray-300 bg-gray-700 px-4 py-2 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
