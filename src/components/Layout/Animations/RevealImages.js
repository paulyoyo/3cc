import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const RevealImages = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      gsap.registerPlugin(ScrollTrigger);
      const revealImages = document.querySelectorAll(".reveal-img");

      revealImages.forEach((el) => {
        // Set initial state
        gsap.set(el, {
          opacity: 0,
          y: 50,
        });

        // Create reveal animation
        ScrollTrigger.create({
          trigger: el,
          start: "top 80%",
          markers: false,
          onEnter: () => {
            el.classList.add("reveal-img-active");
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
            });
          },
          once: true,
        });
      });
    }
  }, []);

  return null;
};

export default RevealImages;
