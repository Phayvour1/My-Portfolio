import { motion } from 'framer-motion';

interface Project {
  title: string;
  tools: string[];
  imageUrl: string;
  projectUrl: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.a
      href={project.projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative block aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-sm hover:shadow-xl transition-shadow duration-500"
    >
      <div className="absolute inset-0 z-10 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-white backdrop-blur-sm">
        <h3 className="text-3xl font-display font-bold mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
          {project.title}
        </h3>
        <p className="text-sm font-light tracking-widest uppercase mb-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
           {project.tools.join(" • ")}
        </p>
        <span className="border border-white/50 px-6 py-2 rounded-full text-xs font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150 hover:bg-white hover:text-black">
          View Project
        </span>
      </div>
      
      <img
        src={project.imageUrl}
        alt={`${project.title} — built by Favour Falola`}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
    </motion.a>
  );
};
