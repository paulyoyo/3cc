import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "@layout/Layout";
import Simulator from "@components/Inicio/Simulator";

export default function SimuladorPage() {
  return (
    <Layout>
      {/* Simulator Component - Full Width */}
      <Simulator />

      {/* Description Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simulador de Rentabilidad
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Cristal Clear Capital S.A.C. ("3C Capital") es una empresa de factoring que opera con altos estándares de evaluación de riesgo, enfocada en generar crecimiento de capital de manera consistente a través de un portafolio selecto de clientes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nuestro objetivo principal es ayudar a empresas a tener el capital necesario para poder operar y crecer.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-16">
            {/* Rapidez Card */}
            <div className="bg-gradient-to-br from-desaturated-dark-orange to-dark-grayish-orange rounded-2xl p-8 text-center text-white transition-all hover:shadow-[0_20px_40px_rgba(135,116,88,0.4)] hover:-translate-y-2 flex flex-col items-center justify-center group" style={{ height: "320px" }}>
              <div className="icon-wrapper mb-6 flex justify-center transition-transform group-hover:scale-110">
                <StaticImage
                  src="../assets/images/icon-rapidez.png"
                  alt="Rapidez"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="font-bold mb-3" style={{ fontSize: "24px" }}>
                Rapidez
              </h3>
              <p className="text-white/90" style={{ fontSize: "16px" }}>
                Dinero en 24-48h
              </p>
            </div>

            {/* Seguridad Card */}
            <div className="bg-gradient-to-br from-desaturated-dark-orange to-dark-grayish-orange rounded-2xl p-8 text-center text-white transition-all hover:shadow-[0_20px_40px_rgba(135,116,88,0.4)] hover:-translate-y-2 flex flex-col items-center justify-center group" style={{ height: "320px" }}>
              <div className="icon-wrapper mb-6 flex justify-center transition-transform group-hover:scale-110">
                <StaticImage
                  src="../assets/images/icon-seguridad.png"
                  alt="Seguridad"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="font-bold mb-3" style={{ fontSize: "24px" }}>
                Seguridad
              </h3>
              <p className="text-white/90" style={{ fontSize: "16px" }}>
                Procesos transparentes
              </p>
            </div>

            {/* Flexibilidad Card */}
            <div className="bg-gradient-to-br from-desaturated-dark-orange to-dark-grayish-orange rounded-2xl p-8 text-center text-white transition-all hover:shadow-[0_20px_40px_rgba(135,116,88,0.4)] hover:-translate-y-2 flex flex-col items-center justify-center group" style={{ height: "320px" }}>
              <div className="icon-wrapper mb-6 flex justify-center transition-transform group-hover:scale-110">
                <StaticImage
                  src="../assets/images/icon-flexibilidad.png"
                  alt="Flexibilidad"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="font-bold mb-3" style={{ fontSize: "24px" }}>
                Flexibilidad
              </h3>
              <p className="text-white/90" style={{ fontSize: "16px" }}>
                Adaptamos a tu necesidad
              </p>
            </div>

            {/* Liquidez Card */}
            <div className="bg-gradient-to-br from-desaturated-dark-orange to-dark-grayish-orange rounded-2xl p-8 text-center text-white transition-all hover:shadow-[0_20px_40px_rgba(135,116,88,0.4)] hover:-translate-y-2 flex flex-col items-center justify-center group" style={{ height: "320px" }}>
              <div className="icon-wrapper mb-6 flex justify-center transition-transform group-hover:scale-110">
                <StaticImage
                  src="../assets/images/icon-liquidez.png"
                  alt="Liquidez"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="font-bold mb-3" style={{ fontSize: "24px" }}>
                Liquidez
              </h3>
              <p className="text-white/90" style={{ fontSize: "16px" }}>
                Mejora tu flujo de caja
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <html lang="es" />
      <title>Simulador de Rentabilidad - 3C Capital</title>
      <meta
        name="description"
        content="Simula tu rentabilidad con nuestro simulador de factoring. Calcula cuánto recibirías al adelantar el cobro de tus facturas con 3C Capital."
      />
    </>
  );
}
