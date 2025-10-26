import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Heading from "@ui/Heading";
import IconEnviaFactura from "@images/icon_envia_factura.svg";
import IconEvaluacion from "@images/icon_evaluacion.svg";
import IconRecibeDinero from "@images/icon_recibe_dinero.svg";
import "./Process.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Process() {
  const stepsRef = useRef([]);

  const steps = [
    {
      id: 1,
      title: "Envía la factura",
      description:
        "Una vez aprobada la operación, recibes un anticipo (un porcentaje del total) en días o incluso el mismo día; la factoring asume la cobranza hasta el vencimiento.",
      icon: IconEnviaFactura,
    },
    {
      id: 2,
      title: "Evaluación",
      description:
        "Realizamos un análisis crediticio integral del deudor: historial de pagos, solvencia, plazo y condiciones del documento.",
      icon: IconEvaluacion,
    },
    {
      id: 3,
      title: "Recibe tu dinero",
      description:
        "Te entregamos un anticipo del monto convenido en un corto plazo. Mientras gestionamos la cobranza del documento hasta su vencimiento, para que tú puedas concentrarte en tu negocio.",
      icon: IconRecibeDinero,
    },
  ];

  useEffect(() => {
    const stepElements = stepsRef.current;

    if (stepElements.length > 0) {
      gsap.fromTo(
        stepElements,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: stepElements[0]?.parentNode,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    }
  }, []);

  return (
    <section className="process-section bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Heading Column */}
          <div className="lg:col-span-4">
            <Heading
              title="Proceso"
              subtitle="Tres pasos sencillos para recibir tu dinero"
            />
          </div>

          {/* Steps Column */}
          <div className="lg:col-span-8">
            <div className="process-steps">
              {steps.map((step, idx) => (
                <div
                  className="process-step"
                  key={step.id}
                  ref={(el) => (stepsRef.current[idx] = el)}
                  style={{ opacity: 0 }}
                >
                  <div className="step-icon">
                    <img src={step.icon} alt={step.title} />
                  </div>
                  <div className="step-content">
                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="step-dash">
                      <svg width="60" height="8" viewBox="0 0 60 8" fill="none">
                        <line
                          x1="4"
                          y1="4"
                          x2="56"
                          y2="4"
                          stroke="#e5e7eb"
                          strokeWidth="2"
                          strokeDasharray="6 6"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
