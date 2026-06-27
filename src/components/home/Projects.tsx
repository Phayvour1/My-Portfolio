import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import {
  fadeUpVariants,
  staggerContainerVariants,
  clipWipeVariants,
} from "../../utils/animationVariants";
import { copy } from "../../data/copy";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  tools: string[];
  description: string;
  projectUrl: string;
  live: boolean;
}

const projects: Project[] = [
  {
    id: "01",
    title: "GrixTicket",
    subtitle: "SaaS · Event Ticketing Platform",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    description:
      "Full-stack ticketing platform for creating events, selling tickets, and managing attendees. Handled 20+ live events with zero payment failures or downtime. Architected a modular frontend system built for high-traffic concurrency and future scale.",
    projectUrl: "https://www.grixtickets.com/",
    live: true,
  },
  {
    id: "02",
    title: "Digital School Management System",
    subtitle: "EdTech · Student & Admin Portals",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
    description:
      "End-to-end school management ecosystem with separate student and administrator portals. Covers payments, quizzes, exams, inventory, results, and role-based access control. Dashboards optimised for large datasets and long-term maintainability.",
    projectUrl: "https://veeky-portal-student-app.vercel.app/login",
    live: true,
  },
  {
    id: "03",
    title: "BitRemit",
    subtitle: "DeFi · Crypto Remittance Platform",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Web3"],
    description:
      "A high-performance crypto remittance platform designed for fast, secure, cross-border payments. Integrates Web3 wallets and smart routing to achieve low-latency and zero-friction financial transactions.",
    projectUrl: "https://bitremit.vercel.app/",
    live: true,
  },
  {
    id: "04",
    title: "Craneo Blog",
    subtitle: "Editorial · CMS Platform",
    tools: ["Next.js", "Sanity", "Tailwind"],
    description:
      "Content-dense developer blog built with Next.js and Sanity CMS. Optimised for SEO and reader engagement with progress indicators, dynamic OG images, and interactive code blocks.",
    projectUrl: "https://craneo-blog.vercel.app/",
    live: true,
  },
];

const VIEWPORT = { once: true, margin: "-60px" };

export const Projects = () => {
  return (
    <section
      id="work"
      aria-label="Selected Work"
      className="min-h-screen bg-white dark:bg-neutral-950 py-24 md:py-28 transition-colors duration-500"
    >
      <Container>
        {/* Heading */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="mb-14"
        >
          <motion.p
            variants={fadeUpVariants}
            className="text-neutral-400 dark:text-neutral-500 text-[10px] uppercase tracking-[0.4em] font-sans mb-4"
          >
            Selected work
          </motion.p>
          <motion.h2
            variants={clipWipeVariants}
            className="text-3xl md:text-5xl font-display font-bold text-neutral-900 dark:text-white tracking-tight"
          >
            {copy.projects.heading}
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-neutral-500 dark:text-neutral-400 mt-3 max-w-sm font-light text-sm md:text-base"
          >
            {copy.projects.subheading}
          </motion.p>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-neutral-100 dark:bg-neutral-800 transition-colors duration-500" />

        {/* Project rows */}
        <motion.ul
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="divide-y divide-neutral-100 dark:divide-neutral-800 transition-colors duration-500"
        >
          {projects.map((project) => (
            <motion.li
              key={project.id}
              variants={fadeUpVariants}
              className="group relative overflow-hidden"
            >
              {/* Hover: clean light-gray/dark-gray fill wipes left → right */}
              <motion.div
                className="absolute inset-0 pointer-events-none bg-neutral-50 dark:bg-neutral-900/50"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileHover={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                aria-hidden="true"
              />

              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-10 md:py-14 flex flex-col md:flex-row md:items-center justify-between gap-6 px-4 md:px-8 text-left relative z-10"
              >
                <div className="flex items-center gap-6">
                  {/* Number */}
                  <span className="text-[10px] font-mono text-neutral-300 dark:text-neutral-700 group-hover:text-neutral-400 dark:group-hover:text-neutral-500 transition-colors duration-300 uppercase tracking-widest min-w-[32px]">
                    {project.id}
                  </span>

                  {/* Title + Subtitle */}
                  <div>
                    <h3 className="text-2xl md:text-4xl font-display font-bold text-neutral-900 dark:text-white transition-colors duration-300 leading-none tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors duration-300 mt-2 font-sans">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed max-w-md md:px-4">
                  {project.description}
                </p>

                {/* Tags + live badge + arrow */}
                <div className="flex items-center justify-between md:justify-end gap-6 mt-4 md:mt-0">
                  <div className="flex items-center gap-3">
                    {project.live && (
                      <span className="flex items-center gap-1.5 text-[9px] font-mono uppercase tracking-widest text-emerald-500 dark:text-emerald-400 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live
                      </span>
                    )}
                    {project.tools.slice(0, 2).map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] px-3 py-1 border border-neutral-200 dark:border-neutral-800 rounded-full text-neutral-400 dark:text-neutral-500 uppercase tracking-widest transition-colors duration-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <motion.span
                    className="text-2xl text-neutral-300 dark:text-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-2"
                  >
                    →
                  </motion.span>
                </div>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
};
