const { projectStatuses } = require('./src/project-statuses')

module.exports = {
  siteMetadata: {
    title: 'Omar Houmz',
    description:
      'This is the personal website of Omar Houmz, a Software Engineer.',
    author: '@omarhoumz',
    siteUrl: 'https://omarhoumz.com',
    projects: [
      {
        title: 'gdgcasablanca.com',
        link: {
          href: 'https://gdgcasablanca.com/',
          external: true,
        },
        status: projectStatuses.active,
        shortDesc:
          'GDG Casablanca is a local dev community. I created the site with gatsby, reactjs and meetup API.',
      },
      {
        title: 'wtm.gdgcasablanca.com',
        link: {
          href: 'https://wtm.gdgcasablanca.com/',
          external: true,
        },
        status: projectStatuses.active,
        shortDesc:
          'WTM (Women TechMakers) is a global program that provides visibility and community for women in tech. I created the site with HTML, CSS and a bit of JS.',
      },
      {
        title: 'devfest.gdgcasablanca.com',
        link: {
          href: 'https://devfest.gdgcasablanca.com/',
          external: true,
        },
        status: projectStatuses.active,
        shortDesc:
          'DevFest is a yearly Developer festival organized by GDG Casablanca. I created the site with gatsby, reactjs and meetup API.',
      },
      {
        title: 'LineApp.',
        link: {
          href: 'https://github.com/omhoumz/lineapp',
          external: true,
        },
        status: projectStatuses.unmaintained,
        shortDesc: 'Yet another to do app that uses Firebase Auth.',
      },
      {
        title: 'CC Platform.',
        link: {
          href: 'https://github.com/omarhoumz/ccp',
          external: true,
        },
        status: projectStatuses.unmaintained,
        shortDesc:
          'Get free and high res photos from around the web. An agregation of APIs for CC images.',
      },
      {
        title: 'Aiesec.ma.',
        link: {
          href: 'http://www.aiesec.ma/AIESEC/p/',
          external: true,
        },
        status: projectStatuses.archived,
        shortDesc:
          'The official website of the Mchina brand of AIESEC in Morocco.',
      },
    ],
    menuLinks: [
      {
        label: 'Home',
        link: '/',
      },
      {
        label: 'Blog',
        link: '/blog',
        partiallyActive: true,
      },
      {
        label: 'Projects',
        link: '/projects',
      },
      {
        label: 'About',
        link: '/about',
      },
      {
        label: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/content/assets`,
    //     name: 'assets',
    //   },
    // },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Omar Houmz on the web',
        short_name: 'Omar Houmz',
        start_url: '/',
        background_color: '#0f0a84',
        theme_color: '#0f0a84',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-35979647-3',
      },
    },
    'gatsby-plugin-eslint',
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        plugins: ['gatsby-remark-images'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
          },

          {
            resolve: 'gatsby-remark-smartypants',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-helmet-canonical-urls',
      options: {
        // Change `siteUrl` to your domain
        siteUrl: 'https://omarhoumz.com',

        // Query string parameters are inclued by default.
        // Set `stripQueryString: true` if you don't want `/blog`
        // and `/blog?tag=foobar` to be indexed separately
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-feed-mdx',
      options: {
        generator: '@omarhoumz',
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return {
                  ...edge.node.frontmatter,
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                }
              })
            },
            query: `
              {
                allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 20) {
                  edges {
                    node {
                      fields {
                        slug
                      }
                      excerpt
                      html
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/blog/rss.xml',
            title: "Omar Houmz | Blog's RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname
            // of current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: '^/blog/',
          },
        ],
      },
    },
  ],
}
