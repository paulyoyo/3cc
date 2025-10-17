import React from "react";
import Heading from "@ui/Heading";
import "./WhyChooseUs.scss";

export default function WhyChooseUs() {
  const features = [
    {
      id: "feature-1",
      iconType: "diamond",
    },
    {
      id: "feature-2",
      iconType: "circle",
    },
    {
      id: "feature-3",
      iconType: "figma",
    },
    {
      id: "feature-4",
      iconType: "cube",
    },
  ];

  return (
    <section className="why-choose-us-section bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="content-column space-y-6">
            <Heading title="¿Por qué elegir 3C Capital?" />
            <h3 className="text-xl md:text-2xl font-semibold text-gold mb-6">
              Brindamos asesoría financiera de primer nivel a nuestros clientes
            </h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Crece Group Capital S.A.C. – 3C Capital es una empresa de
              factoring con amplia experiencia. Contamos con un equipo de
              asesores financieros con muchos años en el rubro, capaces de
              proporcionar respuestas rápidas y confiables a nuestros clientes.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Nos posiciona actualmente en el top 3 entre empresas de factoring en
              el Perú. Nuestra posición es producto de brindar un servicio
              diferenciado a nuestros clientes que en estos 7 años de
              funcionamiento nos ha permitido trabajar con múltiples empresas de
              diversos rubros.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Nuestro objetivo principal es ayudar a empresas a tener el capital
              necesario para poder operar y crecer.
            </p>
          </div>

          <div className="features-grid grid grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="feature-icon-box w-full aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center hover:shadow-xl transition-all hover:scale-105"
              >
                {/* Icon placeholder - to be replaced with actual icon components or SVGs */}
                <span className="text-6xl opacity-50" data-icon={feature.iconType}>
                  {feature.iconType === "diamond" && "💎"}
                  {feature.iconType === "circle" && "⭕"}
                  {feature.iconType === "figma" && "🎨"}
                  {feature.iconType === "cube" && "🧊"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
