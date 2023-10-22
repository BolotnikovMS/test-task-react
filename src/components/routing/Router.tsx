import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound, PostInfoPage, PostsPage, UserInfoPage, UsersPage } from '../../views'

import { Layout } from '../layout/Layout'
import { NewPost } from '../../views/Posts/NewPost'
import React from 'react'
import { TestPage } from '../../views/Test/TestPage'
import { TestText } from '../../views/Test/TestText'

export const Router = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL} >
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<PostsPage />} />
          <Route path='new' element={<NewPost />} />
          <Route path='posts/:id' element={<PostInfoPage />} />
          <Route path='users/:id' element={<UserInfoPage />} />
          <Route path='users' element={<UsersPage />} />
          <Route path='tests' element={<TestPage children={<TestText/>} />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
