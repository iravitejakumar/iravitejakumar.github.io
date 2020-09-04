import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogBox from '../components/blog-box';

const blogs = [
    {name: "React andn Redux best Practices", img: 'react.jpeg', tags: [{name: 'React'}, {name: 'Javascript'}]},
    {name: "React andn Redux best Practices", img: 'react.jpeg', tags: [{name: 'React'}, {name: 'Javascript'}]}, 
    {name: "React andn Redux best Practices", img: 'react.jpeg', tags: [{name: 'React'}, {name: 'Javascript'}]}, 
    {name: "React andn Redux best Practices", img: 'react.jpeg', tags: [{name: 'React'}, {name: 'Javascript'}]},
    {name: "React andn Redux best Practices", img: 'react.jpeg', tags: [{name: 'React'}, {name: 'Javascript'}]},
    {name: "React andn Redux best Practices", img: 'react.jpeg', tags: [{name: 'React'}, {name: 'Javascript'}]}, 
    {name: "React andn Redux best Practices", img: 'react.jpeg', tags: [{name: 'React'}, {name: 'Javascript'}]}, 
    {name: "React andn Redux best Practices", img: 'react.jpeg', tags: [{name: 'React'}, {name: 'Javascript'}]},
]
const BlogsList = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="blogs-list">
     {
        blogs.map((blog, index) => <BlogBox key={index} blog={blog}/>) 
     }
     </div>
  </Layout>
)

export default BlogsList
