import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CommentCard from '../components/CommentCard'
import '../components/CommentCard.css'
import { useParams } from 'react-router-dom'

function Comments() {
  const {postId} = useParams();
  console.log(postId);
  
  const [comments, setComments] = useState();
  useEffect(() => {
    try {
      const info = async () => {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        console.log(res.data);
        setComments(res.data);
        
      };
      info();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (

    <div className='container-coment'> 
    {comments?.map((comment)=>{
      return (
        <CommentCard comment={comment}/>

      );
    })}
    </div>
  )
}

export default Comments