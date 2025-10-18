import React, { useState } from "react";
import Heading from "@ui/Heading";
import "./Simulator.scss";

export default function Simulator() {
  const [invoiceAmount, setInvoiceAmount] = useState(10000);
  const [paymentDays, setPaymentDays] = useState(30);
  const [selectedDays, setSelectedDays] = useState([30, 60, 90]);

  // Interest rate from 3ccapital (can be made dynamic later via Prismic)
  const interestRate = 2.5; // 2.5% monthly rate

  const calculateAdvance = () => {
    const P = invoiceAmount;
    const t = paymentDays;
    const r = interestRate / 100; // Convert percentage to decimal

    // Calculate interest: P * ((1 + r)^(t/30) - 1)
    const interest = P * (Math.pow(1 + r, t / 30) - 1);

    // Calculate operating costs: 1.18 * max(P * 0.009, 100)
    // 0.9% of amount with minimum of 100 soles, plus 18% tax
    const operatingCosts = 1.18 * Math.max(P * 0.009, 100);

    // Total to receive: Principal - Interest - Operating Costs
    const totalToReceive = P - interest - operatingCosts;

    return totalToReceive;
  };

  const handleDaySelection = (days) => {
    setPaymentDays(days);
  };

  return (
    <section className="simulator-section bg-gray-600">
      <div className="container mx-auto px-4 max-w-6xl">
        <Heading title="Simulador" white />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-8">
            <div className="input-group">
              <label
                htmlFor="invoiceAmount"
                className="block text-white text-lg mb-3"
              >
                Monto de factura
              </label>
              <div className="flex gap-4 items-center mb-2">
                <input
                  type="range"
                  id="invoiceAmountSlider"
                  value={invoiceAmount}
                  onChange={(e) => setInvoiceAmount(Number(e.target.value))}
                  min="1000"
                  max="100000"
                  step="1000"
                  className="flex-1"
                  style={{
                    accentColor: "#FB9B0D",
                  }}
                />
                <input
                  type="number"
                  id="invoiceAmount"
                  value={invoiceAmount}
                  onChange={(e) => setInvoiceAmount(Number(e.target.value))}
                  min="1000"
                  max="100000"
                  step="1000"
                  className="w-32 px-4 py-3 rounded-lg border-2 border-gray-400 bg-white text-gray-900 text-lg focus:outline-none focus:border-vivid-orange transition-colors"
                />
              </div>
            </div>

            <div className="days-selector">
              <label className="block text-white text-lg mb-3">
                Plazo de días
              </label>
              <div className="flex gap-4">
                {[30, 60, 90].map((days) => (
                  <button
                    key={days}
                    type="button"
                    onClick={() => handleDaySelection(days)}
                    aria-pressed={paymentDays === days}
                    className={`day-button flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
                      paymentDays === days
                        ? "bg-vivid-orange text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {days}
                  </button>
                ))}
              </div>
            </div>

            <div className="progress-bar-container">
              <div className="h-2 bg-gray-500 rounded-full overflow-hidden">
                <div
                  className="h-full bg-vivid-orange transition-all duration-300"
                  style={{ width: `${(paymentDays / 90) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="result-card bg-white rounded-2xl p-8 text-center shadow-xl">
            <p className="text-lg md:text-xl text-gray-600 mb-4">Recibe hoy</p>
            <div className="result-amount text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              S/{" "}
              {calculateAdvance().toLocaleString("es-PE", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </div>
            <button
              type="button"
              className="cta-button w-full bg-gold hover:bg-gold-dark text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Solicitar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
