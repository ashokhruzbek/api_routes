import React from 'react'
import './UserCard.css'
import avatar from '../assets/avatar.jpg';
import { Link, Outlet } from 'react-router-dom';

function UserCard({id, ism, mail, city}) {
  const avatar = `https://i.pravatar.cc/300?img=${id % 50}`
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
          <Link to={`/users/${id}/todos`} className='footer-btn'>Todos</Link>
        </div>
    </div>
  )
}

export default UserCard