const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./src/components"),
        "@ui": path.resolve(__dirname, "./src/components/ui"),
        "@layout": path.resolve(__dirname, "./src/components/Layout"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@images": path.resolve(__dirname, "./src/assets/images"),
        "@utils": path.resolve(__dirname, "./src/utils"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
      },
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const singleBlogPage = path.resolve("./src/templates/blog-detail/index.js");
  const blogList = path.resolve("./src/templates/blog-list/index.js");

  const result = await graphql(`
    query {
      allPrismicNoticia {
        edges {
          node {
            data {
              contenido {
                html
              }
              fecha(locale: "es", formatString: "LL")
              foto {
                gatsbyImageData
              }
              resumen {
                text
                html
              }
              titulo {
                text
              }
            }
            uid
            tags
          }
          next {
            data {
              titulo {
                text
              }
              foto {
                gatsbyImageData(height: 120, width: 650)
              }
            }
            uid
          }
          previous {
            data {
              titulo {
                text
              }
              foto {
                gatsbyImageData(height: 120, width: 650)
              }
            }
            uid
          }
        }
      }
    }
  `);

  // Create Single Blog Page

  const posts = result.data.allPrismicNoticia.edges;
  posts.forEach(({ node, next, previous }) => {
    createPage({
      path: `noticias/${node.uid}`,
      component: singleBlogPage,
      context: {
        slug: node.uid,
        next,
        previous,
      },
    });
  });

  // Create Blog List Page
  // Pagination

  const postsPerPage = 12;
  const numberOfPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numberOfPages }).forEach((_, index) => {
    const isFirstPage = index === 0;
    const currentPage = index + 1;
    createPage({
      path: isFirstPage ? "noticias" : `noticias/pagina/${currentPage}`,
      component: blogList,
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        currentPage,
        numberOfPages,
      },
    });
  });
};
