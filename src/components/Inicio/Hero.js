import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import HeroForm from "../forms/HeroForm";
import "./Hero.scss";

export default function Hero() {
  const [focusStat1, setFocusStat1] = useState(false);
  const [focusStat2, setFocusStat2] = useState(false);

  const visibilityChangeHandler1 = (isVisible) => {
    if (isVisible && !focusStat1) {
      setFocusStat1(true);
    }
  };

  const visibilityChangeHandler2 = (isVisible) => {
    if (isVisible && !focusStat2) {
      setFocusStat2(true);
    }
  };

  return (
    <section className="hero">
      <div className="hero__container container mx-auto px-4 max-w-6xl">
        <div className="hero__content">
          <h1 className="hero__title">¡Cobra tus facturas por adelantado!</h1>
          <p className="hero__subtitle">
            ¡Y recibe dinero en tu cuenta hoy mismo!
          </p>

          <div className="hero__stats">
            <div className="hero__stat">
              <h3 className="hero__stat-number">
                +
                <CountUp start={focusStat1 ? 0 : null} end={1600} duration={3}>
                  {({ countUpRef }) => (
                    <span>
                      <span ref={countUpRef} />
                      <VisibilitySensor
                        onChange={(isVisible) =>
                          visibilityChangeHandler1(isVisible)
                        }
                      >
                        <span className="sr-only">1600</span>
                      </VisibilitySensor>
                    </span>
                  )}
                </CountUp>{" "}
                millones
              </h3>
              <p className="hero__stat-label">En financiamiento otorgado</p>
            </div>
            <div className="hero__stat">
              <h3 className="hero__stat-number">
                +
                <CountUp start={focusStat2 ? 0 : null} end={4500} duration={3}>
                  {({ countUpRef }) => (
                    <span>
                      <span ref={countUpRef} />
                      <VisibilitySensor
                        onChange={(isVisible) =>
                          visibilityChangeHandler2(isVisible)
                        }
                      >
                        <span className="sr-only">4500</span>
                      </VisibilitySensor>
                    </span>
                  )}
                </CountUp>
              </h3>
              <p className="hero__stat-label">Empresarios financiados</p>
            </div>
          </div>
        </div>

        <HeroForm />
      </div>
    </section>
  );
}
