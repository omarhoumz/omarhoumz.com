/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Section from '../components/_ui/section/section'
import Link from '../components/link/link'

const BlogIndex = ({ data }) => {
  const posts = data.allMdx.edges

  return (
    <Layout>
      <SEO title='Blog' />
      <Section
        title='All Posts'
        classes={{
          inner: 'container-md',
        }}
      >
        {posts.map(({ node }) => (
          <div
            style={{
              marginBlockEnd: '2.3rem',
            }}
          >
            <h3>{node.frontmatter.title}</h3>
            <p>{node.frontmatter.date}</p>
            <p
              style={{
                maxWidth: '65ch',
              }}
            >
              {node.excerpt}
            </p>
            <Link href={node.fields.slug} internal>
              Read →
            </Link>
          </div>
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
