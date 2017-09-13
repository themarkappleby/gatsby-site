import React from 'react'

class ContactPage extends React.Component {
  render () {
    const page = this.props.data.contentfulPage
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
    contentfulPage(title:{eq:"Contact"}) {
      title
      slug
      info {
        info
      }
    }
  }
`

export default ContactPage
