import React from 'react'

class IndexPage extends React.Component {
  render () {
    const edges = this.props.data.allContentfulPage.edges
    const page = edges[0].node
    return (
      <div>
        <h1>{page.title}</h1>
        <p>{page.info.info}</p>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query AboutQuery {
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
`

export default IndexPage
