import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

const STACK = ["React", "TypeScript", "Next.js", "Node.js", "Vite", "Framer Motion"];

const container = {
  initial: {},
  animate: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
};

const item = {
  initial: { opacity: 0, y: 28 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const itemReduced = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
};

export const Hero = () => {
  const prefersReduced = useReducedMotion();
  const v = prefersReduced ? itemReduced : item;

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-screen flex flex-col justify-center bg-neutral-950 overflow-hidden px-6 md:px-16 lg:px-24 pt-32 pb-24"
    >
      {/* Subtle ambient glow */}
      <div className="hero-ambient" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

        {/* ── LEFT: Copy ───────────────────────────────────────────────── */}
        <motion.div
          variants={container}
          initial="initial"
          animate="animate"
          className="w-full"
        >
          {/* Availability eyebrow */}
          <motion.div variants={v} className="flex items-center gap-3 mb-8 md:mb-12">
            <span className="availability-dot" />
            <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.35em] text-neutral-500">
              Favour Falola &nbsp;·&nbsp; Lagos, Nigeria &nbsp;·&nbsp; Open to work
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={v}
            className="font-display font-bold text-white leading-[0.9] tracking-[-0.03em] mb-8"
            style={{ fontSize: "clamp(3rem, 7vw, 7.5rem)" }}
          >
            I build the
            <br />
            frontend that
            <br />
            <span className="text-neutral-500">ships.</span>
          </motion.h1>

          {/* Thin rule */}
          <motion.div variants={v}>
            <div className="w-12 h-px bg-neutral-700 mb-8" />
          </motion.div>

          {/* Positioning copy */}
          <motion.p
            variants={v}
            className="text-neutral-300 font-light leading-relaxed max-w-lg mb-3"
            style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)" }}
          >
            Software Engineer specialising in React and TypeScript. Five years
            of architecting interfaces that are fast, accessible, and built to last —
            not just to demo.
          </motion.p>

          <motion.p
            variants={v}
            className="text-neutral-500 text-sm font-light max-w-md mb-10 leading-relaxed"
          >
            Frontend is where I live. Full-stack when the job demands it. I own the
            full context — component to deployment — and I don't hand things off at
            the edge of my comfort zone.
          </motion.p>

          {/* Stack */}
          <motion.div variants={v} className="flex flex-wrap gap-2 mb-10">
            {STACK.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[9px] px-3 py-1.5 border border-neutral-800 text-neutral-600 uppercase tracking-widest"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={v} className="flex flex-col sm:flex-row items-start gap-5">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="border border-white/20 text-white text-[10px] uppercase tracking-[0.3em] font-sans px-8 py-4 hover:bg-white hover:text-neutral-950 transition-colors duration-200 w-full sm:w-auto text-center"
            >
              See my work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[10px] font-sans uppercase tracking-[0.25em] text-neutral-500 hover:text-white transition-colors py-4 w-full sm:w-auto text-center sm:text-left"
            >
              Get in touch →
            </a>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Portrait (Responsive across all screens) ────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center lg:justify-end w-full mt-6 lg:mt-0"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[360px] xl:max-w-[400px]">
            {/* Glow behind portrait */}
            <div
              className="absolute inset-0 rounded-sm blur-3xl opacity-20"
              style={{ background: "radial-gradient(ellipse at center, rgba(99,102,241,0.4), transparent 70%)" }}
              aria-hidden="true"
            />

            {/* Photo frame */}
            <div className="relative w-full aspect-[3/4] overflow-hidden border border-neutral-900 bg-neutral-900/50">
              <img
                src="/favour.jpg"
                alt="Favour Falola — Software Engineer"
                className="w-full h-full object-cover object-top grayscale"
                loading="eager"
              />
              {/* Subtle bottom fade */}
              <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{ background: "linear-gradient(to top, #0a0a0a 0%, transparent 100%)" }}
                aria-hidden="true"
              />
            </div>

            {/* Floating stat badge (Experience) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-4 lg:-left-14 bottom-16 bg-neutral-900/90 backdrop-blur-sm border border-neutral-800 px-4 py-3"
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-500 mb-0.5">Experience</p>
              <p className="font-display font-bold text-white text-base md:text-lg leading-none">3+ Years</p>
            </motion.div>

            {/* Second stat badge (Specialty) */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-4 lg:-right-10 top-16 bg-neutral-900/90 backdrop-blur-sm border border-neutral-800 px-4 py-3"
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-500 mb-0.5">Specialty</p>
              <p className="font-display font-bold text-white text-xs md:text-sm leading-none">Frontend</p>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 1.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "top" }}
        className="absolute bottom-0 left-6 md:left-16 lg:left-24 w-px h-20 bg-gradient-to-b from-neutral-700 to-transparent hidden sm:block"
        aria-hidden="true"
      />
    </section>
  );
};
