import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

class Header extends React.Component {
  render () {
    return (
      <div
        style={{
          background: 'rebeccapurple',
          marginBottom: '1.45rem',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '1.45rem 1.0875rem',
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Gatsby
            </Link>
          </h1>
          <ul className="nav">
            {this.props.data.map((node, i) => {
              const link = `/${node.node.slug}/`
              return (
                <li key={i}>
                  <Link to={link}>
                    {node.node.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

class TemplateWrapper extends React.Component {
  render () {
    const data = this.props.data.allContentfulPage.edges
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header data={data} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    )
  }
}

export const query = graphql`
  query NavQuery {
    allContentfulPage {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
