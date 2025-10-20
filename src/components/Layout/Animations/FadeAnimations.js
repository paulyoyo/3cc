import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const FadeAnimations = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      gsap.registerPlugin(ScrollTrigger);

      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        const fadeWrapperRefs = document.querySelectorAll(".fade-wrapper");

        fadeWrapperRefs.forEach((fadeWrapperRef) => {
          const fadeItems = fadeWrapperRef.querySelectorAll(".fade-top");

          fadeItems.forEach((element, index) => {
            const delay = index * 0.15;

            // Use gsap.fromTo() with scrollTrigger - more reliable
            gsap.fromTo(
              element,
              {
                opacity: 0,
                y: 100,
              },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: delay,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 85%",
                  markers: false,
                  toggleActions: "play none none none",
                  once: true,
                },
              }
            );
          });
        });

        ScrollTrigger.refresh();
      }, 100);

      return () => {
        clearTimeout(timer);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return null;
};

export default FadeAnimations;
