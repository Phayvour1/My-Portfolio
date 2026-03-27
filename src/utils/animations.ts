import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Utility to check for reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Fade Up Animation (Primary Pattern)
 * Used for: Headings, Paragraphs, Cards, Buttons, Sections
 */
export const fadeUp = (
  element: Element | string,
  delay: number = 0
) => {
  if (prefersReducedMotion()) {
    gsap.set(element, { opacity: 1, y: 0 });
    return;
  }

  gsap.fromTo(
    element,
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        once: true,
      },
    }
  );
};

/**
 * Staggered Reveal Animation
 * Used for: Feature lists, Cards, Grid items, Benefits sections
 */
export const staggerReveal = (
  elements: Element[] | string | NodeListOf<Element>,
  triggerElement: Element | string | null = null
) => {
  if (prefersReducedMotion()) {
    gsap.set(elements, { opacity: 1, y: 0 });
    return;
  }

  gsap.fromTo(
    elements,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.08,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: triggerElement || elements,
        start: "top 85%",
        once: true,
      },
    }
  );
};

/**
 * Section Divider Line Animation
 * Used for: Separating sections, Visual rhythm
 */
export const lineExpand = (element: Element | string) => {
  if (prefersReducedMotion()) {
    gsap.set(element, { scaleX: 1 });
    return;
  }

  gsap.fromTo(
    element,
    { scaleX: 0 },
    {
      scaleX: 1,
      transformOrigin: "left",
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        once: true,
      },
    }
  );
};

/**
 * Image Reveal Animation
 * Used for: Hero images, Product screenshots, Illustrations
 */
export const imageReveal = (element: Element | string) => {
  if (prefersReducedMotion()) {
    gsap.set(element, { opacity: 1, y: 0 });
    return;
  }

  gsap.fromTo(
    element,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        once: true,
      },
    }
  );
};
