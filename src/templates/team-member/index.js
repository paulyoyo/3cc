import React from "react";
import { graphql, Link } from "gatsby";
import Heading from "@ui/Heading";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "@layout/Layout";
import "./team-member.scss";

export default function TeamMemberTemplate({ data, pageContext }) {
  const { nombre, puesto, contenido, email, linkedin, foto } =
    data.prismicMiembro.data;
  const { next, previous } = pageContext;

  return (
    <Layout>
      <div className="team-member-template">
        {/* Hero Section */}
        <section className="team-hero bg-black py-16 lg:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <Heading
              title="Nuestro Equipo"
              subtitle="Comité de Estrategia e Inversiones"
              white
            />{" "}
          </div>
        </section>

        {/* Team Details */}
        <section className="team-details py-16 lg:py-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="main-card bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="img-wrapper">
                  <GatsbyImage
                    image={foto.gatsbyImageData}
                    alt={nombre.text}
                    className="w-full h-full object-cover min-h-[400px] lg:min-h-[600px]"
                  />
                </div>

                {/* Content */}
                <div className="content-wrapper p-8 lg:p-12 flex flex-col justify-center">
                  <div className="name text-3xl lg:text-4xl font-bold text-[#2a2a2a] mb-2">
                    {nombre.text}
                  </div>
                  <div className="position text-gold text-lg lg:text-xl uppercase mb-8">
                    {puesto.text}
                  </div>

                  {contenido && contenido.html && (
                    <>
                      <h6 className="text-lg font-bold text-[#2a2a2a] uppercase mb-4">
                        Sobre Mí
                      </h6>
                      <div
                        className="bio-content mb-8 text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: contenido.html }}
                      />
                    </>
                  )}

                  {/* Contact & Social */}
                  <h6 className="text-lg font-bold text-[#2a2a2a] uppercase mb-4">
                    Contacto
                  </h6>
                  <ul className="social-contact flex gap-4 pt-4">
                    {email && email.text && (
                      <li>
                        <a
                          href={`mailto:${email.text}`}
                          className="w-12 h-12 rounded-full bg-gold hover:bg-gold-dark text-white flex items-center justify-center transition-colors duration-300"
                          aria-label="Email"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </a>
                      </li>
                    )}
                    {linkedin && linkedin.url && (
                      <li>
                        <a
                          href={linkedin.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-gold hover:bg-gold-dark text-white flex items-center justify-center transition-colors duration-300"
                          aria-label="LinkedIn"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 56.693 56.693"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g>
                              <path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z" />
                              <path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12 c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88 C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078 c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179 c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z" />
                            </g>
                          </svg>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="pager flex justify-between mt-12">
              <div>
                {previous && (
                  <Link
                    to={`/equipo/${previous.uid}`}
                    className="nav-btn flex items-center gap-3 text-gray-700 hover:text-gold transition-colors duration-300"
                  >
                    <i className="fa fa-arrow-left text-2xl"></i>
                    <div className="hidden md:block">
                      <div className="text-sm text-gray-500 uppercase">
                        Anterior
                      </div>
                      <div className="font-bold">
                        {previous.data.nombre.text}
                      </div>
                      <div className="text-sm text-gray-500">
                        {previous.data.puesto.text}
                      </div>
                    </div>
                  </Link>
                )}
              </div>

              <div>
                {next && (
                  <Link
                    to={`/equipo/${next.uid}`}
                    className="nav-btn flex items-center gap-3 text-gray-700 hover:text-gold transition-colors duration-300"
                  >
                    <div className="hidden md:block text-right">
                      <div className="text-sm text-gray-500 uppercase">
                        Siguiente
                      </div>
                      <div className="font-bold">{next.data.nombre.text}</div>
                      <div className="text-sm text-gray-500">
                        {next.data.puesto.text}
                      </div>
                    </div>
                    <i className="fa fa-arrow-right text-2xl"></i>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export const Head = ({ data }) => {
  const { nombre, puesto } = data.prismicMiembro.data;
  return (
    <>
      <title>
        {nombre.text} - {puesto.text} | 3C Capital
      </title>
      <meta
        name="description"
        content={`Conoce a ${nombre.text}, ${puesto.text} en 3C Capital - Expertos en Factoring y Oportunidades de Rentabilidad`}
      />
    </>
  );
};

export const query = graphql`
  query TeamMemberBySlug($slug: String!) {
    prismicMiembro(uid: { eq: $slug }) {
      uid
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
      }
    }
  }
`;
