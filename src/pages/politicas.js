import React from "react";
import Layout from "../components/Layout/Layout";

const PoliticasPrivacidad = () => {
  return (
    <Layout>
      <section className="relative md:py-24 py-16 bg-white">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>
        <p>
          El presente escrito describe las políticas, términos y condiciones
          generales (los “Términos y Condiciones Generales”) aplicables al uso
          de la página web de Cristal Clear Capital (en adelante 3C Capital), y
          sus empresas relacionadas.
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          Información General y términos relevantes
        </h2>
        <p>
          Cristal Clear Capital SAC (Bajo su razón comercial 3C Capital), es una
          Empresa de Factoring constituida en la República del Perú, con el RUC
          20611879149, con domicilio en Av Roosevelt 6021 Oficina 704 –
          Miraflores, Lima – Perú.
        </p>
        <p>
          Usuarios: todas aquellas personas naturales o jurídicas que
          debidamente facultadas para ello, ingresen a la página web e ingresen
          sus datos a través de formularios.
        </p>

        <h2 className="text-2xl font-semibold mt-6">
          Obtención de la información
        </h2>
        <p>
          Para navegar y hacer uso de la Plataforma, un Usuario no requiere
          facilitar información personal. Sin embargo, la Plataforma incorpora
          un formulario de registro voluntario que solicita al Usuario datos
          personales que permiten identificarlo, contactarlo y localizarlo, la
          información solicitada es la siguiente:
        </p>
        <ul className="list-disc ml-6">
          <li>Nombres completos</li>
          <li>Apellidos completos</li>
          <li>Correo electrónico</li>
          <li>Número de documento de identidad</li>
          <li>Teléfono celular</li>
          <li>RUC de la empresa cedente</li>
          <li>RUC de la empresa adquiriente</li>
          <li>Datos generales/referenciales de la factura a cotizar</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">
          Tratamiento de la información recopilada
        </h2>
        <p>
          Los datos personales de los Usuarios de la Plataforma son tratados con
          las siguientes finalidades:
        </p>
        <ul className="list-disc ml-6">
          <li>
            Atender y procesar solicitudes de registro de Usuarios en la
            Plataforma.
          </li>
          <li>
            Evaluación crediticia para determinar el otorgamiento del
            financiamiento solicitado.
          </li>
          <li>
            Realizar estudios internos sobre los intereses y hábitos de conducta
            de los Usuarios.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">
          Modificaciones de la Política de Privacidad
        </h2>
        <p>
          3C Capital se reserva expresamente el derecho a modificar, actualizar
          o completar en cualquier momento la presente Política de Privacidad.
        </p>
        <p>
          Cualquier modificación, actualización o ampliación producida en la
          presente Política será inmediatamente publicada en la Plataforma, por
          lo que se recomienda al Usuario revisarla periódicamente.
        </p>
        </div>
      </section>
    </Layout>
  );
};

export default PoliticasPrivacidad;
