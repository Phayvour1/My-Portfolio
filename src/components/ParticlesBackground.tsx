import React, { useEffect } from "react";

const ParticlesBackground: React.FC = () => {
  useEffect(() => {
    // Include the particles.js configuration script dynamically
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = () => {
      // Initialize particles.js once the script is loaded
      if (window.particlesJS) {
        window.particlesJS("particles-js", {
            particles: {
              number: {
                value: 100, // Reduce the number of particles for less clutter
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ffffff",
              },
              shape: {
                type: "circle", // Simple circular particles
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.5, // Adjust opacity for smoother visual appearance
                random: false,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3, // Particle size
                random: true,
                anim: {
                  enable: true,
                  speed: 3,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 100,
                color: "#515964",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 8, // Moderate speed for fluid movement
                direction: "none", // Allow particles to move freely
                random: false, // Remove randomness for smoother movement
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas", // Enable canvas interaction
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse", // Particles will move away from the cursor on hover
                },
                onclick: {
                  enable: true,
                  mode: "push", // On click, particles will be added
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 140,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 100, // Particles move away from cursor when hovering
                  duration: 1, // Speed of repulsion
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true, 
          });
            
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      {/* Particles.js container */}
      <div id="particles-js" style={{ position: "absolute", width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default ParticlesBackground;
