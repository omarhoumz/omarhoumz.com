/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/layout/layout'
import Section from '../components/_ui/section/section'
import Link from '../components/link/link'

const BlogPost = ({ data, pageContext }) => {
  const post = data.mdx
  const { previous, next } = pageContext

  return (
    <Layout>
      <Section
        classes={{
          inner: 'container-md',
        }}
      >
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.date}</p>
      </Section>

      <Section
        classes={{
          inner: 'container-md',
        }}
      >
        <MDXRenderer>{post.body}</MDXRenderer>
      </Section>

      <Section
        classes={{
          inner: 'container-md',
        }}
      >
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            listStyle: 'none',
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link href={previous.fields.slug} rel='prev' internal>
                {`← ${previous.frontmatter.title}`}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link href={next.fields.slug} rel='next' internal>
                {`${next.frontmatter.title} →`}
              </Link>
            )}
          </li>
        </ul>
      </Section>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`
