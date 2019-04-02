const config = {
  starter: {
    siteMetadata: {
      title: 'Gatsby WP Starter Website (Dev)',
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
  }, dev: {
    siteMetadata: {
      title: 'Gatsby WP Local Website',
    },
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
          verboseOutput: true,
        },
      },
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      'gatsby-plugin-purgecss',
      'gatsby-plugin-netlify', // make sure to keep it last in the array
    ],
  },
  docker: {
    siteMetadata: {
      title: 'Gatsby WP Starter Website (Docker)',
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sass',
      {
        resolve: 'gatsby-source-wordpress',
        options: {
          // The base url to your WP site.
          baseUrl: 'wordpress',
          // baseUrl: 'localhost:8001',
          // WP.com sites set to true, WP.org set to false
          hostingWPCOM: false,
          // The protocol. This can be http or https.
          protocol: 'http',
          // Use 'Advanced Custom Fields' Wordpress plugin
          useACF: false,
          auth: {},
          // Set to true to debug endpoints on 'gatsby build'
          verboseOutput: true,
          // searchAndReplaceContentUrls: { // rewrite for docker container network
          // sourceUrl: "http://wordpress",
          // replacementUrl: "http://localhost:8000",
          // sourceUrl: "http://localhost:8001",
          // replacementUrl: "http://wordpress",
          // },
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
console.log('🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍')
console.log('🛍 gatsby-config nodeEnv', nodeEnv);
console.log('🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍🛍')
const gatsbyConfig = config[nodeEnv] ? {
  ...config.dev,
  ...config[nodeEnv]
} : config.dev;
console.log('🛍 gatsbyConfig', gatsbyConfig);
console.log('🛍 gatsbyConfig.plugins[2].options', gatsbyConfig.plugins[2].options);

module.exports = gatsbyConfig;