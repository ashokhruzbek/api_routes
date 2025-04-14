import React from 'react'
import './UserCard.css'
import avatar from '../assets/avatar.jpg';
import { Link } from 'react-router-dom';

function UserCard({ism, mail, city,}) {
  return (
    <div className='user-card'>
      <div className="image">
        <img src={avatar} alt="User Avatar" class="avatar" />
        <div className="user-info1">
          <h2>{ism}</h2>
          <p className="email">{mail}</p>
          <p className="phone">{city}</p>
        </div>
      </div>
        <div className="footer">
          <Link to='/todos' className='footer-btn'>More</Link>
        </div>
    </div>
  )
}

export default UserCard