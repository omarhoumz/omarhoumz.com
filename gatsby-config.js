module.exports = {
  siteMetadata: {
    title: 'Omar Houmz',
    description:
      'This is the personal website of Omar Houmz, a Software Engineer.',
    author: '@omarhoumz',
    projects: [
      {
        title: 'devfest.gdgcasablanca.com',
        link: 'https://devfest.gdgcasablanca.com/',
        external: true,
        shortDesc:
          'DevFest is a yearly Developer festival organized by GDG Casablanca. I created the site with gatsby, reactjs and meetup API.',
      },
      {
        title: 'wtm.gdgcasablanca.com',
        link: 'https://wtm.gdgcasablanca.com/',
        external: true,
        shortDesc:
          'WTM (Women TechMakers) is a global program that provides visibility and community for women in tech. I created the site with HTML, CSS and a bit of JS.',
      },
      {
        title: 'gdgcasablanca.com',
        link: 'https://gdgcasablanca.com/',
        external: true,
        shortDesc:
          'GDG Casablanca is a local dev community. I created the site with gatsby, reactjs and meetup API.',
      },
      {
        title: 'LineApp.',
        link: 'https://github.com/omhoumz/lineapp',
        external: true,
        shortDesc: 'Yet another to do app that uses Firebase Auth.',
      },
      {
        title: 'CC Platform.',
        link: 'https://github.com/omarhoumz/ccp',
        external: true,
        shortDesc:
          'Get free and high res photos from around the web. An agregation of APIs for CC images.',
      },
      {
        title: 'Aiesec.ma.',
        link: 'http://www.aiesec.ma/AIESEC/p/',
        external: true,
        shortDesc:
          'The official website of the Mchina brand of AIESEC in Morocco.',
      },
    ],
    menuLinks: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Projects',
        link: '/projects',
      },
      {
        name: 'About',
        link: '/about',
      },
      {
        name: 'Blog',
        link: '/blog',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
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
  ],
}
