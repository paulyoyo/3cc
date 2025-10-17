module.exports = {
  siteMetadata: {
    title: "3C Capital",
    description: "Factoring y Oportunidades de Rentabilidad",
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
    `gatsby-plugin-postcss`,
  ],
};
