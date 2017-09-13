import React from 'react'

class ContactPage extends React.Component {
  render () {
    const edges = this.props.data.allContentfulPage.edges
    const page = edges[1].node
    return (
      <div>
        <h1>{page.title}</h1>
        <p>{page.info.info}</p>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query ContactQuery {
    allContentfulPage {
      edges {
        node {
          id
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

export default ContactPage
