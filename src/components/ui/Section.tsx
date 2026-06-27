import { ReactNode } from 'react';
import { cn } from '../../utils/cn';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  bgColor?: string; // Optional: custom background color
  "aria-label"?: string;
}

export const Section = ({ children, className, id, bgColor, "aria-label": ariaLabel }: SectionProps) => {
  return (
    <section 
      id={id} 
      className={cn("min-h-screen relative flex flex-col justify-center py-20", className)}
      style={bgColor ? { backgroundColor: bgColor } : undefined}
      aria-label={ariaLabel}
    >
      {children}
    </section>
  );
};
