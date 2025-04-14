import React, { useEffect, useState } from 'react'
import axios from "axios";
import PostCard from '../components/PostCard'

function Posts() {
  const [posts, setPosts] = useState(null)
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        setPosts(res.data)
      }).catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <div className="posts-container">
      {posts?.map((post)=>
      {
        return (
          <PostCard
          title ={post.title}
          post = {post.body}
          />
        );
      })}
    </div>

  )
}

export default Posts