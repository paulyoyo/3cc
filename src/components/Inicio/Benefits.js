import React from "react";
import Heading from "@ui/Heading";
import "./Benefits.scss";

export default function Benefits() {
  const benefits = [
    {
      id: "rapidez",
      icon: "clock",
      title: "Rapidez",
      description: "Dinero en 24-48h",
    },
    {
      id: "seguridad",
      icon: "shield",
      title: "Seguridad",
      description: "Procesos transparentes",
    },
    {
      id: "flexibilidad",
      icon: "hands",
      title: "Flexibilidad",
      description: "Adaptamos a tu necesidad",
    },
    {
      id: "liquidez",
      icon: "money",
      title: "Liquidez",
      description: "Mejora tu flujo de caja",
    },
  ];

  return (
    <section className="benefits-section bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <Heading
          title="Beneficios"
          subtitle="Lo que obtendrás con nuestro factoring"
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="benefit-card bg-gold rounded-2xl p-8 text-center text-white transition-all hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="icon-wrapper mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  {/* Icon placeholder - to be replaced with actual icon components or SVGs */}
                  <span className="text-4xl" data-icon={benefit.icon}>
                    {benefit.icon === "clock" && "⏱"}
                    {benefit.icon === "shield" && "🛡"}
                    {benefit.icon === "hands" && "🤝"}
                    {benefit.icon === "money" && "💰"}
                  </span>
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                {benefit.title}
              </h3>
              <p className="text-base text-white/90">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
