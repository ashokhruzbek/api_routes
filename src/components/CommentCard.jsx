import React from 'react'
import Avatar from "../assets/avatar.jpg"
function CommentCard({comment}) {
  return (
    <div class="comment-card">
      <div class="user-info">
        <img src={Avatar} alt="User Avatar" class="avatar" />
        <div>
          <h3 class="comment-name">{comment.name}</h3>
          <span class="comment-email">{comment.email}</span>
        </div>
      </div>
      <p class="comment-body">{comment.text}</p>
    </div>

  )
}

export default CommentCard