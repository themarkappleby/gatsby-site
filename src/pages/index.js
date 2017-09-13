import React from 'react'
import Link from 'gatsby-link'

class IndexPage extends React.Component {
  render () {
    const edges = this.props.data.allContentfulPage.edges
    console.log(edges)
    const page = edges[0].node
    return (
      <div>
        <h1>{page.title}</h1>
        <p>{page.info.info}</p>
        <ul>
          {edges.map((edge, i) => {
            const slug = `/${edge.node.slug}/`
            return (
              <li key={i}>
                <Link to={slug}>
                  {edge.node.title}
                </Link>
              </li>
            )
          })}
        </ul>
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
