import { PostInfoPage, PostsPage, UserInfoPage, UsersPage } from '../../views'
import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Layout } from '..'
import { PostFormPage } from '../../views/Posts/PostFormPage'
import { TestPage } from '../../views/Test/TestPage'
import { TestText } from '../../views/Test/TestText'

const NotFound = lazy(() => import('../../views/NotFound/NotFound'))

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<PostsPage />} />
        <Route path='new' element={<PostFormPage />} />
        <Route path='posts/:id' element={<PostInfoPage />} />
        <Route path='users/:id' element={<UserInfoPage />} />
        <Route path='users' element={<UsersPage />} />
        <Route path='tests' element={<TestPage children={<TestText/>} />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}
