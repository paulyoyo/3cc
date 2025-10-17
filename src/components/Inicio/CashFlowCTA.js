import React from "react";
import Heading from "@ui/Heading";
import "./CashFlowCTA.scss";

export default function CashFlowCTA() {
  const handleContactClick = () => {
    // TODO: Implement navigation to contact form or modal
    console.log("Contact button clicked");
  };

  return (
    <section className="cashflow-cta-section bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <Heading
          title="¿Listo para mejorar tu flujo de caja?"
          subtitle="Contáctanos hoy y recibe una propuesta adaptada a tu empresa."
          centered
        />

        <button
          type="button"
          onClick={handleContactClick}
          className="cta-button bg-gold hover:bg-gold-dark text-white font-bold text-lg py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl"
        >
          Contáctanos
        </button>
      </div>
    </section>
  );
}
