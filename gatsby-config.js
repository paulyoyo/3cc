module.exports = {
  siteMetadata: {
    title: "3C Capital",
    description: "Factoring y Oportunidades de Rentabilidad",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        api: "modern-compiler",
        sassOptions: {},
      },
    },
    `gatsby-plugin-postcss`,
  ],
};
