import { PostInfoPage, PostsPage, UserInfoPage, UsersPage } from '../../views'
import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Layout } from '..'

const NotFound = lazy(() => import('../../views/NotFound/NotFound'))

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route element={<PostsPage />} path='/' />
        <Route element={<PostInfoPage />} path='/posts/:id' />
        <Route element={<UserInfoPage />} path='/users/:id' />
        <Route element={<UsersPage />} path='/users' />
        <Route element={<NotFound />} path='*' />
      </Route>
    </Routes>
  )
}
