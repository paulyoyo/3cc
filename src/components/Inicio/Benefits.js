import React from "react";

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
    <section>
      <div>
        <h2>Beneficios</h2>
        <p>Lo que obtendrás con nuestro factoring</p>

        <div>
          {benefits.map((benefit) => (
            <div key={benefit.id}>
              <div>
                {/* Icon placeholder - to be replaced with actual icon components or SVGs */}
                <span data-icon={benefit.icon}></span>
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
