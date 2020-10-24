/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('src/templates/blog-post.js')
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              path
              title
              date
              author
              ogimage
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    const posts = res.data.allMarkdownRemark.edges;
    posts.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate
      })
    })
  })
}
