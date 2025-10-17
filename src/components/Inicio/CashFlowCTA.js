import React from "react";
import "./CashFlowCTA.scss";

export default function CashFlowCTA() {
  const handleContactClick = () => {
    // TODO: Implement navigation to contact form or modal
    console.log("Contact button clicked");
  };

  return (
    <section className="cashflow-cta-section py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          ¿Listo para mejorar tu flujo de caja?
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Contáctanos hoy y recibe una propuesta adaptada a tu empresa.
        </p>

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
