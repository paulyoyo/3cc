import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import heroBg from "@images/hero-sobre-nosotros.jpg";
import "./Hero.scss";

export default function Hero() {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const elements = contentRef.current.querySelectorAll(".animate-item");

      gsap.fromTo(
        elements,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          delay: 0.3,
        },
      );
    }
  }, []);

  return (
    <section
      className="sobre-nosotros-hero relative w-full bg-center bg-cover"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black"></div>
      <div className="container mx-auto px-4 max-w-6xl relative">
        <div ref={contentRef} className="hero-content py-2 lg:py-8 xl:py-32">
          <h5 className="animate-item text-gold text-center text-2xl lg:text-3xl uppercase italic mb-6">
            "Open Kitchen Concept" Investment Boutique
          </h5>
          <h1 className="animate-item text-center text-white text-3xl lg:text-5xl lg:leading-normal leading-normal mb-7 font-bold uppercase">
            Factoring y Oportunidades de Rentabilidad
          </h1>
          <div className="animate-item text-center text-white">
            <p className="text-lg lg:text-xl mb-6 max-w-4xl mx-auto">
              Cristal Clear Capital S.A.C. ("3C Capital") es una empresa de
              factoring que opera con altos estándares de evaluación de riesgo,
              enfocada en generar crecimiento de capital de manera consistente a
              través de un portafolio selecto de clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
