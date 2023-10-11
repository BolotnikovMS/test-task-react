import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound, PostInfoPage, PostsPage, UserInfoPage, UsersPage } from '../../views'

import { Header } from '../header/Header'
import { NewPost } from '../../views/Posts/NewPost'
import React from 'react'

export const Router = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL} >
      <Header />
      <Routes>
        <Route element={<PostsPage />} path='/' />
        <Route element={<NewPost />} path='/new' />
        <Route element={<PostInfoPage />} path='/posts/:id' />
        <Route element={<UserInfoPage />} path='/users/:id' />
        <Route element={<UsersPage />} path='/users' />
        <Route element={<NotFound />} path='*' />
      </Routes>
    </BrowserRouter>
  )
}
