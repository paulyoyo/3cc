import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Heading from "@ui/Heading";
import Swiper, { SwiperSlide } from "@ui/Swiper";
import "./Team.scss";

export default function Team() {
  const data = useStaticQuery(graphql`
    query {
      allPrismicMiembro(sort: { data: { orden: ASC } }) {
        edges {
          node {
            data {
              foto {
                gatsbyImageData
              }
              nombre {
                text
              }
              puesto {
                text
              }
            }
            uid
          }
        }
      }
    }
  `);

  const teamData = data.allPrismicMiembro.edges;

  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    autoplayDelay: 5000,
    navigation: false,
    pagination: true,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  };

  return (
    <section className="team-section relative !p-0">
      {/* Dark background section - only for top part */}
      <div className="bg-black h-[480px] lg:h-[420px] xl:h-[440px]">
        <div className="container mx-auto px-4 max-w-6xl pt-8 relative z-10">
          <Heading
            title="Nuestro Equipo"
            subtitle="Comité de Estrategia e Inversiones"
            white
          />
        </div>
      </div>

      {/* White background section */}
      <div className="bg-white pb-16">
        {/* Swiper positioned absolutely to overlap dark section */}
        <div className="container mx-auto px-4 max-w-6xl relative">
          <div className="absolute left-0 right-0 -top-[220px] z-20 px-4">
            <div className="px-4 md:px-8">
              <Swiper options={swiperOptions} className="team-swiper pb-12">
                {teamData.map(
                  (
                    {
                      node: {
                        data: { foto, nombre, puesto },
                        uid,
                      },
                    },
                    index,
                  ) => (
                    <SwiperSlide key={index}>
                      <Link
                        to={`/equipo/${uid}`}
                        className="block m-[15px] transition-all duration-300 ease-in-out rounded-[15px] overflow-hidden hover:-translate-y-[5px]"
                      >
                        <div className="bg-white rounded-t-[10px] p-10 flex flex-col justify-center">
                          <div className="text-black/40 text-base mb-2 uppercase pr-6 lg:pr-[14px] xl:pr-12">
                            {puesto.text}
                          </div>
                          <div className="text-2xl font-bold text-[#2a2a2a] min-h-[68px] pt-1">
                            {nombre.text}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-b-[10px]">
                          <GatsbyImage
                            image={foto.gatsbyImageData}
                            alt={nombre.text}
                            className="w-full rounded-b-[10px] transition-transform duration-500 ease-in-out hover:scale-105"
                          />
                        </div>
                      </Link>
                    </SwiperSlide>
                  ),
                )}
              </Swiper>
            </div>
          </div>
          {/* Spacer to push content down */}
          <div className="h-[300px]"></div>
        </div>
      </div>
    </section>
  );
}
