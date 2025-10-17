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
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="testimonials-section bg-gray-600">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="quote-mark-wrapper text-center mb-8">
          <span className="quote-mark text-8xl md:text-9xl font-serif text-white/30">
            66
          </span>
        </div>

        <Heading title="Lo que dicen nuestros clientes" centered white />

        <div className="testimonial-carousel relative">
          <div className="testimonial-content bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
            <p className="text-lg md:text-xl text-white leading-relaxed mb-6 text-center">
              {testimonials[currentIndex].text}
            </p>
            <p className="text-base md:text-lg text-gold font-semibold text-center mb-4">
              {testimonials[currentIndex].author}
            </p>

            <div className="star-rating flex justify-center gap-1">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={`text-2xl ${
                    index < testimonials[currentIndex].rating
                      ? "text-gold"
                      : "text-gray-400"
                  }`}
                  data-filled={index < testimonials[currentIndex].rating}
                  aria-label={`Star ${index + 1}`}
                >
                  ★
                </span>
              ))}
            </div>
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
