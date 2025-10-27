require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "3C Capital",
    description: "Factoring y Oportunidades de Rentabilidad",
    emails: ["negocios1@3ccapital.pe", "negocios2@3ccapital.pe"],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-KQ5MT6XK", // Reemplaza con tu ID de Google Tag Manager

        includeInDevelopment: false, // Cambia a true si quieres habilitarlo en desarrollo
        defaultDataLayer: { platform: "gatsby" },

        // Opcional: eventos adicionales
        enableWebVitalsTracking: true,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        routes: [
          {
            type: "noticia",
            path: "/noticias/:uid",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `3C Capital - Factoring y Oportunidades de Rentabilidad`,
        short_name: `3C Capital`,
        description: `Factoring y Oportunidades de Rentabilidad`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#fb9b0d`,
        display: `standalone`,
        icon: `src/assets/images/logo-icon.png`,
        icons: [
          {
            src: `src/assets/images/logo-icon.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
          {
            src: `src/assets/images/logo-icon-80.png`,
            sizes: `80x80`,
            type: `image/png`,
          },
          {
            src: `src/assets/images/logo-icon-64.png`,
            sizes: `64x64`,
            type: `image/png`,
          },
        ],
      },
    },
  ],
};
