module.exports = {
  siteMetadata: {
    title: 'Omar Houmz',
    description: '',
    author: '@omarhoumz',
    projects: [
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
  ],
}
