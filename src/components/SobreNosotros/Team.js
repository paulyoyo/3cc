import React, { useState, useEffect, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "@ui/Heading";
import "./Team.scss";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Team() {
  const data = useStaticQuery(graphql`
    query {
      allPrismicMiembro(sort: { data: { orden: ASC } }) {
        edges {
          node {
            data {
              contenido {
                html
              }
              email {
                text
              }
              foto {
                gatsbyImageData
              }
              linkedin {
                url
              }
              nombre {
                text
              }
              puesto {
                text
              }
              resumen {
                text
              }
            }
          }
        }
      }
    }
  `);

  const teamData = data.allPrismicMiembro.edges;
  const [selectedMember, setSelectedMember] = useState(null);
  const teamCardsRef = useRef([]);

  useEffect(() => {
    const cards = teamCardsRef.current.filter(Boolean);

    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards[0]?.parentNode,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const openModal = (member) => {
    setSelectedMember(member);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section className="team-section">
      <div className="container mx-auto px-4 max-w-6xl">
        <Heading title="Nuestro Equipo" />

        <div className="team-intro">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Comité de Estrategia e Inversiones
          </h2>
          <p className="text-lg font-medium text-gray-700 mb-3">
            25 años siendo un equipo líder y experimentado en Banca y Finanzas
          </p>
          <p className="text-gray-600">
            Las inversiones y financiamientos de 3C Capital son liderados por
            tres profesionales expertos que combinan un profundo conocimiento
            del mercado, una historia de permanente sobrecumplimiento de
            objetivos, y elevadas capacidades analíticas. A lo largo de sus
            carreras han formado un mismo equipo, atendiendo financiamientos
            Corporativos y de Grandes Empresas.
          </p>
        </div>

        <div className="team-grid">
          {teamData.map(
            (
              {
                node: {
                  data: {
                    contenido,
                    email,
                    foto,
                    linkedin,
                    nombre,
                    puesto,
                    resumen,
                  },
                },
              },
              index
            ) => (
              <div
                key={index}
                ref={(el) => (teamCardsRef.current[index] = el)}
                className="team-card"
              >
                <div className="team-card__image">
                  <GatsbyImage
                    image={foto.gatsbyImageData}
                    alt={nombre.text}
                    className="team-card__img"
                  />
                  <div className="team-card__overlay" />
                </div>

                <div className="team-card__content">
                  <h3 className="team-card__name">{nombre.text}</h3>
                  <p className="team-card__position">{puesto.text}</p>
                  <p className="team-card__summary">{resumen.text}</p>

                  <button
                    onClick={() =>
                      openModal({
                        contenido,
                        email,
                        foto,
                        linkedin,
                        nombre,
                        puesto,
                      })
                    }
                    className="team-card__button"
                  >
                    Ver más
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {selectedMember && (
        <div className="team-modal" onClick={closeModal}>
          <div
            className="team-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="team-modal__close" onClick={closeModal}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="team-modal__layout">
              <div className="team-modal__sidebar">
                <GatsbyImage
                  image={selectedMember.foto.gatsbyImageData}
                  alt={selectedMember.nombre.text}
                  className="team-modal__image"
                />

                <div className="team-modal__contact">
                  {selectedMember.email.text && (
                    <a
                      href={`mailto:${selectedMember.email.text}`}
                      className="team-modal__contact-item"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {selectedMember.email.text}
                    </a>
                  )}
                  {selectedMember.linkedin.url && (
                    <a
                      href={selectedMember.linkedin.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-modal__contact-item"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>

              <div className="team-modal__body">
                <h2 className="team-modal__title">
                  {selectedMember.nombre.text}
                </h2>
                <p className="team-modal__position">
                  {selectedMember.puesto.text}
                </p>
                <div
                  className="team-modal__bio"
                  dangerouslySetInnerHTML={{
                    __html: selectedMember.contenido.html,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
