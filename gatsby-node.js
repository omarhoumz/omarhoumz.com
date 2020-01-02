const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  try {
    const blogPost = path.resolve('./src/templates/blog-post.jsx')
    const { data } = await graphql(
      `
        {
          allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 20
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                }
                body
              }
            }
          }
        }
      `,
    )

    const posts = data.allMdx.edges
    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          previous,
          next,
        },
      })
    })
  } catch (err) {
    throw new Error(err)
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({
      node,
      getNode,
    })
    createNodeField({
      name: 'slug',
      node,
      value,
    })
  }
}
