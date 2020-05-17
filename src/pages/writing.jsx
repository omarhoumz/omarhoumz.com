/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Section from '../components/_ui/section/section'
import WritingLink from '../components/_ui/writing-link/writing-link'

const WritingIndex = ({ data }) => {
  const posts = data.allMdx.edges

  return (
    <Layout>
      <SEO title='Writing' />
      <Section
        title='All Writing'
        classes={{
          inner: 'container-md',
        }}
      >
        {posts.map(({ node }, index) => (
          <WritingLink
            key={index.toString()}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
            link={node.fields.slug}
          />
        ))}
      </Section>
    </Layout>
  )
}

export default WritingIndex

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
