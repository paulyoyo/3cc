import React, { useState } from "react";

export default function Simulator() {
  const [invoiceAmount, setInvoiceAmount] = useState(10000);
  const [paymentDays, setPaymentDays] = useState(30);
  const [selectedDays, setSelectedDays] = useState([30, 60, 90]);

  const calculateAdvance = () => {
    // Simple calculation: 2% discount per 30 days
    const discountRate = 0.02;
    const periods = paymentDays / 30;
    const totalDiscount = invoiceAmount * discountRate * periods;
    return invoiceAmount - totalDiscount;
  };

  const handleDaySelection = (days) => {
    setPaymentDays(days);
  };

  return (
    <section>
      <div>
        <h2>Simulador</h2>

        <div>
          <div>
            <label htmlFor="invoiceAmount">Monto de factura</label>
            <input
              type="number"
              id="invoiceAmount"
              value={invoiceAmount}
              onChange={(e) => setInvoiceAmount(Number(e.target.value))}
              min="0"
              step="1000"
            />
            <span>S/ {invoiceAmount.toLocaleString()}</span>
          </div>

          <div>
            <label>Plazo de días</label>
            <div>
              {[30, 60, 90].map((days) => (
                <button
                  key={days}
                  type="button"
                  onClick={() => handleDaySelection(days)}
                  aria-pressed={paymentDays === days}
                >
                  {days}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div></div>
          </div>
        </div>

        <div>
          <div>S/ {calculateAdvance().toLocaleString("es-PE", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}</div>
          <button type="button">Solicitar</button>
        </div>
      </div>
    </section>
  );
}
