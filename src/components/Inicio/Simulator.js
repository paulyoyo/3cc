import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Heading from "@ui/Heading";
import HeroForm from "@components/forms/HeroForm";
import "./Simulator.scss";

export default function Simulator() {
  const [invoiceAmount, setInvoiceAmount] = useState(10000);
  const [paymentDays, setPaymentDays] = useState(30);
  const [selectedDays, setSelectedDays] = useState([30, 60, 90]);
  const [showForm, setShowForm] = useState(false);
  const cardRef = useRef(null);
  const resultContentRef = useRef(null);
  const formContentRef = useRef(null);

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

  const handleSolicitarClick = () => {
    setShowForm(true);
  };

  // GSAP animation for card height transition
  useEffect(() => {
    if (!cardRef.current || !resultContentRef.current || !formContentRef.current) return;

    const card = cardRef.current;
    const resultContent = resultContentRef.current;
    const formContent = formContentRef.current;

    if (showForm) {
      // Animate from result to form
      // First show form temporarily to get its height
      gsap.set(formContent, { display: "block", opacity: 0, visibility: "hidden" });
      const formHeight = formContent.scrollHeight;
      gsap.set(formContent, { display: "none", visibility: "visible" });

      gsap.to(resultContent, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(resultContent, { display: "none" });
          gsap.set(formContent, { display: "block", opacity: 0, y: 20 });
        },
      });

      gsap.to(card, {
        height: formHeight,
        duration: 0.5,
        ease: "power2.inOut",
        delay: 0.3,
        onComplete: () => {
          gsap.to(formContent, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.set(card, { height: "auto" });
        },
      });
    } else {
      // Animate from form to result
      // First show result temporarily to get its height
      gsap.set(resultContent, { display: "block", opacity: 0, visibility: "hidden" });
      const resultHeight = resultContent.scrollHeight;
      gsap.set(resultContent, { display: "none", visibility: "visible" });

      gsap.to(formContent, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(formContent, { display: "none" });
          gsap.set(resultContent, { display: "block", opacity: 0, y: -20 });
        },
      });

      gsap.to(card, {
        height: resultHeight,
        duration: 0.5,
        ease: "power2.inOut",
        delay: 0.3,
        onComplete: () => {
          gsap.to(resultContent, {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.set(card, { height: "auto" });
        },
      });
    }
  }, [showForm]);

  return (
    <section className="simulator-section bg-gray-600">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-8 appear-down">
            <Heading title="Simulador" white />

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
                    accentColor: "#fb9b0d",
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
                    className={`day-button flex-1 px-6 py-3 rounded-lg font-semibold transition-all hover:-translate-y-0.5 ${
                      paymentDays === days
                        ? "bg-vivid-orange text-white shadow-[0_8px_20px_rgba(251,155,13,0.4)] -translate-y-0.5"
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

            {showForm && (
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="back-button mt-6 px-5 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center gap-2 text-white hover:bg-white/15 hover:border-desaturated-dark-orange/50 hover:-translate-x-1 hover:shadow-[0_4px_12px_rgba(135,116,88,0.2)] active:-translate-x-0.5 transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span className="font-medium">Volver al resultado</span>
              </button>
            )}
          </div>

          <div
            ref={cardRef}
            className="result-card appear-down bg-white rounded-2xl p-8 shadow-xl overflow-hidden"
          >
            <div ref={resultContentRef} className="result-content text-center">
              <p className="text-lg md:text-xl text-gray-600 mb-4">
                Recibe hoy
              </p>
              <div className="result-amount text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-br from-desaturated-dark-orange to-dark-grayish-orange bg-clip-text text-transparent">
                S/{" "}
                {calculateAdvance().toLocaleString("es-PE", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
              <button
                type="button"
                onClick={handleSolicitarClick}
                className="btn w-full"
              >
                Solicitar
              </button>
            </div>

            <div
              ref={formContentRef}
              className="form-content"
              style={{ display: "none" }}
            >
              <HeroForm calculatedAmount={calculateAdvance()} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
