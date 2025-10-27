import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Heading from "@ui/Heading";
import "./WhyChooseUs.scss";

export default function WhyChooseUs() {
  const brands = [
    {
      id: "brand-1",
      image: "brand-3c.png",
      alt: "3C Capital",
    },
    {
      id: "brand-2",
      image: "brand-cavali.png",
      alt: "Cavali",
    },
    {
      id: "brand-3",
      image: "brand-f.png",
      alt: "F",
    },
    {
      id: "brand-4",
      image: "brand-sbs.png",
      alt: "SBS",
    },
  ];

  const getBrandImage = (imageName) => {
    switch (imageName) {
      case "brand-3c.png":
        return (
          <StaticImage
            src="../../assets/images/brand-3c.png"
            alt="3C Capital"
            width={120}
            height={120}
            objectFit="contain"
          />
        );
      case "brand-cavali.png":
        return (
          <StaticImage
            src="../../assets/images/brand-cavali.png"
            alt="Cavali"
            width={120}
            height={120}
            objectFit="contain"
          />
        );
      case "brand-f.png":
        return (
          <StaticImage
            src="../../assets/images/brand-f.png"
            alt="F"
            width={120}
            height={120}
            objectFit="contain"
          />
        );
      case "brand-sbs.png":
        return (
          <StaticImage
            src="../../assets/images/brand-sbs.png"
            alt="SBS"
            width={120}
            height={120}
            objectFit="contain"
          />
        );
      default:
        return null;
    }
  };

  return (
    <section className="why-choose-us-section bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-12 lg:gap-16 px-4 lg:px-8">
          <div className="content-column space-y-6 lg:max-w-[50%]">
            <Heading title="¿Por qué elegir 3C Capital?" />
            <h3 className="text-xl md:text-2xl font-semibold text-vivid-orange mb-6">
              Brindamos asesoría financiera de primer nivel a nuestros clientes
            </h3>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Cristal Clear Capital S.A.C. ("3C Capital") es una empresa de
              factoring que opera con altos estándares de evaluación de riesgo,
              enfocada en generar crecimiento de capital de manera consistente a
              través de un portafolio selecto de clientes.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Nos posiciona actualmente en el top 3 entre empresas de factoring
              en el Perú. Nuestra posición es producto de brindar un servicio
              diferenciado a nuestros clientes que en estos 7 años de
              funcionamiento nos ha permitido trabajar con múltiples empresas de
              diversos rubros.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Nuestro objetivo principal es ayudar a empresas a tener el capital
              necesario para poder operar y crecer.
            </p>
          </div>

          <div className="features-grid grid grid-cols-2 gap-6 lg:max-w-[50%]">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="brand-circle reveal-img w-full aspect-square rounded-full flex items-center justify-center hover:shadow-xl transition-all hover:scale-105 hover:rotate-2 hover:bg-gradient-to-br hover:from-vivid-orange hover:to-soft-orange bg-gray-100 feature-icon-box cursor-pointer group"
              >
                {getBrandImage(brand.image)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
