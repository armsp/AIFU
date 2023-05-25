const path = require('path');

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const countries = await graphql(`
    {
      allFile(filter: { sourceInstanceName: { eq: "countries" } }) {
        edges {
          node {
            relativeDirectory
          }
        }
      }
    }
  `);

  countries.data.allFile.edges.forEach((edge) => {
    const country = edge.node.relativeDirectory.split('/')[0];
    const filepath = `/${country}/`;
    createPage({
      path: filepath,
      component: path.resolve(`./src/countries/${country}/${country}.js`),
      context: {
        country,
      },
    });
  });
};
