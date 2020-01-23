/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import styles from './blog-post.module.css'
import Layout from '../components/layout/layout'
import Section from '../components/_ui/section/section'
import Link from '../components/link/link'
import SEO from '../components/seo'

const BlogPost = ({ data, pageContext }) => {
  const post = data.mdx
  const { previous, next } = pageContext

  return (
    <Layout className={styles.mainBlog}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <Section
        classes={{
          inner: 'container-md',
        }}
      >
        <h1>{post.frontmatter.title}</h1>
        <p className={styles.metaData}>{post.frontmatter.date}</p>
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
