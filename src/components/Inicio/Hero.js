import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useForm } from "react-hook-form";
import "./Hero.scss";

export default function Hero() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [focusStat1, setFocusStat1] = useState(false);
  const [focusStat2, setFocusStat2] = useState(false);
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const onSubmit = async (data) => {
    setServerState({ submitting: true, status: null });

    try {
      // TODO: Replace with actual API endpoint
      console.log("Form data:", data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setServerState({
        submitting: false,
        status: {
          ok: true,
          msg: "¡Gracias! Nos pondremos en contacto pronto.",
        },
      });

      reset();
    } catch (error) {
      setServerState({
        submitting: false,
        status: {
          ok: false,
          msg: "Hubo un error. Por favor intenta de nuevo.",
        },
      });
    }
  };

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

        <div className="hero__form-wrapper">
          <div className="hero__form-card">
            <form onSubmit={handleSubmit(onSubmit)} className="hero__form">
              <h2 className="text-[28px] lg:text-[36px] my-0">
                AUMENTE SUS VENTAS
              </h2>
              <p className="lg:text-[22px] mt-0 mb-4">
                Rápido, fácil y sin complicaciones.
              </p>

              <div className="hero__form-group">
                <input
                  type="text"
                  placeholder="Nombre"
                  className={`hero__form-input ${errors.nombre ? "error" : ""}`}
                  {...register("nombre", {
                    required: "El nombre es requerido",
                    minLength: {
                      value: 2,
                      message: "El nombre debe tener al menos 2 caracteres",
                    },
                  })}
                />
                {errors.nombre && (
                  <span className="hero__form-error">
                    {errors.nombre.message}
                  </span>
                )}
              </div>

              <div className="hero__form-group">
                <input
                  type="email"
                  placeholder="Email"
                  className={`hero__form-input ${errors.email ? "error" : ""}`}
                  {...register("email", {
                    required: "El email es requerido",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Email inválido",
                    },
                  })}
                />
                {errors.email && (
                  <span className="hero__form-error">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="hero__form-group">
                <input
                  type="tel"
                  placeholder="Teléfono"
                  className={`hero__form-input ${errors.telefono ? "error" : ""}`}
                  {...register("telefono", {
                    required: "El teléfono es requerido",
                    pattern: {
                      value: /^[0-9]{9,15}$/,
                      message: "Teléfono inválido (9-15 dígitos)",
                    },
                  })}
                />
                {errors.telefono && (
                  <span className="hero__form-error">
                    {errors.telefono.message}
                  </span>
                )}
              </div>

              <div className="hero__form-group">
                <input
                  type="text"
                  placeholder="Empresa"
                  className={`hero__form-input ${errors.empresa ? "error" : ""}`}
                  {...register("empresa", {
                    required: "El nombre de la empresa es requerido",
                    minLength: {
                      value: 2,
                      message:
                        "El nombre de la empresa debe tener al menos 2 caracteres",
                    },
                  })}
                />
                {errors.empresa && (
                  <span className="hero__form-error">
                    {errors.empresa.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="hero__form-button"
                disabled={isSubmitting || serverState.submitting}
              >
                {isSubmitting || serverState.submitting
                  ? "Enviando..."
                  : "Solicitar"}
              </button>

              {serverState.status && (
                <div
                  className={`hero__form-message ${
                    serverState.status.ok ? "success" : "error"
                  }`}
                >
                  {serverState.status.msg}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
