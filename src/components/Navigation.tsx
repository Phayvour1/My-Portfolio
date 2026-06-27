import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { cn } from '../utils/cn';
import { Container } from './ui/Container';
import { copy } from '../data/copy';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  // Dark Mode State
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Track sections for active state
    const sections = ['hero', 'work', 'about', 'contact', 'quest', 'journey'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        aria-label="Primary navigation"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled 
            ? "bg-white/70 dark:bg-neutral-950/70 backdrop-blur-md py-4 border-b border-gray-100 dark:border-neutral-900 shadow-sm" 
            : "bg-transparent py-6"
        )}
      >
        <Container className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-display font-bold tracking-tighter hover:opacity-80 transition-opacity text-black dark:text-white">
              {copy.navbar.brand}
            </Link>
            <div className="relative group ml-1">
              <span className="availability-dot" />
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-white dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 text-[0.7rem] font-mono text-gray-400 dark:text-neutral-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-sm">
                Available for new projects
              </span>
            </div>
          </div>

          {/* Right Menu (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {copy.navbar.links.map((link) => {
              const hrefId = link.href.replace('#', '');
              const isActive = activeSection === hrefId || (link.href === '/resume' && location.pathname === '/resume');
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "nav-link text-xs font-medium uppercase tracking-widest transition-colors duration-300",
                    isActive 
                      ? "text-black dark:text-white active" 
                      : "text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white"
                  )}
                >
                  {link.name}
                </a>
              );
            })}

            {/* Dark Mode Switcher (Desktop) */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-300 relative focus:outline-none"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiSun className="w-[18px] h-[18px]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMoon className="w-[18px] h-[18px]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Right Side (Mobile Interface) */}
          <div className="flex md:hidden items-center space-x-4">
            {/* Dark Mode Switcher (Mobile) */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors duration-300 focus:outline-none"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FiSun className="w-[18px] h-[18px]" /> : <FiMoon className="w-[18px] h-[18px]" />}
            </button>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 z-50 relative group text-black dark:text-white"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                 <span className={cn("w-full h-0.5 bg-current transition-all", isOpen && "rotate-45 translate-y-2")} />
                 <span className={cn("w-full h-0.5 bg-current transition-all", isOpen && "opacity-0")} />
                 <span className={cn("w-full h-0.5 bg-current transition-all", isOpen && "-rotate-45 -translate-y-2.5")} />
              </div>
            </button>
          </div>
        </Container>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white dark:bg-neutral-950 flex flex-col justify-center items-center"
          >
            <div className="flex flex-col space-y-8 text-center bg-white dark:bg-neutral-950 w-full h-full justify-center">
              {copy.navbar.links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="text-4xl font-display font-bold text-black dark:text-white hover:text-gray-500 dark:hover:text-neutral-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
