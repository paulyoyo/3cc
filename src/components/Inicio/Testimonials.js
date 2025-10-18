import React, { useState } from "react";
import Heading from "@ui/Heading";
import "./Testimonials.scss";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie urna sit amet mattis mollis. Quisque vitae magna aliquet, in erom vel velit. Nam molestie urna sit amet maximus laoreet ultricies sit ac turpis id.",
      author: "Espejo Enerprint",
      rating: 5,
    },
    // Additional testimonials can be added here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
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

        <div className="testimonial-carousel relative">
          <div className="testimonial-content rounded-2xl p-8 md:p-12 mb-8">
            <p className="text-lg md:text-xl text-white leading-relaxed mb-6 text-center">
              {testimonials[currentIndex].text}
            </p>
            <p className="text-base md:text-lg text-gold font-semibold text-center mb-4">
              {testimonials[currentIndex].author}
            </p>
          </div>

          <div className="navigation-buttons flex justify-center gap-4 mb-6">
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous testimonial"
              className="nav-button w-12 h-12 rounded-full bg-white/20 hover:bg-gold text-white text-2xl flex items-center justify-center transition-all hover:scale-110"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="nav-button w-12 h-12 rounded-full bg-white/20 hover:bg-gold text-white text-2xl flex items-center justify-center transition-all hover:scale-110"
            >
              ›
            </button>
          </div>

          <div className="pagination-dots flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={currentIndex === index}
                className={`dot w-3 h-3 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-gold w-8"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
