import React from 'react';
import './Post.css'
const Post = ({dataInfo,handleDeletePost}) => {
    const {id,body,title}=dataInfo
    return (
        <div className='section-post'>
            <ul>
                <li>{id}.</li>
                <li>Title: {title}</li>
                <li>Body: {body}</li>
              
                <div>
                <button className='btn-edit'>Edit</button>
                <button className='btn-delete' onClick={()=>handleDeletePost(id)}>Delete</button>
                </div>
            </ul>
            
        </div>
    );
};

export default Post;