import React, { useEffect, useState } from "react";
import { postData, updatePost } from "../api/postApi";

const Form = ({ data, setData,updateData,setUpdateData }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

 let isEmpty = Object.keys(updateData).length===0;

//  get update data and add into input field

  useEffect(()=>{
    updateData && setAddData({
        title:updateData.title || "",
        body:updateData.body || "",
    })
  },[updateData])

  const addPostData = async () => {
    try {
      const res = await postData(addData);
      console.log("res", res);
      if (res.status === 201) {
        setData([...data, res.data]);
        setAddData({
          title: "",
          body: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updatePostData=async()=>{

    try {
        const res =await updatePost(updateData.id,addData)
        console.log(res)

        if(res.status===200){

            setData((prev)=>{
             return prev.map(curElem=>{
                return curElem.id === res.data.id? res.data : curElem;
             })
            })

            setAddData({
                title: "",
                body: "",
              });
              setUpdateData({})
        }
        
    } catch (error) {
        console.log(error)
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    if(action==="Post"){
        addPostData();

    }else if(action==="Edit"){
        updatePostData()
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Write the title"
        value={addData.title}
        onChange={handleInputChange}
        autoCapitalize="off"
        name="title"
        id="title"
      />
      <input
        type="text"
        placeholder="Write the content body"
        value={addData.body}
        onChange={handleInputChange}
        autoCapitalize="off"
        name="body"
        id="body"
      />
      <button type="submit" value={isEmpty? "Post": "Edit"}> {isEmpty? "Post": "Edit"}</button>
    </form>
  );
};

export default Form;
