import React from "react";

export default function ServicesFactoring() {
  const services = [
    {
      id: "que-es",
      icon: "rocket",
      title: "Qué es Factoring",
      description:
        "Es un mecanismo de financiamiento que permite a las empresas adelantar el cobro de sus facturas.",
    },
    {
      id: "ventajas",
      icon: "document",
      title: "Ventajas",
      description:
        "Mejora tu flujo de caja, sin aumentar tu endeudamiento bancario.",
    },
    {
      id: "requisitos",
      icon: "checklist",
      title: "Requisitos",
      description:
        "Documentación mínima requerida para acceder al financiamiento.",
    },
  ];

  return (
    <section>
      <div>
        <h2>Nuestro servicio: Factoring</h2>

        <div>
          {services.map((service) => (
            <div key={service.id}>
              <div>
                {/* Icon placeholder - to be replaced with actual icon components or SVGs */}
                <span data-icon={service.icon}></span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
