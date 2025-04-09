import React, { useEffect, useState } from 'react';
import { deletePost, getPost } from '../api/postApi';
import Post from './Post';
import "./posts.css"
const Posts = () => {

    const [data,setData]=useState([])
   
   
    
    const getPostData=async()=>{
        const res = await getPost();
        setData(res.data)
    }


    const handleDeletePost=async(id)=>{
        try {
            const res = await deletePost(id)
            if(res.status===200){
              const newUpdatedData=  data.filter(post=>post.id !==id);
              setData(newUpdatedData)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

  useEffect(()=>{
    getPostData()
  },[])




    return (
        <section className='section-posts'>
            <h1>Hello Post Page </h1>

            <div className='all-posts'>
            {
                data.map((dataInfo )=><Post key={dataInfo.id} handleDeletePost={handleDeletePost} dataInfo={dataInfo}></Post>)
            }
            </div>
        </section>
    );
};

export default Posts;