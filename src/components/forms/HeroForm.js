import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { navigate } from "gatsby";
import { gsap } from "gsap";
import axios from "axios";
import PropTypes from "prop-types";

export default function HeroForm({ calculatedAmount = null }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });

  const formElementsRef = useRef([]);

  // GSAP cascade animation
  useEffect(() => {
    const elements = formElementsRef.current.filter(Boolean);

    if (elements.length > 0) {
      // Set initial state
      gsap.set(elements, {
        opacity: 0,
        y: 30,
        scale: 0.95
      });

      // Cascade animation
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.2)",
        clearProps: "all"
      });
    }
  }, []);

  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      reset();
      // Redirect to thank you page after successful submission
      setTimeout(() => {
        navigate("/gracias");
      }, 500);
    }
  };

  const onSubmit = async (data) => {
    setServerState({ submitting: true, status: null });

    // Create FormData object
    const formData = new FormData();

    // Add API key (hidden field)
    formData.append("apiKey", "sf_glk75h5ajf1jlnin97niddi7");

    // Add honeypot field
    formData.append("_gotcha", "");

    // Add form fields
    formData.append("nombre", data.nombre);
    formData.append("email", data.email);
    formData.append("telefono", data.telefono);
    formData.append("empresa", data.empresa);

    // Add calculated amount if present
    if (calculatedAmount) {
      formData.append("montoCalculado", calculatedAmount);
    }

    axios({
      method: "post",
      url: "https://api.staticforms.xyz/submit",
      data: formData,
    })
      .then((r) => {
        handleServerResponse(
          true,
          "¡Gracias! Tu mensaje fue enviado satisfactoriamente."
        );
      })
      .catch((r) => {
        handleServerResponse(
          false,
          r.response?.data?.error || "Hubo un error. Por favor intenta de nuevo."
        );
      });
  };

HeroForm.propTypes = {
  calculatedAmount: PropTypes.number,
};

  return (
    <div className="hero__form-wrapper">
      <div className="hero__form-card">
        <form onSubmit={handleSubmit(onSubmit)} className="hero__form">
          <div ref={(el) => (formElementsRef.current[0] = el)}>
            <h2 className="title-animation text-[28px] lg:text-[36px] my-0">
              Aumente sus ventas
            </h2>
            <p className="lg:text-[22px] mt-0 mb-4">
              Rápido, fácil y sin complicaciones.
            </p>
          </div>

          {calculatedAmount && (
            <div
              className="hero__form-group"
              ref={(el) => (formElementsRef.current[1] = el)}
            >
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Monto calculado
              </label>
              <input
                type="text"
                value={`S/ ${calculatedAmount.toLocaleString("es-PE", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`}
                disabled
                className="hero__form-input hero__form-input--disabled"
                readOnly
              />
            </div>
          )}

          <div
            className="hero__form-group"
            ref={(el) => (formElementsRef.current[calculatedAmount ? 2 : 1] = el)}
          >
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

          <div
            className="hero__form-group"
            ref={(el) => (formElementsRef.current[calculatedAmount ? 3 : 2] = el)}
          >
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

          <div
            className="hero__form-group"
            ref={(el) => (formElementsRef.current[calculatedAmount ? 4 : 3] = el)}
          >
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

          <div
            className="hero__form-group"
            ref={(el) => (formElementsRef.current[calculatedAmount ? 5 : 4] = el)}
          >
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
            ref={(el) => (formElementsRef.current[calculatedAmount ? 6 : 5] = el)}
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
  );
}
