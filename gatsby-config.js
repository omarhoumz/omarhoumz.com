module.exports = {
  siteMetadata: {
    title: `Omar Houmz`,
    description: ``,
    author: `@omarhoumz`,
    projects: [
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
        name: 'About',
        link: '/about',
      },
      {
        name: 'Projects',
        link: '/projects',
      },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-35979647-3',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
