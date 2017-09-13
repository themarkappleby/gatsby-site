import React from "react"

export default ({data}) => {
  const page = data.contentfulPage
  return (
    <div>
      <h1>{page.title}</h1>
      <p>{page.info.info}</p>
    </div>
  )
}

export const query = graphql`
  query PageQuery($slug: String!) {
    contentfulPage(slug:{eq:$slug}) {
      title
      slug
      info {
        info
      }
    }
  }
`
