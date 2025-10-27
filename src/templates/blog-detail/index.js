import React from "react";
import { graphql, Link } from "gatsby";
import Heading from "@ui/Heading";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "@layout/Layout";
import "./blog-detail.scss";

export default function SingleBlogTemplate({ data }) {
  const noticiaData = data.prismicNoticia.data;

  return (
    <Layout>
      <section className="blog-detail-hero bg-gray-600">
        <div className="container mx-auto px-4 max-w-6xl">
          <Heading
            title={noticiaData.titulo.text}
            subtitle={noticiaData.fecha}
            white
          />
        </div>
      </section>

      <section className="blog-detail-content py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <article className="bg-white rounded-[20px] shadow-lg overflow-hidden">
            {noticiaData?.foto?.gatsbyImageData && (
              <GatsbyImage
                image={noticiaData.foto.gatsbyImageData}
                className="w-full"
                alt={noticiaData.titulo.text}
              />
            )}

            <div className="p-6 md:p-12">
              {noticiaData.contenido?.html && (
                <div
                  className="blog-content prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: noticiaData.contenido.html,
                  }}
                />
              )}

              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link to="/noticias" className="btn">
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
