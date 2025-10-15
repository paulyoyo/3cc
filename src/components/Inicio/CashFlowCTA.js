import React from "react";

export default function CashFlowCTA() {
  const handleContactClick = () => {
    // TODO: Implement navigation to contact form or modal
    console.log("Contact button clicked");
  };

  return (
    <section>
      <div>
        <h2>¿Listo para mejorar tu flujo de caja?</h2>
        <p>Contáctanos hoy y recibe una propuesta adaptada a tu empresa.</p>

        <button type="button" onClick={handleContactClick}>
          Contáctanos
        </button>
      </div>
    </section>
  );
}
