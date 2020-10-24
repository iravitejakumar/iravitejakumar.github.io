import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import BlogFooter from '../components/BlogFooter';
import EndOfBlogOptions from '../components/EndOfBlogOptions';
import SEO from '../components/seo';
export default class Template extends React.Component {
  constructor(props) {
    super(props);
    this.themer = this.themer.bind(this);
    this.getPrevTheme = this.getPrevTheme.bind(this);
    this.state = {
      theme: null
    }
  }

  componentDidMount() {
    const theme = this.getPrevTheme();
    this.setState({ theme });
  }

  getPrevTheme() {
    return window.__dkBlogTheme;
  }
  
  themer() {
    /* All other calls to themer */
    const oldTheme = this.state.theme;
    const newTheme = (oldTheme === 'dark') ? 'light' : 'dark';
    if (typeof(window) !== 'undefined') {
      this.setState({ theme: newTheme});
      document.body.className = newTheme;
      window.__dkBlogTheme = newTheme;
      window.localStorage.setItem('dkBlogTheme', newTheme);
    }
  }

  render() {
    const post = this.props.data.markdownRemark;
    const otherPosts = this.props.data.allMarkdownRemark.edges;
    const blogEndData = {
      title: post.frontmatter.title,
      path: post.frontmatter.path
    };
    const {theme} = this.state;
    const {title, description, path, ogimage, date} = post.frontmatter;
    const ogimagePath = (ogimage && ogimage.childImageSharp && ogimage.childImageSharp.fixed) ? ogimage.childImageSharp.fixed.src : '';
    return (
      <Layout theme={theme} themer={this.themer}>
        <SEO title={title + ' - dhilipkmr'} description={description + ' by dhilipkmr' } ogType="blogs" ogUrl={'https://www.dhilipkmr.dev' + path} image={ogimagePath}/>
        <div className="blogText lh2em lr05">
          <div className="mw960 pad20 ">
            <div className="marginB20">
              <h1 className="opAnimator">{title}</h1>
            </div>
            <div  className="marginB20">
              <i className="ico13 descriptionTxtColor">Published on {date}</i>
            </div>
            <div className="descriptionTxtColor">
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
          <EndOfBlogOptions data={blogEndData}/>
          <BlogFooter posts={otherPosts}/>
        </div>
      </Layout>
    )
  }
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        description
        date(formatString: "MMM DD, YYYY")
        ogimage {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
    }
    allMarkdownRemark(limit:3, filter: {frontmatter:{ path: { ne: $path } }}){
      edges{
        node{
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
            description
            timeToRead
            path
          }
        }
      }
    }
  }
`
