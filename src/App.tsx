import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Dsvg from "./components/Dsvg";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { fadeUp } from "./utils/animations";

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heading1Ref = useRef<HTMLHeadingElement>(null);
  const heading2Ref = useRef<HTMLHeadingElement>(null);
  const heading3Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (heading1Ref.current) fadeUp(heading1Ref.current, 0);
    if (heading2Ref.current) fadeUp(heading2Ref.current, 0.2);
    if (heading3Ref.current) fadeUp(heading3Ref.current, 0.4);
  }, []);

  return (
    <Router>
      <div className="relative bg-white text-black font-sans selection:bg-black selection:text-white">
        {/* Navbar */}
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <div
                  ref={heroRef}
                  className="relative w-full flex flex-col items-center justify-center pt-20 pb-10 min-h-[60vh] px-4"
                >
                  <h4
                    ref={heading1Ref}
                    className="text-2xl sm:text-3xl md:text-4xl text-gray-500 font-medium tracking-tight mb-2 opacity-0"
                  >
                    Your
                  </h4>

                  <h1
                    ref={heading2Ref}
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter leading-none text-center opacity-0"
                  >
                    FRONT-END
                  </h1>

                  <h4
                    ref={heading3Ref}
                    className="text-2xl sm:text-3xl md:text-4xl text-gray-500 font-medium tracking-tight mt-2 opacity-0"
                  >
                    Guy
                  </h4>
                </div>

                <div>
                  <About />
                </div>
                <div>
                  <Dsvg />
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
