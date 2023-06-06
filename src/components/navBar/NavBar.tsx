import React from 'react'

import './navbar.css'

export const NavBar = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <a href='#!'>Posts</a>
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
