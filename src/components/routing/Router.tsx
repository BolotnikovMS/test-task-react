import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from '../header/Header'
import { PostsPage } from '../../views/Posts/PostsPage'
import { UserInfoPage } from '../../views/Users/UserInfoPage'

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<PostsPage />} path='/' />
        <Route element={<UserInfoPage />} path='/users/:id' />
      </Routes>
    </BrowserRouter>
  )
}
