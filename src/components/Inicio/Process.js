import React from "react";

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
    <section>
      <div>
        <h2>Proceso</h2>
        <p>Tres pasos sencillos para recibir tu dinero</p>

        <div>
          {steps.map((step) => (
            <div key={step.number}>
              <div>
                <span>{step.number}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
