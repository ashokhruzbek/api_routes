import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CommentCard from '../components/CommentCard'
import '../components/CommentCard.css'

function Comments() {
  const [comments, setComments] = useState();
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments`)
    .then((res)=>{
      setComments(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])
  return (

    <div className='container-coment'> 
    {comments?.map((comment)=>{
      return (
        <CommentCard 
        //  key={comment.id}
         name = {comment.name}
         email={comment.email}
         text={comment.body}

         />

      );
    })}
    </div>
  )
}

export default Comments