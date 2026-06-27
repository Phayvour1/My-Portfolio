import { useEffect, useRef, useState } from 'react';

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number>();
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isSelectable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.hasAttribute('data-cursor');
      
      setIsHovering(!!isSelectable);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    const animate = () => {
      const lerp = 0.15; // Animation lag
      
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * lerp;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * lerp;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible]);

  return (
    <div
      ref={cursorRef}
      className={`
        fixed top-0 left-0 w-3 h-3 bg-black dark:bg-white rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color,border] duration-300
        hidden md:block
        ${isHovering ? 'md:w-9 md:h-9 bg-transparent border border-black dark:border-white' : 'w-3 h-3 bg-black dark:bg-white'}
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
    />
  );
};

