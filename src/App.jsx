import React, { useEffect } from 'react';
import { getPost } from './api/postApi';

const App = () => {
 
  const getPostData=async()=>{
    const res = await getPost();
    console.log(res)
  }
  useEffect(()=>{
    getPostData()
  },[])
  return (
    <div>
    
      <h1>Hello React Curd Oper</h1>
    </div>
  );
};

export default App;