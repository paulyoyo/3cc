import React from "react";
import "./Process.scss";

export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Envía tu factura",
      description:
        "Sube tus facturas en nuestro sistema. Revisa tus facturas y selecciona las que deseas adelantar.",
    },
    {
      number: "2",
      title: "Evaluación",
      description:
        "Evaluamos tu factura y te ofrecemos las mejores condiciones del mercado.",
    },
    {
      number: "3",
      title: "Recibe tu dinero",
      description:
        "Una vez aprobada, recibirás el dinero en tu cuenta en menos de 24 horas.",
    },
  ];

  return (
    <section className="process-section py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Proceso
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Tres pasos sencillos para recibir tu dinero
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="process-step text-center">
              <div className="step-number-wrapper mb-6 flex justify-center">
                <div className="step-number w-20 h-20 md:w-24 md:h-24 rounded-full bg-gold flex items-center justify-center">
                  <span className="text-2xl md:text-3xl font-bold text-white">
                    {step.number}
                  </span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
