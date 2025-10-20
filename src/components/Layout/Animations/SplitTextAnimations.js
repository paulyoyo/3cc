import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitType from "split-type";

const SplitTextAnimations = () => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth >= 768) {
      gsap.registerPlugin(ScrollTrigger);

      // Split text into characters
      new SplitType(".title-animation");

      const titleAnims = document.querySelectorAll(".title-animation");

      titleAnims.forEach((titleAnim) => {
        const charElements = titleAnim.querySelectorAll(".char");

        charElements.forEach((char, index) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: char,
              start: "top 90%",
              end: "bottom 60%",
              scrub: false,
              markers: false,
              toggleActions: "play none none none",
            },
          });

          const charDelay = index * 0.03;

          tl.from(char, {
            duration: 0.8,
            x: 70,
            delay: charDelay,
            autoAlpha: 0,
          });
        });
      });

      // Add active class when title enters viewport
      const titleElements = document.querySelectorAll(".title-animation");

      titleElements.forEach((el) => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 100%",
            markers: false,
            onEnter: () => {
              el.classList.add("title-anim-active");
            },
          },
        });
      });
    }
  }, []);

  return null;
};

export default SplitTextAnimations;
