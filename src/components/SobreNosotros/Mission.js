import React, { useEffect, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "@ui/Heading";
import "./Mission.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Mission() {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section className="mission-section">
      <div className="mission-overlay" />
      <StaticImage
        src="@images/mission-bg.jpg"
        alt="3C Capital Mission"
        className="mission-background"
        placeholder="blurred"
        loading="lazy"
        quality={90}
      />

      <div className="container mx-auto px-4 max-w-6xl">
        <div ref={contentRef} className="mission-content">
          <Heading title="Nuestra Misión" white />

          <h2 className="mission-title">
            Buscamos mejorar los rendimientos de capital en facturas mientras
            proveemos liquidez a proveedores de grandes empresas
          </h2>

          <div className="mission-text">
            <p>
              Las altas tasas de interés pasivas en los últimos años, junto con
              la falta de conocimiento sobre productos financieros
              sofisticados, han provocado que muchos inversionistas obtengan
              rendimientos inferiores al riesgo que asumen, e incluso sufran
              pérdidas de capital en sus portafolios debido a riesgos
              operativos.
            </p>
            <p>
              Nuestro objetivo es integrar la provisión de liquidez a PYMEs
              proveedoras de grandes empresas y corporaciones, mientras
              ofrecemos a los inversionistas con excedentes la oportunidad de
              obtener rentabilidad en operaciones de corto plazo, con riesgos
              cuidadosamente evaluados y una visualización individual de cada
              operación. La adquisición de facturas será siempre tu decisión,
              apoyada por nuestra asesoría y evaluada caso por caso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
