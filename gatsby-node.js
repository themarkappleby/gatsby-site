const path = require(`path`)

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              title
              slug
              info {
                info
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulPage.edges.map(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: node.slug
          },
        })
      })
      resolve()
    })
  })
}
