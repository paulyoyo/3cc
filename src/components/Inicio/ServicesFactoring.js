import React from "react";
import "./ServicesFactoring.scss";

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
    <section className="services-factoring-section py-16 md:py-24 bg-gray-700">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-12 md:mb-16">
          Nuestro servicio: Factoring
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card ${
                index === 0 ? "featured-card" : "standard-card"
              } rounded-2xl p-8 text-white transition-all hover:shadow-2xl hover:-translate-y-2`}
            >
              <div className="icon-wrapper mb-6">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  {/* Icon placeholder - to be replaced with actual icon components or SVGs */}
                  <span className="text-3xl" data-icon={service.icon}>
                    {service.icon === "rocket" && "🚀"}
                    {service.icon === "document" && "📄"}
                    {service.icon === "checklist" && "✅"}
                  </span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-base text-white/90 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
