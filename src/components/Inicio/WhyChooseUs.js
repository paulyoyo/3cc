import React from "react";

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
    <section>
      <div>
        <div>
          <h2>¿Por qué elegir 3C Capital?</h2>
          <h3>
            Brindamos asesoría financiera de primer nivel a nuestros clientes
          </h3>
          <p>
            Crece Group Capital S.A.C. – 3C Capital es una empresa de
            factoring con amplia experiencia. Contamos con un equipo de
            asesores financieros con muchos años en el rubro, capaces de
            proporcionar respuestas rápidas y confiables a nuestros clientes.
          </p>
          <p>
            Nos posiciona actualmente en el top 3 entre empresas de factoring en
            el Perú. Nuestra posición es producto de brindar un servicio
            diferenciado a nuestros clientes que en estos 7 años de
            funcionamiento nos ha permitido trabajar con múltiples empresas de
            diversos rubros.
          </p>
          <p>
            Nuestro objetivo principal es ayudar a empresas a tener el capital
            necesario para poder operar y crecer.
          </p>
        </div>

        <div>
          {features.map((feature) => (
            <div key={feature.id}>
              {/* Icon placeholder - to be replaced with actual icon components or SVGs */}
              <span data-icon={feature.iconType}></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
