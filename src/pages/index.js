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
