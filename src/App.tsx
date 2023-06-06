import React from 'react'

import { Header } from './components/header/Header'
import { PostsPage } from './views/Posts/PostsPage'

function App() {
  return (
    <div className='container'>
      <Header />
      <PostsPage />
    </div>
  )
}

export default App
