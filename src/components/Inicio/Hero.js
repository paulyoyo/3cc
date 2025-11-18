import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import HeroForm from "@components/forms/HeroForm";
import "./Hero.scss";

export default function Hero() {
  const data = useStaticQuery(graphql`
    query {
      prismicHero {
        data {
          stat1
          stat_2
          stat_label_1 {
            text
          }
          stat_label_2 {
            text
          }
          subtitle {
            text
          }
          title {
            text
          }
        }
      }
    }
  `);

  const heroData = data.prismicHero?.data;

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
    <section id="hero" className="hero">
      <div className="hero__container container mx-auto px-4 max-w-6xl">
        <div className="hero__content">
          <h1 className="hero__title">
            {heroData?.title?.text || "¡Cobra tus facturas por adelantado!"}
          </h1>
          <p className="hero__subtitle">
            {heroData?.subtitle?.text ||
              "¡Y recibe dinero en tu cuenta en 24 horas!"}
          </p>
          {/*
          {heroData?.stat1 && heroData?.stat_2 && (
            <div className="hero__stats gap-4">
              <div className="hero__stat">
                <h3 className="hero__stat-number">
                  +
                  <CountUp
                    start={focusStat1 ? 0 : null}
                    end={heroData.stat1}
                    duration={3}
                  >
                    {({ countUpRef }) => (
                      <span>
                        <span ref={countUpRef} />
                        <VisibilitySensor
                          onChange={(isVisible) =>
                            visibilityChangeHandler1(isVisible)
                          }
                        >
                          <span className="sr-only">{heroData.stat1}</span>
                        </VisibilitySensor>
                      </span>
                    )}
                  </CountUp>
                </h3>
                <p className="hero__stat-label">
                  {heroData?.stat_label_1?.text || "En financiamiento otorgado"}
                </p>
              </div>
              <div className="hero__stat">
                <h3 className="hero__stat-number">
                  +
                  <CountUp
                    start={focusStat2 ? 0 : null}
                    end={heroData.stat_2}
                    duration={3}
                  >
                    {({ countUpRef }) => (
                      <span>
                        <span ref={countUpRef} />
                        <VisibilitySensor
                          onChange={(isVisible) =>
                            visibilityChangeHandler2(isVisible)
                          }
                        >
                          <span className="sr-only">{heroData.stat_2}</span>
                        </VisibilitySensor>
                      </span>
                    )}
                  </CountUp>
                </h3>
                <p className="hero__stat-label">
                  {heroData?.stat_label_2?.text || "Empresarios financiados"}
                </p>
              </div>
            </div>
          )}
          */}
        </div>

        <HeroForm />
      </div>
    </section>
  );
}
