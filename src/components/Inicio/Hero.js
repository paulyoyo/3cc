import React, { useState } from "react";

export default function Hero() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Implement form submission logic
  };

  return (
    <section>
      <div>
        <div>
          <h1>¡Cobra tus facturas por adelantado</h1>
          <p>¡Y recibe dinero en tu cuenta hoy mismo!</p>

          <div>
            <div>
              <p>+1600 millones</p>
              <span>En facturación cursada</span>
            </div>
            <div>
              <p>+4500</p>
              <span>Facturas cursadas</span>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <h2>AUMENTE SUS VENTAS</h2>
            <p>Solicita un adelanto de facturas</p>

            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="empresa"
              placeholder="Empresa"
              value={formData.empresa}
              onChange={handleChange}
              required
            />

            <button type="submit">Solicitar</button>
          </form>
        </div>
      </div>
    </section>
  );
}
