import React, { useEffect, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "@ui/Heading";
import "./WhyFactoring.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhyFactoring() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  useEffect(() => {
    if (section1Ref.current) {
      gsap.fromTo(
        section1Ref.current.querySelectorAll(".animate-item"),
        { autoAlpha: 0, x: -30 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section1Ref.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (section2Ref.current) {
      gsap.fromTo(
        section2Ref.current.querySelectorAll(".animate-item"),
        { autoAlpha: 0, x: 30 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section2Ref.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section className="why-factoring">
      {/* Why Factoring Section */}
      <div ref={section1Ref} className="why-factoring-section">
        <div className="why-factoring-grid">
          <div className="why-factoring-image">
            <StaticImage
              src="@images/estructura.jpg"
              alt="Estructura de Factoring"
              placeholder="blurred"
              loading="lazy"
              quality={90}
            />
          </div>

          <div className="why-factoring-content">
            <h2 className="animate-item section-title">
              ¿Por qué hacer factoring?
            </h2>

            <ul className="benefits-list">
              <li className="animate-item">
                <svg
                  className="benefit-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Te proporciona liquidez inmediata.
              </li>
              <li className="animate-item">
                <svg
                  className="benefit-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Nos encargamos de gestionar el cobro de tus facturas.
              </li>
              <li className="animate-item">
                <svg
                  className="benefit-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Te permite cerrar con tranquilidad tu próxima venta o servicio.
              </li>
              <li className="animate-item">
                <svg
                  className="benefit-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Es un proceso simple, estandarizado y sin el papeleo ni el
                tiempo que usualmente requieren los bancos.
              </li>
              <li className="animate-item">
                <svg
                  className="benefit-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                No se registra como deuda en tu balance, lo que mejora tu
                calificación frente a las entidades bancarias.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Portfolio Structure Section */}
      <div ref={section2Ref} className="portfolio-section">
        <div className="portfolio-grid">
          <div className="portfolio-content">
            <h2 className="animate-item section-title-white">
              Estructura de Portafolio
            </h2>

            <p className="animate-item portfolio-text">
              En 3C Capital, gestionamos un portafolio cuidadosamente
              diversificado, financiando a clientes de diversos sectores
              económicos con un enfoque en empresas sólidas y de trayectoria.
              Nuestra cartera abarca sectores estratégicos como comercio,
              industria, minería, retail, y servicios, entre otros,
              garantizando una amplia cobertura de oportunidades.
            </p>

            <a
              href="https://wa.link/4wsw1s"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-item portfolio-button"
            >
              Visítanos
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>

          <div className="portfolio-image">
            <StaticImage
              src="@images/chart.jpg"
              alt="Portfolio Chart"
              placeholder="blurred"
              loading="lazy"
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
