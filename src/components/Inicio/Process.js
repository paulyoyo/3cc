import React, { useState } from "react";
import Heading from "@ui/Heading";
import "./Process.scss";

export default function Process() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Envía la factura",
      description:
        "Una vez aprobada la operación, recibes un anticipo (un porcentaje del total) en días o incluso el mismo día; la factoring asume la cobranza hasta el vencimiento.",
    },
    {
      id: 2,
      title: "Evaluación",
      description:
        "Realizamos un análisis crediticio integral del deudor: historial de pagos, solvencia, plazo y condiciones del documento. Con base en este estudio, definimos el porcentaje de anticipo que te corresponde, las comisiones aplicables y los plazos.",
    },
    {
      id: 3,
      title: "Recibe tu dinero",
      description:
        "Tras aprobarse la operación, te entregamos un anticipo del monto convenido en un corto plazo, usualmente en días hábiles. Mientras tanto, gestionamos la cobranza del documento hasta su vencimiento, para que tú puedas concentrarte en tu negocio.",
    },
  ];

  const handleStepClick = (stepId) => {
    setActiveStep(activeStep === stepId ? null : stepId);
  };

  return (
    <section className="process-section bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-3 mb-8 lg:mb-0">
            <Heading
              title="Proceso"
              subtitle="Tres pasos sencillos para recibir tu dinero"
            />
          </div>

          <div className="lg:col-span-9 lg:pt-10">
            {/* Horizontal lines for desktop */}
            <div className="hidden md:flex mb-4">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="flex-1"
                  style={{
                    height: "5px",
                    backgroundColor:
                      activeStep === step.id ? "#FB9B0D" : "#facd89",
                  }}
                />
              ))}
            </div>

            {/* Mobile: Vertical lines with steps */}
            <div className="flex flex-col md:hidden">
              {steps.map((step) => (
                <div key={step.id} className="flex gap-4">
                  <div
                    style={{
                      width: "5px",
                      minHeight: "60px",
                      backgroundColor:
                        activeStep === step.id ? "#FB9B0D" : "#facd89",
                    }}
                  />
                  <div className="flex-1">
                    <h3
                      className="text-xl font-normal text-gray-900 mb-3 cursor-pointer hover:text-vivid-orange transition-colors"
                      onClick={() => handleStepClick(step.id)}
                    >
                      {step.title}
                    </h3>
                    {activeStep === step.id && (
                      <p className="text-base text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Grid layout */}
            <div className="hidden md:grid grid-cols-3 gap-8 lg:gap-12">
              {steps.map((step) => (
                <div key={step.id} className="process-step">
                  <h3
                    className="text-xl md:text-2xl text-gray-900 mb-3 cursor-pointer hover:text-vivid-orange transition-colors"
                    onClick={() => handleStepClick(step.id)}
                  >
                    {step.title}
                  </h3>
                  {activeStep === step.id && (
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
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
