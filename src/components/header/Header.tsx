import './header.css'

import * as React from 'react'

import { NavBar } from '../navBar/NavBar'

export const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className='header__content'>
          <div className='header__logo'>Test task</div>
          <NavBar />
        </div>
      </div>
    </header>
  )
}
