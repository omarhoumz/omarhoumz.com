/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Section from '../components/_ui/section/section'
import BlogLink from '../components/_ui/blog-link/blog-link'

const BlogIndex = ({ data }) => {
  const posts = data.allMdx.edges

  return (
    <Layout>
      <SEO title='Blog' />
      <Section
        title='All Blog posts'
        classes={{
          inner: 'container-md',
        }}
      >
        {posts.map(({ node }, index) => (
          <BlogLink
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

export default BlogIndex

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
