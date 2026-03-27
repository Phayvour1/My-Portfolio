import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { fadeUp } from "./utils/animations";

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRef.current) fadeUp(titleRef.current, 0);
    if (subtitleRef.current) fadeUp(subtitleRef.current, 0.2);
    if (descriptionRef.current) fadeUp(descriptionRef.current, 0.4);
  }, []);

  return (
    <Router>
      <div className="relative bg-white text-black font-sans selection:bg-black selection:text-white min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <section
                  ref={heroRef}
                  className="section-container min-h-[70vh] justify-center text-center space-y-8"
                >
                  <h1
                    ref={titleRef}
                    className="text-[48px] md:text-[72px] font-semibold tracking-tight leading-tight opacity-0"
                  >
                    Frontend Engineer
                  </h1>

                  <p
                    ref={subtitleRef}
                    className="text-[18px] md:text-[24px] text-neutral-500 max-w-paragraph mx-auto leading-relaxed opacity-0"
                  >
                    I build fast, reliable interfaces and scalable digital products.
                  </p>

                  <p
                    ref={descriptionRef}
                    className="text-[14px] md:text-[16px] text-neutral-500 max-w-paragraph mx-auto leading-relaxed opacity-0"
                  >
                    Focused on performance, clarity, and maintainable architecture.
                  </p>
                </section>

                <div>
                  <About />
                </div>
                <div id="projects">
                  <Projects />
                </div>
                <div id="contact">
                  <Contact />
                </div>
                <div>
                  <Footer />
                </div>
              </>
            }
          />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}
