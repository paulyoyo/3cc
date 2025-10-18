import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout/Layout";
import Heading from "@ui/Heading";
import "./blog-list.scss";

export default function BlogListTemplate({ data, pageContext }) {
  const posts = data.allPrismicNoticia.edges;
  const { currentPage, numberOfPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numberOfPages;
  const prevPage =
    currentPage - 1 === 1 ? "/noticias" : `/noticias/pagina/${currentPage - 1}`;
  const nextPage = `/noticias/pagina/${currentPage + 1}`;

  return (
    <Layout>
      <section className="blog-list-hero bg-gray-600">
        <div className="container mx-auto px-4 max-w-6xl py-20 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold uppercase mb-4">
            Noticias
          </h1>
          <p className="text-white/80 text-lg">
            Mantente informado con las últimas novedades de 3C Capital
          </p>
        </div>
      </section>

      <section className="blog-list-content py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        className="w-full h-64 object-cover"
                      />
                    </Link>
                  )}

                  <div className="p-6">
                    {data.fecha && (
                      <p className="text-gold text-sm mb-2">
                        {data.fecha}
                      </p>
                    )}

                    <Link to={`/noticias/${uid}`}>
                      <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-gold transition-colors line-clamp-2">
                        {data.titulo.text}
                      </h2>
                    </Link>

                    {data.resumen?.text && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {data.resumen.text}
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

          {/* Pagination */}
          {numberOfPages > 1 && (
            <nav className="pagination flex justify-center items-center gap-4 mt-12">
              {!isFirst && (
                <Link
                  to={prevPage}
                  className="pagination-link px-4 py-2 bg-white rounded shadow hover:bg-gold hover:text-white transition-colors"
                >
                  ← Anterior
                </Link>
              )}

              <div className="flex gap-2">
                {Array.from({ length: numberOfPages }, (_, i) => (
                  <Link
                    key={`pagination-number${i + 1}`}
                    to={i === 0 ? "/noticias" : `/noticias/pagina/${i + 1}`}
                    className={`pagination-number w-10 h-10 flex items-center justify-center rounded ${
                      i + 1 === currentPage
                        ? "bg-gold text-white"
                        : "bg-white text-gray-800 hover:bg-gray-100"
                    } transition-colors`}
                  >
                    {i + 1}
                  </Link>
                ))}
              </div>

              {!isLast && (
                <Link
                  to={nextPage}
                  className="pagination-link px-4 py-2 bg-white rounded shadow hover:bg-gold hover:text-white transition-colors"
                >
                  Siguiente →
                </Link>
              )}
            </nav>
          )}
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    allPrismicNoticia(
      sort: { data: { fecha: DESC } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          uid
          data {
            titulo {
              text
            }
            foto {
              gatsbyImageData(width: 600, height: 400)
            }
            fecha(formatString: "LL", locale: "es")
            resumen {
              text
            }
          }
        }
      }
    }
  }
`;

export function Head() {
  return (
    <>
      <title>Noticias | 3C Capital</title>
      <meta
        name="description"
        content="Mantente informado con las últimas novedades de 3C Capital sobre factoring y oportunidades de rentabilidad."
      />
    </>
  );
}
