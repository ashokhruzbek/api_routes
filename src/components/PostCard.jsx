import React from 'react'
import "./PostCard.css"
import { useNavigate } from 'react-router-dom';

function PostCard({post }) {

  const navigate = useNavigate();
  return (
    <div onClick={() => navigate('/comments')} className="post-container" style={{ cursor: 'pointer' }}>
    <div className="post">
      <h4 className="post-title">{post.title}</h4>
      <p className="post-body">{post.body}</p>
    </div>
  </div>
  )
}

export default PostCard