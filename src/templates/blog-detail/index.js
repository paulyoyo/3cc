import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout/Layout";
import "./blog-detail.scss";

export default function SingleBlogTemplate({ data }) {
  const noticiaData = data.prismicNoticia.data;

  return (
    <Layout>
      <section className="blog-detail-hero bg-gray-600">
        <div className="container mx-auto px-4 max-w-6xl py-20 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold uppercase mb-4">
            Noticias
          </h1>
        </div>
      </section>

      <section className="blog-detail-content py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            {noticiaData?.foto?.gatsbyImageData && (
              <GatsbyImage
                image={noticiaData.foto.gatsbyImageData}
                className="w-full"
                alt={noticiaData.titulo.text}
              />
            )}

            <div className="p-6 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 uppercase">
                {noticiaData.titulo.text}
              </h1>

              {noticiaData.fecha && (
                <p className="text-gold mb-6">
                  Publicado {noticiaData.fecha}
                </p>
              )}

              {noticiaData.contenido?.html && (
                <div
                  className="blog-content prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: noticiaData.contenido.html,
                  }}
                />
              )}

              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link
                  to="/noticias"
                  className="inline-block bg-gold text-white px-6 py-3 rounded hover:bg-gold/80 transition-colors"
                >
                  ← Volver a Noticias
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    prismicNoticia(uid: { eq: $slug }) {
      data {
        contenido {
          html
        }
        fecha(formatString: "LL", locale: "es")
        foto {
          gatsbyImageData
        }
        titulo {
          text
        }
      }
      uid
      tags
    }
  }
`;

export function Head({ data }) {
  const noticiaData = data.prismicNoticia.data;
  return (
    <>
      <title>{noticiaData.titulo.text} | 3C Capital</title>
      <meta
        name="description"
        content={noticiaData.resumen?.text || noticiaData.titulo.text}
      />
    </>
  );
}
