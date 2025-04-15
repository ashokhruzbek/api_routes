import React, { useEffect, useState } from 'react'
import axios from "axios";
import PostCard from '../components/PostCard'
import { useParams } from 'react-router-dom';

function Posts() {
  const { userId } = useParams();
  console.log(userId);
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    try {
      const info = async () =>{
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${userId}/posts`
        );
        console.log(res.data);
        setPosts(res.data)
      };
      info();
    } catch (error) {
      console.log(error);
      
    }
  },[])
  
  return (
    <div className="posts-container">
      {posts?.map((post)=>{
        return <PostCard post={post}/>
      })}
    </div>

  )
}

export default Posts