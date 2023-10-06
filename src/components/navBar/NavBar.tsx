import './navbar.css'

import { Link } from 'react-router-dom'
import React from 'react'

export const NavBar = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <Link to='/'>Posts</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
      </ul>
    </nav>
  )
}
