import React from "react";
import Layout from "@layout/Layout";
import Hero from "@components/SobreNosotros/Hero";
import Team from "@components/SobreNosotros/Team";
import Features from "@components/SobreNosotros/Features";

const SobreNosotrosPage = () => {
  return (
    <Layout>
      <Hero />
      <Team />
      <Features />
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Sobre Nosotros | 3C Capital - Expertos en Factoring</title>
    <meta
      name="description"
      content="Conoce al equipo líder de 3C Capital con 25 años de experiencia en Banca y Finanzas. Expertos en factoring y oportunidades de rentabilidad."
    />
  </>
);

export default SobreNosotrosPage;
