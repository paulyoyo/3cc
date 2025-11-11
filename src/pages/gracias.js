import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import { gsap } from "gsap";
import Layout from "@layout/Layout";
import "./gracias.scss";

export default function Gracias() {
  const checkmarkRef = useRef(null);
  const contentRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Animate checkmark
    timeline.fromTo(
      checkmarkRef.current,
      {
        scale: 0,
        rotation: -180,
        opacity: 0,
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      }
    );

    // Animate content
    timeline.fromTo(
      contentRef.current?.children || [],
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Animate CTA buttons
    timeline.fromTo(
      ctaRef.current?.children || [],
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.2"
    );
  }, []);

  return (
    <Layout>
      <section className="gracias">
        <div className="gracias__container container mx-auto px-4 max-w-4xl">
          <div className="gracias__card">
            {/* Success Checkmark */}
            <div className="gracias__icon-wrapper" ref={checkmarkRef}>
              <svg
                className="gracias__icon"
                viewBox="0 0 52 52"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="gracias__icon-circle"
                  cx="26"
                  cy="26"
                  r="25"
                  fill="none"
                />
                <path
                  className="gracias__icon-check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
            </div>

            {/* Content */}
            <div className="gracias__content" ref={contentRef}>
              <h1 className="gracias__title">¡Solicitud Enviada con Éxito!</h1>

              <p className="gracias__subtitle">
                Gracias por confiar en 3C Capital
              </p>

              <div className="gracias__message">
                <p>
                  Hemos recibido tu solicitud correctamente y nuestro equipo la
                  está revisando.
                </p>
                <p>
                  <strong>¿Qué sigue?</strong>
                </p>
                <ul className="gracias__steps">
                  <li>
                    <span className="gracias__step-number">1</span>
                    <span className="gracias__step-text">
                      Uno de nuestros asesores se pondrá en contacto contigo en las
                      próximas <strong>24 horas</strong>
                    </span>
                  </li>
                  <li>
                    <span className="gracias__step-number">2</span>
                    <span className="gracias__step-text">
                      Evaluaremos tu solicitud y te presentaremos las mejores
                      opciones de financiamiento
                    </span>
                  </li>
                  <li>
                    <span className="gracias__step-number">3</span>
                    <span className="gracias__step-text">
                      Una vez aprobado, recibirás el dinero en tu cuenta en
                      menos de 24 horas
                    </span>
                  </li>
                </ul>
              </div>

              <div className="gracias__contact-info">
                <p className="gracias__contact-label">
                  ¿Necesitas hablar con nosotros ahora?
                </p>
                <div className="gracias__contact-details">
                  <a href="tel:+51987654321" className="gracias__contact-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    (01) 987 654 321
                  </a>
                  <a
                    href="mailto:contacto@3ccapital.com"
                    className="gracias__contact-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    contacto@3ccapital.com
                  </a>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="gracias__cta" ref={ctaRef}>
              <Link to="/" className="gracias__button gracias__button--primary">
                Volver al Inicio
              </Link>
              <Link
                to="/sobre-nosotros"
                className="gracias__button gracias__button--secondary"
              >
                Conoce Más Sobre Nosotros
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <html lang="es" className="light scroll-smooth" dir="ltr" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Solicitud Enviada - 3C Capital</title>
      <meta
        name="description"
        content="Tu solicitud ha sido enviada exitosamente. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas."
      />
      <meta name="robots" content="noindex, nofollow" />
    </>
  );
}
