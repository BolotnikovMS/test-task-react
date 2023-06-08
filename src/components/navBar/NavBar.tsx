import React from 'react'

import './navbar.css'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <Link to='/'>Posts</Link>
        </li>
        <li>
          <a href='#!'>About Me</a>
        </li>
        <li>
          <a href='#!'>Users</a>
        </li>
      </ul>
    </nav>
  )
}
