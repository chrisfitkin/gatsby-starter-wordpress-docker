const config = {
  dev: {
    siteMetadata: {
      title: 'MeetKite Gatsby Website',
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sass',
      {
        resolve: 'gatsby-source-wordpress',
        options: {
          // The base url to your WP site.
          baseUrl: 'wpdemo.gatsbycentral.com',
          // WP.com sites set to true, WP.org set to false
          hostingWPCOM: false,
          // The protocol. This can be http or https.
          protocol: 'https',
          // Use 'Advanced Custom Fields' Wordpress plugin
          useACF: false,
          auth: {},
          // Set to true to debug endpoints on 'gatsby build'
          verboseOutput: false,
        },
      },
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      'gatsby-plugin-purgecss',
      'gatsby-plugin-netlify', // make sure to keep it last in the array
    ],
  },
  docker: {
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sass',
      {
        resolve: 'gatsby-source-wordpress',
        options: {
          // The base url to your WP site.
          baseUrl: 'localhost:8001',
          // WP.com sites set to true, WP.org set to false
          hostingWPCOM: false,
          // The protocol. This can be http or https.
          protocol: 'http',
          // Use 'Advanced Custom Fields' Wordpress plugin
          useACF: false,
          auth: {},
          // Set to true to debug endpoints on 'gatsby build'
          verboseOutput: false,
        },
      },
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      'gatsby-plugin-purgecss',
      'gatsby-plugin-netlify', // make sure to keep it last in the array
    ],
  }
}

const nodeEnv = process.env.NODE_ENV || 'dev';
module.exports = config[nodeEnv] ? {
  ...config.dev,
  ...config[nodeEnv]
} : config.dev;