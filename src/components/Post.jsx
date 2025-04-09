import React from 'react';
import './Post.css'
const Post = ({dataInfo}) => {
    const {id,body,title}=dataInfo
    return (
        <div className='section-post'>
            <ul>
                <li>{id}.</li>
                <li>Title: {title}</li>
                <li>Body: {body}</li>
              
                <div>
                <button className='btn-edit'>Edit</button>
                <button className='btn-delete'>Delete</button>
                </div>
            </ul>
            
        </div>
    );
};

export default Post;