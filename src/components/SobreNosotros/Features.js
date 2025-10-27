import React, { useEffect, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "@ui/Heading";
import "./Features.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Features() {
  const block1Ref = useRef(null);
  const block2Ref = useRef(null);
  const block3Ref = useRef(null);

  useEffect(() => {
    // Animate first block (Mission)
    if (block1Ref.current) {
      gsap.fromTo(
        block1Ref.current.querySelector(".text-wrapper"),
        { autoAlpha: 0, x: 30 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: block1Ref.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        block1Ref.current.querySelector(".screen-container"),
        { autoAlpha: 0, x: -30 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: block1Ref.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate second block (Why Factoring)
    if (block2Ref.current) {
      gsap.fromTo(
        block2Ref.current.querySelector(".text-wrapper"),
        { autoAlpha: 0, x: -30 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: block2Ref.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        block2Ref.current.querySelector(".screen-container"),
        { autoAlpha: 0, x: 30 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: block2Ref.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Animate third block (Portfolio Structure)
    if (block3Ref.current) {
      gsap.fromTo(
        block3Ref.current.querySelector(".text-wrapper"),
        { autoAlpha: 0, x: 30 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: block3Ref.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        block3Ref.current.querySelector(".screen-container"),
        { autoAlpha: 0, x: -30 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: block3Ref.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <section className="fancy-feature-twentyThree mt-16 md:mt-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Mission Block */}
        <div ref={block1Ref} className="block-style-twentyThree mb-32 md:mb-24">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 order-last lg:order-last lg:ml-auto">
              <div className="screen-container ml-auto">
                <div
                  className="oval-shape"
                  style={{ background: "#C4A574" }}
                ></div>
                <div
                  className="oval-shape"
                  style={{ background: "#A68A5F" }}
                ></div>
                <StaticImage
                  src="../../assets/images/mission-bg.jpg"
                  alt="Nuestra Misión"
                  className="shapes shape-one"
                  placeholder="blurred"
                  loading="lazy"
                  quality={90}
                />
              </div>
            </div>
            <div className="lg:col-span-5 order-first lg:order-first">
              <div className="text-wrapper">
                <h6>Nuestra Misión</h6>
                <h3 className="title">
                  Buscamos mejorar los rendimientos de capital en facturas
                  mientras proveemos liquidez a proveedores de grandes empresas
                </h3>
                <p>
                  Las altas tasas de interés pasivas en los últimos años, junto
                  con la falta de conocimiento sobre productos financieros
                  sofisticados, han provocado que muchos inversionistas obtengan
                  rendimientos inferiores al riesgo que asumen, e incluso sufran
                  pérdidas de capital en sus portafolios debido a riesgos
                  operativos.
                </p>
                <p className="mt-4">
                  Nuestro objetivo es integrar la provisión de liquidez a PYMEs
                  proveedoras de grandes empresas y corporaciones, mientras
                  ofrecemos a los inversionistas con excedentes la oportunidad
                  de obtener rentabilidad en operaciones de corto plazo, con
                  riesgos cuidadosamente evaluados y una visualización
                  individual de cada operación.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Factoring Block */}
        <div ref={block2Ref} className="block-style-twentyThree mb-32 md:mb-24">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6">
              <div className="screen-container mr-auto">
                <div
                  className="oval-shape"
                  style={{ background: "#FFDE69" }}
                ></div>
                <div
                  className="oval-shape"
                  style={{ background: "#FF77D9" }}
                ></div>
                <StaticImage
                  src="../../assets/images/estructura.jpg"
                  alt="¿Por qué hacer factoring?"
                  className="shapes shape-two"
                  placeholder="blurred"
                  loading="lazy"
                  quality={90}
                />
              </div>
            </div>
            <div className="lg:col-span-5 lg:ml-auto">
              <div className="text-wrapper">
                <h6>Beneficios</h6>
                <h3 className="title">¿Por qué hacer factoring?</h3>
                <ul className="benefits-list">
                  <li>
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
                  <li>
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
                  <li>
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
                    Te permite cerrar con tranquilidad tu próxima venta o
                    servicio.
                  </li>
                  <li>
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
                  <li>
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
        </div>

        {/* Portfolio Structure Block */}
        <div ref={block3Ref} className="block-style-twentyThree">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 order-last lg:order-last lg:ml-auto">
              <div className="screen-container ml-auto">
                <div
                  className="oval-shape"
                  style={{ background: "#00F0FF" }}
                ></div>
                <div
                  className="oval-shape"
                  style={{ background: "#FC6BFF" }}
                ></div>
                <StaticImage
                  src="../../assets/images/chart.jpg"
                  alt="Estructura de Portafolio"
                  className="shapes shape-three"
                  placeholder="blurred"
                  loading="lazy"
                  quality={90}
                />
              </div>
            </div>
            <div className="lg:col-span-5 order-first lg:order-first">
              <div className="text-wrapper">
                <h6>Diversificación</h6>
                <h3 className="title">Estructura de Portafolio</h3>
                <p>
                  En 3C Capital, gestionamos un portafolio cuidadosamente
                  diversificado, financiando a clientes de diversos sectores
                  económicos con un enfoque en empresas sólidas y de
                  trayectoria. Nuestra cartera abarca sectores estratégicos como
                  comercio, industria, minería, retail, y servicios, entre
                  otros, garantizando una amplia cobertura de oportunidades.
                </p>
                <a
                  href="https://wa.link/4wsw1s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-button mt-6 inline-flex items-center"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
