import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import {
  fadeUpVariants,
  staggerContainerVariants,
  clipWipeVariants,
  scaleInVariants,
} from "../../utils/animationVariants";
import { copy } from "../../data/copy";
import { useTypewriter } from "../../hooks/useTypewriter";
import { useInView } from "framer-motion";
import { useRef } from "react";

const VIEWPORT = { once: true, margin: "-80px" };

interface StatCardProps {
  label: string;
  subtext: string;
  delay: number;
}

const StatCard = ({ label, subtext, delay }: StatCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { displayText } = useTypewriter(isInView ? label : "", 50, delay);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-2 p-6 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 transition-colors duration-500"
    >
      <span className="text-xl font-display font-bold tracking-tight h-8 text-neutral-900 dark:text-white transition-colors">
        {displayText}
      </span>
      <span className="text-[10px] uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-medium whitespace-nowrap">
        {subtext}
      </span>
    </div>
  );
};

export const About = () => {
  return (
    <section
      id="about"
      aria-label="About Favour Falola"
      className="about-section min-h-screen flex flex-col justify-center py-24 bg-white dark:bg-neutral-950 transition-colors duration-500"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {/* Left — copy */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            <motion.h2
              variants={clipWipeVariants}
              className="text-3xl md:text-4xl font-display font-bold mb-8 text-neutral-900 dark:text-white transition-colors"
            >
              {copy.about.heading}
            </motion.h2>

            <div className="space-y-5 text-base md:text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed max-w-lg transition-colors">
              {copy.about.body.map((para, i) => (
                <motion.p key={i} variants={fadeUpVariants}>
                  {para}
                </motion.p>
              ))}
            </div>

            <motion.p
              variants={fadeUpVariants}
              className="mt-12 text-[10px] uppercase tracking-[0.2em] text-neutral-300 dark:text-neutral-700 font-mono whitespace-pre-line transition-colors"
            >
              {copy.about.performanceSignal}
            </motion.p>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 self-start"
          >
            {copy.about.stats.map((stat, i) => (
              <motion.div key={stat.label} variants={scaleInVariants}>
                <StatCard
                  label={stat.label}
                  subtext={stat.subtext}
                  delay={200 * i}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
