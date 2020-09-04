import React from "react"
import '../css/blog.css';
import Image from '../components/image';

const BlogBox = (props) => {
    const blog = props.blog;

    return (
        <div className="box-container">
            <div className="image-container">
            <Image alt="Gatsby in Space" filename={blog.img} />
            </div>
            <div className="blog-title">
                {blog.name}
            </div>
            {
                blog.tags.map((tag, index) => <div key={index} className="tag">{tag.name}</div>)
            }
        </div>
    )
};

export default BlogBox
