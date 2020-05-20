/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import styles from './blog-post.module.css'
import Layout from '../components/layout/layout'
import Section from '../components/_ui/section/section'
import Link from '../components/link/link'
import SEO from '../components/seo'

const BlogPost = ({ data, pageContext }) => {
  const { previous, next } = pageContext
  const post = data.mdx

  if (!post) {
    return null
  }

  const previousSlug = previous && previous.fields.slug
  const previousTitle = previous && previous.frontmatter.title

  const nextSlug = next && next.fields.slug
  const nextTitle = next && next.frontmatter.title

  const postTitle = post.frontmatter.title
  const postExcerpt = post.excerpt
  const postDate = post.frontmatter.date
  const postAuthor = post.frontmatter.author

  return (
    <Layout className={styles.mainBlog}>
      <SEO title={postTitle} description={postExcerpt} />
      <Section
        classes={{
          inner: 'container-md',
          root: styles.blogContentSection,
        }}
      >
        <Link href='/writing' internal>
          ← Back
        </Link>
        <div
          style={{
            paddingBlockStart: '1em',
          }}
        />
        <h1 className={styles.postTitle}>{postTitle}</h1>
        <p className={styles.metaData}>
          {postAuthor && (
            <span className={styles.metaAuthor}>
              <span role='img' aria-label='icon image'>
                ✍🏻
              </span>
              &nbsp; by {postAuthor}
            </span>
          )}
          <span className={styles.metaDate}>{postDate}</span>
        </p>
        <MDXRenderer>{post.body}</MDXRenderer>
      </Section>

      <Section
        classes={{
          inner: 'container-md',
          children: styles.navigation,
        }}
        Component='nav'
      >
        {previous ? (
          <Link
            rel='prev'
            internal
            href={previousSlug}
            className={styles.navLinks}
          >
            {`← ${previousTitle}`}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link rel='next' internal href={nextSlug} className={styles.navLinks}>
            {`${nextTitle} →`}
          </Link>
        )}
      </Section>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        author
      }
      body
    }
  }
`
