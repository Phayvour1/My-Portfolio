import { useState, useRef, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const menuBtnTopRef = useRef<HTMLDivElement>(null);
  const menuBtnMiddleRef = useRef<HTMLDivElement>(null);
  const menuBtnBottomRef = useRef<HTMLDivElement>(null);

  // Toggle mobile menu animation
  useEffect(() => {
    if (isOpen) {
      if (menuRef.current) {
        gsap.to(menuRef.current, {
          y: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          display: "flex",
        });
      }
      gsap.to(menuBtnTopRef.current, { y: 6, rotate: 45, duration: 0.3 });
      gsap.to(menuBtnMiddleRef.current, { opacity: 0, duration: 0.3 });
      gsap.to(menuBtnBottomRef.current, { y: -6, rotate: -45, duration: 0.3 });
    } else {
      if (menuRef.current) {
        gsap.to(menuRef.current, {
          y: "-20%",
          opacity: 0,
          duration: 0.4,
          ease: "power2.in",
          onComplete: () => {
             if(menuRef.current) menuRef.current.style.display = "none";
          }
        });
      }
      gsap.to(menuBtnTopRef.current, { y: 0, rotate: 0, duration: 0.3 });
      gsap.to(menuBtnMiddleRef.current, { opacity: 1, duration: 0.3 });
      gsap.to(menuBtnBottomRef.current, { y: 0, rotate: 0, duration: 0.3 });
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Resume", link: "/resume", type: "router" },
    { name: "Projects", link: "projects", type: "scroll" },
    { name: "Contact", link: "contact", type: "scroll" },
  ];

  return (
    <nav className="sticky top-0 bg-white/90 backdrop-blur-md text-black border-b border-gray-100 z-50 p-4 md:px-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Title */}
        <h1 className="text-xl font-bold tracking-tight">
          <RouterLink to="/" className="flex items-center gap-1">
            Falola.
            <span className="font-medium text-gray-500">FAVOUR</span>
          </RouterLink>
        </h1>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-3xl focus:outline-none ml-4 relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div ref={menuBtnTopRef} className="w-6 h-[2px] bg-black mb-1.5 rounded-full"></div>
          <div ref={menuBtnMiddleRef} className="w-6 h-[2px] bg-black mb-1.5 rounded-full"></div>
          <div ref={menuBtnBottomRef} className="w-6 h-[2px] bg-black rounded-full"></div>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map(({ name, link, type }) => (
            <li key={name} className="relative group">
              {type === "router" ? (
                <RouterLink
                  to={link}
                  className="text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200"
                >
                  {name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
                </RouterLink>
              ) : (
                <ScrollLink
                  to={link}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-sm font-medium text-gray-600 hover:text-black transition-colors duration-200"
                >
                  {name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-black transition-all duration-300 ease-out group-hover:w-full"></span>
                </ScrollLink>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <ul
          ref={menuRef}
          className="absolute top-0 left-0 w-full h-screen bg-white flex-col items-center justify-center gap-10 md:hidden z-40"
          style={{ display: "none", opacity: 0, transform: "translateY(-20%)" }}
        >
          {navLinks.map(({ name, link, type }) => (
            <li key={name} className="relative group">
              {type === "router" ? (
                <RouterLink
                  to={link}
                  className="text-4xl font-semibold tracking-tight text-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </RouterLink>
              ) : (
                <ScrollLink
                  to={link}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-4xl font-semibold tracking-tight text-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </ScrollLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
