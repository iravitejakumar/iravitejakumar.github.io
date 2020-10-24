import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import FadeIn from '../components/FadeIn';
import { FaLink } from 'react-icons/fa';
import { MdExpandMore } from "react-icons/md";
import SEO from '../components/seo';
import BlogBox from '../components/BlogBox';

const mediumBlogs = [ {
    url: "https://medium.com/js-imaginea/best-practices-with-react-and-redux-application-1e94a6f214a0",
    name: "React + Redux — Best Practices",
    description: "This article mainly focuses on implementing some good practices I follow when building large scale applications with React and Redux."
}]
class Blogs extends React.Component {
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
        if (typeof (window) !== 'undefined') {
            this.setState({ theme: newTheme });
            document.body.className = newTheme;
            window.__dkBlogTheme = newTheme;
            window.localStorage.setItem('dkBlogTheme', newTheme);
        }
    }

    loadDetails(nodeId, postNumber, content) {
        this.setState({
            selectedId: nodeId,
            post: content
        });
    }

    getNumber(num) {
        if (parseInt(num) < 10) {
            return '0' + num;
        }
        return num;
    }

    render() {
        const { data } = this.props;
        const { selectedId = '', post } = this.state;
        return (
            <Layout className="mh100" theme={this.state.theme} themer={this.themer}>
                <SEO title="Ravi Teja Kumar's Jounrey | iravitejakumar blogs" />
                <div className="width100 hide650px padT10">
                    <div className="oh fs35">
                        <FadeIn className="marginT10 padding10">Blogs </FadeIn>
                    </div>
                    {/* <div className="padT10 oh marginB50">
                        <FadeIn className="textcenter fs35  padding10">Accidental blogs</FadeIn>
                    </div> */}
                    {mediumBlogs.map(data => (<FadeIn>
                        <BlogBox url={data.url} name={data.name} description={data.description}/>
                    </FadeIn>))}
                    
                </div>
            </Layout>
        );
    }
}

Blogs.propTypes = {
    data: PropTypes.object,
};

export default Blogs;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "MMM DD, YYYY")
            author
            timeToRead
            description
            smallTitle
            postNum
          }
        }
      }
    }
  }
`;