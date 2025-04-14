import React from 'react'
import "./PostCard.css"

function PostCard({title, post}) {
  return (
    <div className="post-container">
      <div className="post">
        <h4 className="post-title">{title}</h4>
        <p className="post-body">{post}</p>
      </div>
    </div>
  )
}

export default PostCard