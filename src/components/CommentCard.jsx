import React from 'react'
import Avatar from "../assets/avatar.jpg"
function CommentCard() {
  return (
    <div class="comment-card">
      <div class="user-info">
        <img src={Avatar} alt="User Avatar" class="avatar" />
        <div>
          <h3 class="comment-name">John Doe</h3>
          <span class="comment-email">johndoe@example.com</span>
        </div>
      </div>
      <p class="comment-body">
        This is a beautiful comment card with gradient background and smooth animations. It includes a profile photo, name, email, and comment text.
      </p>
    </div>

  )
}

export default CommentCard