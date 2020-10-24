import React from 'react';
import FadeIn from './FadeIn';
import profilePic from '../assets/profilePic.png';

const BlogBox = (props) => {
  return (

    <div style={{
      display: 'flex',
      justifyContent: 'center',
      margin: '10px 10px'
    }}>
      <div style={
      {
        display: 'flex', 'max-width': '700px',
        'border': '1px solid #BFBFBF',
        'box-shadow': '5px 5px 10px #aaaaaa',
        'flexDirection': "column",
        padding: "15px",
        marginTop: "20px" 

      }
    }>
      <div className="mB10"><strong>{props.name}</strong></div>
      <div className="mB10" style={{fontSize: '13px', lineHeight: 1.7}}>{props.description}</div>
      <div style={{textAlign: "right", fontSize: '11px', textDecoration: 'underline'}}> <a href={props.url} target="_blank">Read more...</a></div>
      </div>
    </div>
  );
}
export default BlogBox;
