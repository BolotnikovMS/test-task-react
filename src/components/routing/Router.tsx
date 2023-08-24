import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from '../header/Header'
import { PostInfoPage } from '../../views/Posts/PostInfoPage'
import { PostsPage } from '../../views/Posts/PostsPage'
import React from 'react'
import { UserInfoPage } from '../../views/Users/UserInfoPage'
import { UsersPage } from '../../views/Users/UsersPage'

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<PostsPage />} path='/' />
        <Route element={<PostInfoPage />} path='/posts/:id' />
        <Route element={<UserInfoPage />} path='/users/:id' />
        <Route element={<UsersPage />} path='/users' />
      </Routes>
    </BrowserRouter>
  )
}
