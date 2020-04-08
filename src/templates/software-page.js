import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ResearchRoll from '../components/ResearchRoll'


ResearchPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
  }),
}

const SoftwarePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <div className="content">
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url(${
              !!image.childImageSharp ? image.childImageSharp.fluid.src : frontmatter.image
              })`,
          }}
        >
          <h2
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              backgroundColor: '#f40',
              color: 'white',
              padding: '1rem',
            }}
          >
            {frontmatter.title}
          </h2>
        </div>
        <div className="columns">
          <div className="column is-7 is-offset-1">
            <h3 className="has-text-weight-semibold is-size-2">{frontmatter.heading1}</h3>
            <p>{frontmatter.description1}</p>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <ResearchRoll />
            </div>
          </div>
        </section>
        <div className="columns">
          <div className="column is-7 is-offset-1">
            <h3 className="has-text-weight-semibold is-size-2">{frontmatter.heading2}</h3>
            <p>{frontmatter.description2}</p>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <ResearchRoll />
            </div>
          </div>
        </section>
        <div className="columns">
          <div className="column is-7 is-offset-1">
            <h3 className="has-text-weight-semibold is-size-2">{frontmatter.heading3}</h3>
            <p>{frontmatter.description3}</p>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <ResearchRoll />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

SoftwarePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
  heading1: PropTypes.string,
  description1: PropTypes.string,
  heading2: PropTypes.string,
  description2: PropTypes.string,
  heading3: PropTypes.string,
  description3: PropTypes.string,
}

export default SoftwarePage

export const SoftwarePageQuery = graphql`
  query SoftwarePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading1
        description1
        heading2
        description2
        heading3
        description3
      }
    }
  }
`
