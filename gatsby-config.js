module.exports = {
  siteMetadata: {
    title: `Ravi Teja | Portfolio`,
    description: `Ravi Teja | Portfolio`,
    author: `dhilipkmr`,
    keywords: ['Ravi Teja Kumar Isetty', 'iravitejakumar', 'frontend blogs'],
    ogType: 'website',
    ogUrl: 'http://iravitejakumar.github.io',
    lang: 'en',
    image: 'https://raw.githubusercontent.com/dhilipkmr/webapp-samples/master/images/website/profilePic.png'
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dhilip's Journey`,
        short_name: `Dhilip's Journey`,
        start_url: `/`,
        background_color: `#1f1f1f`,
        theme_color: `#235bc1`,
        display: `minimal-ui`,
        icon: `src/assets/profilePic.png`,
        theme_color_in_head: false,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-copy-images',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '÷',
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            }
          }
        ]
      }
    }
  ]
}
