import React from "react";
import Layout from "@layout/Layout";
import Team from "@components/SobreNosotros/Team";
import Mission from "@components/SobreNosotros/Mission";
import WhyFactoring from "@components/SobreNosotros/WhyFactoring";

const SobreNosotrosPage = () => {
  return (
    <Layout>
      <Team />
      <Mission />
      <WhyFactoring />
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
