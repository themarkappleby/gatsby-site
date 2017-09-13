module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `4ji0jbccxy1k`,
        accessToken: `c21d414b42881e6328c3a021f0eff0c24ea2f78f043451d52e34a477ce26be48`,
      },
    }
  ],
}
