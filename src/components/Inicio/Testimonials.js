import React from "react";
import Heading from "@ui/Heading";
import Swiper, { SwiperSlide } from "@ui/Swiper";
import "./Testimonials.scss";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Excelente servicio de factoring. Nos ayudaron a mejorar nuestro flujo de caja de manera rápida y eficiente. El equipo de 3C Capital es muy profesional y comprometido.",
      author: "María González",
      company: "Distribuidora Lima SAC",
    },
    {
      id: 2,
      text: "Gracias a 3C Capital pudimos acceder a capital de trabajo inmediato. Su proceso es ágil y transparente. Altamente recomendados para empresas que necesitan liquidez.",
      author: "Carlos Rodríguez",
      company: "Textiles del Norte EIRL",
    },
    {
      id: 3,
      text: "La asesoría financiera que recibimos fue fundamental para el crecimiento de nuestra empresa. 3C Capital entiende las necesidades del mercado peruano.",
      author: "Ana Martínez",
      company: "Comercial San Miguel SRL",
    },
    {
      id: 4,
      text: "Llevamos trabajando con 3C Capital más de 2 años. Su servicio de factoring nos ha permitido mantener operaciones constantes sin preocuparnos por la cobranza.",
      author: "Jorge Sánchez",
      company: "Importaciones del Sur SAC",
    },
  ];

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: true,
    autoplayDelay: 5000,
    navigation: true,
    pagination: true,
  };

  return (
    <section className="testimonials-section bg-gray-600">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="quote-mark-wrapper text-center mt-8 flex justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52px"
            height="74px"
            className="opacity-30"
          >
            <path
              fillRule="evenodd"
              fill="rgb(255, 255, 255)"
              d="M25.191,25.332 C25.360,22.116 24.238,19.014 22.034,16.598 C19.834,14.187 16.804,12.729 13.501,12.492 L13.405,12.484 C12.247,12.390 11.239,13.230 11.150,14.351 C11.061,15.472 11.926,16.453 13.083,16.543 L13.199,16.552 C17.729,16.875 21.227,20.715 20.996,25.112 C20.761,29.596 16.806,33.047 12.180,32.804 C7.554,32.561 3.982,28.717 4.217,24.233 C4.510,18.633 6.155,13.536 9.106,9.087 C11.312,5.761 13.467,4.056 13.507,4.024 C14.410,3.326 14.559,2.049 13.838,1.169 C13.447,0.692 12.881,0.429 12.300,0.399 C11.807,0.373 11.303,0.514 10.887,0.834 C10.781,0.916 8.262,2.873 5.682,6.711 C3.330,10.210 0.439,16.053 0.022,24.013 C-0.331,30.739 5.028,36.506 11.967,36.870 C18.906,37.234 24.839,32.057 25.191,25.332 Z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="52px"
            height="74px"
            className="opacity-30"
          >
            <path
              fillRule="evenodd"
              fill="rgb(255, 255, 255)"
              d="M25.191,25.332 C25.360,22.116 24.238,19.014 22.034,16.598 C19.834,14.187 16.804,12.729 13.501,12.492 L13.405,12.484 C12.247,12.390 11.239,13.230 11.150,14.351 C11.061,15.472 11.926,16.453 13.083,16.543 L13.199,16.552 C17.729,16.875 21.227,20.715 20.996,25.112 C20.761,29.596 16.806,33.047 12.180,32.804 C7.554,32.561 3.982,28.717 4.217,24.233 C4.510,18.633 6.155,13.536 9.106,9.087 C11.312,5.761 13.467,4.056 13.507,4.024 C14.410,3.326 14.559,2.049 13.838,1.169 C13.447,0.692 12.881,0.429 12.300,0.399 C11.807,0.373 11.303,0.514 10.887,0.834 C10.781,0.916 8.262,2.873 5.682,6.711 C3.330,10.210 0.439,16.053 0.022,24.013 C-0.331,30.739 5.028,36.506 11.967,36.870 C18.906,37.234 24.839,32.057 25.191,25.332 Z"
            />
          </svg>
        </div>

        <Heading title="Lo que dicen nuestros clientes" centered white />

        <div className="testimonial-carousel">
          <Swiper options={swiperOptions} className="testimonials-swiper">
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-content rounded-2xl p-8 md:p-12">
                  <p className="text-lg md:text-xl text-white leading-relaxed mb-6 text-center">
                    {testimonial.text}
                  </p>
                  <p className="text-base md:text-lg text-gold font-semibold text-center mb-2">
                    {testimonial.author}
                  </p>
                  <p className="text-sm md:text-base text-white/70 text-center">
                    {testimonial.company}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
