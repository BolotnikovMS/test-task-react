import * as React from 'react'

import './header.css'

import { NavBar } from '../navBar/NavBar'

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__content'>
        <div className='header__logo'>Test task</div>
        <NavBar />
      </div>
    </header>
  )
}
