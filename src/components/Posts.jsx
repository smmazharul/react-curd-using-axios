import React, { useEffect, useState } from 'react';
import { getPost } from '../api/postApi';
import Post from './Post';
import "./posts.css"
const Posts = () => {

    const [data,setData]=useState([])
   
   
    
  const getPostData=async()=>{
    const res = await getPost();

    setData(res.data)
  }

  useEffect(()=>{
    getPostData()
  },[])

    return (
        <section className='section-posts'>
            <h1>Hello Post Page </h1>

            <div className='all-posts'>
            {
                data.map((dataInfo )=><Post key={dataInfo.id} dataInfo={dataInfo}></Post>)
            }
            </div>
        </section>
    );
};

export default Posts;