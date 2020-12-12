import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

import styles from './blog-post.module.css'
import Layout from '../components/layout/layout'
import Section from '../components/_ui/section/section'
import Link from '../components/link/link'
import SEO from '../components/seo'
import Sharer from '../components/sharer/sharer'

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
  const postStatus = post.frontmatter.status

  const currentUrl =
    process.env.NODE_ENV === 'development'
      ? `https://omarhoumz.com${document.location.pathname}`
      : typeof window !== 'undefined' && window.location.href

  return (
    <Layout className={styles.mainBlog}>
      <SEO
        title={postTitle}
        description={postExcerpt}
        meta={[
          {
            property: 'og:type',
            content: 'article',
            key: 'property-og:type',
          },
        ]}
      />
      <Section
        classes={{
          inner: 'container-sm',
          root: styles.blogContentSection,
        }}
      >
        <Link href='/blog'>← Back</Link>
        <div style={{ paddingBlockStart: '1rem' }} />
        <h1 className={styles.postTitle}>{postTitle}</h1>
        <p className={styles.metaData}>
          {postStatus === 'draft' && (
            <span className={styles.postStatus}>{postStatus}</span>
          )}
          {postAuthor && (
            <span className={styles.metaAuthor}>
              <span role='img' aria-label='An icon of a hand holding a pen'>
                ✍🏻
              </span>
              &nbsp; by {postAuthor}
            </span>
          )}
          <span className={styles.metaDate}>{postDate}</span>
        </p>
        <div className={styles.mdxContentWrapper}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </Section>

      <Sharer url={currentUrl} title={postTitle} twitterHandle='@omarhoumz' />

      <Section
        classes={{
          inner: 'container-md',
          children: styles.navigation,
        }}
        Component='nav'
      >
        {previous && (
          <Link rel='prev' href={previousSlug} className={styles.navLinks}>
            {`← ${previousTitle}`}
          </Link>
        )}
        {next && (
          <Link rel='next' href={nextSlug} className={styles.navLinks}>
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
        status
      }
      body
    }
  }
`
