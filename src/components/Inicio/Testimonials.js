import React, { useState } from "react";

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
    <section>
      <div>
        <div>
          <span>66</span>
        </div>

        <h2>Lo que dicen nuestros clientes</h2>

        <div>
          <div>
            <p>{testimonials[currentIndex].text}</p>
            <p>{testimonials[currentIndex].author}</p>

            <div>
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  data-filled={index < testimonials[currentIndex].rating}
                  aria-label={`Star ${index + 1}`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous testimonial"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>

          <div>
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={currentIndex === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
