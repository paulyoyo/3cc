import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Heading from "@ui/Heading";
import "./Benefits.scss";

export default function Benefits() {
  const benefits = [
    {
      id: "rapidez",
      icon: "icon-rapidez.png",
      title: "Rapidez",
      description: "Dinero en 24-48h",
    },
    {
      id: "seguridad",
      icon: "icon-seguridad.png",
      title: "Seguridad",
      description: "Procesos transparentes",
    },
    {
      id: "flexibilidad",
      icon: "icon-flexibilidad.png",
      title: "Flexibilidad",
      description: "Adaptamos a tu necesidad",
    },
    {
      id: "liquidez",
      icon: "icon-liquidez.png",
      title: "Liquidez",
      description: "Mejora tu flujo de caja",
    },
  ];

  const getIconImage = (iconName) => {
    switch (iconName) {
      case "icon-rapidez.png":
        return (
          <StaticImage
            src="../../assets/images/icon-rapidez.png"
            alt="Rapidez"
            width={80}
            height={80}
          />
        );
      case "icon-seguridad.png":
        return (
          <StaticImage
            src="../../assets/images/icon-seguridad.png"
            alt="Seguridad"
            width={80}
            height={80}
          />
        );
      case "icon-flexibilidad.png":
        return (
          <StaticImage
            src="../../assets/images/icon-flexibilidad.png"
            alt="Flexibilidad"
            width={80}
            height={80}
          />
        );
      case "icon-liquidez.png":
        return (
          <StaticImage
            src="../../assets/images/icon-liquidez.png"
            alt="Liquidez"
            width={80}
            height={80}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className="benefits-section bg-white">
      <div className="container mx-auto px-4 max-w-6xl fade-wrapper">
        <div className="mb-8">
          <Heading
            title="Beneficios"
            subtitle="Lo que obtendrás con nuestro factoring"
            centered
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="benefit-card fade-top bg-gradient-to-br from-desaturated-dark-orange to-dark-grayish-orange rounded-2xl p-8 text-center text-white transition-all hover:shadow-[0_20px_40px_rgba(135,116,88,0.4)] hover:-translate-y-2 flex flex-col items-center justify-center group"
              style={{ height: "320px" }}
            >
              <div className="icon-wrapper mb-6 flex justify-center transition-transform group-hover:scale-110">
                {getIconImage(benefit.icon)}
              </div>
              <h3 className="font-bold mb-3" style={{ fontSize: "36px" }}>
                {benefit.title}
              </h3>
              <p className="text-white/90" style={{ fontSize: "24px" }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
