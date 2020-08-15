import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const blogs = [
    {name: "React andn Redux best Practices"},
    {name: "React andn Redux best Practices"},
    {name: "React andn Redux best Practices"},
    {name: "React andn Redux best Practices"},
    {name: "React andn Redux best Practices"}
]
const BlogsList = () => (
  <Layout>
    <SEO title="Page two" />
     {
        blogs.map(blog => <div>{blog.name}</div>) 
     }
  </Layout>
)

export default BlogsList
