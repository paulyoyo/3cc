import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Heading from "@ui/Heading";
import "./LatestPosts.scss";

export default function LatestPosts() {
  const data = useStaticQuery(graphql`
    query {
      allPrismicNoticia(limit: 3, sort: { data: { fecha: DESC } }) {
        edges {
          node {
            data {
              titulo {
                text
              }
              foto {
                gatsbyImageData(width: 400, height: 300)
              }
              fecha(formatString: "LL", locale: "es")
              resumen {
                text
              }
            }
            uid
          }
        }
      }
    }
  `);

  const posts = data.allPrismicNoticia.edges;

  // If no posts, don't render the section
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="latest-posts-section py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center mb-12">
          <div>
            <Heading
              title="Últimas Noticias"
              subtitle="Mantente informado con nuestras últimas novedades"
            />
          </div>
          <Link
            to="/noticias"
            className="hidden md:inline-block bg-gold text-white px-6 py-3 rounded hover:bg-gold/80 transition-colors"
          >
            Ver todas →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map(({ node }) => {
            const { data, uid } = node;
            return (
              <article
                key={uid}
                className="blog-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {data.foto?.gatsbyImageData && (
                  <Link to={`/noticias/${uid}`}>
                    <GatsbyImage
                      image={data.foto.gatsbyImageData}
                      alt={data.titulo.text}
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                )}

                <div className="p-6">
                  {data.fecha && (
                    <p className="text-gold text-sm mb-2">{data.fecha}</p>
                  )}

                  <Link to={`/noticias/${uid}`}>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-gold transition-colors line-clamp-2">
                      {data.titulo.text}
                    </h3>
                  </Link>

                  {data.resumen?.text && (
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {data.resumen.text.substring(0, 100)}
                      {data.resumen.text.length > 100 ? "..." : ""}
                    </p>
                  )}

                  <Link
                    to={`/noticias/${uid}`}
                    className="inline-block text-gold font-semibold hover:underline"
                  >
                    Leer más →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12 md:hidden">
          <Link
            to="/noticias"
            className="inline-block bg-gold text-white px-6 py-3 rounded hover:bg-gold/80 transition-colors"
          >
            Ver todas las noticias →
          </Link>
        </div>
      </div>
    </section>
  );
}
