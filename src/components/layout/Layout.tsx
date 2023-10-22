import { Header } from '../header/Header'
import { Outlet } from 'react-router-dom'
import React from 'react'

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
    </>
  )
}
