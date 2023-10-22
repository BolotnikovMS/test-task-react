import { Header, Loader } from '..'
import React, { Suspense } from 'react'

import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Suspense fallback={<Loader/>}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  )
}
