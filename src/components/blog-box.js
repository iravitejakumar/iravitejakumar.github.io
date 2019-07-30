import React from "react"
import '../css/blog.css';
import Image from '../components/image';

const BlogBox = (props) => {
    const blog = props.blog;

    return (
        <div className="box-container">
            <div className="image-container">
                <Image alt="Gatsby in Space" filename={blog.img} styles={{
                    'border-top-right-radius': '10px',
                    'border-top-left-radius': '10px',
                    'vertical-align': 'middle'
                }} wrapperStyle={{height: '125px'}}/>
            </div>
            <div>
                <div className="blog-title">
                    {blog.name}
                </div>
                {
                    blog.tags.map((tag, index) => <div key={index} className="tag">{tag.name}</div>)
                }
            </div>
        </div>
    )
};

export default BlogBox
