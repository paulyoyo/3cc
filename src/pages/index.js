import React from "react";
import Layout from "@layout/Layout";
import Hero from "@components/Inicio/Hero";
import Process from "@components/Inicio/Process";
import Simulator from "@components/Inicio/Simulator";
import Benefits from "@components/Inicio/Benefits";
import WhyChooseUs from "@components/Inicio/WhyChooseUs";
import Testimonials from "@components/Inicio/Testimonials";
import ServicesFactoring from "@components/Inicio/ServicesFactoring";
import LatestPosts from "@components/Inicio/LatestPosts";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Process />
      <Simulator />
      <Benefits />
      <WhyChooseUs />
      <Testimonials />
      <ServicesFactoring />
      <LatestPosts />
    </Layout>
  );
}

export function Head() {
  return (
    <>
      <html lang="es" className="light scroll-smooth" dir="ltr" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>3C Capital - Factoring y Oportunidades de Rentabilidad</title>
      <meta
        name="description"
        content="3C Capital es una empresa de factoring con amplia experiencia. Adelanta el cobro de tus facturas y mejora tu flujo de caja sin aumentar tu endeudamiento bancario."
      />
    </>
  );
}
