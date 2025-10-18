import React from "react";
import Heading from "@ui/Heading";
import IconFactoring from "../../assets/images/icon-factoring.svg";
import IconVentajas from "../../assets/images/icon-ventajas.svg";
import IconRequisitos from "../../assets/images/icon-requisitos.svg";
import "./ServicesFactoring.scss";

export default function ServicesFactoring() {
  const services = [
    {
      id: "que-es",
      icon: IconFactoring,
      title: "Qué es Factoring",
      description:
        "Es un mecanismo de financiamiento que permite a las empresas adelantar el cobro de sus facturas.",
    },
    {
      id: "ventajas",
      icon: IconVentajas,
      title: "Ventajas",
      description:
        "Mejora tu flujo de caja, sin aumentar tu endeudamiento bancario.",
    },
    {
      id: "requisitos",
      icon: IconRequisitos,
      title: "Requisitos",
      description:
        "Documentación mínima requerida para acceder al financiamiento.",
    },
  ];

  return (
    <section className="services-factoring-section bg-gray-700">
      <div className="container mx-auto px-4 max-w-6xl">
        <Heading title="Nuestro servicio: Factoring" white />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 lg:mt-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card rounded-2xl p-8 text-white transition-all hover:shadow-2xl hover:-translate-y-2 group relative"
              style={{
                border: "1px solid white",
                background: "transparent",
              }}
            >
              <div className="icon-wrapper mb-6 flex justify-start relative z-10">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-28 h-28"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-normal mb-4 relative z-10">
                {service.title}
              </h3>
              <p className="text-base text-white/90 leading-relaxed relative z-10">
                {service.description}
              </p>
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity z-0"
                style={{
                  background:
                    "linear-gradient(135deg, #877458 0%, #a4988b 100%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
