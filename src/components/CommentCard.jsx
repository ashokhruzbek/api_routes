import React from 'react'
import Avatar from "../assets/avatar.jpg"
function CommentCard({name, email, text}) {
  return (
    <div class="comment-card">
      <div class="user-info">
        <img src={Avatar} alt="User Avatar" class="avatar" />
        <div>
          <h3 class="comment-name">{name}</h3>
          <span class="comment-email">{email}</span>
        </div>
      </div>
      <p class="comment-body">{text}</p>
    </div>

  )
}

export default CommentCard