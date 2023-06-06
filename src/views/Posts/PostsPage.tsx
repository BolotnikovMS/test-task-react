import React from 'react'

import './posts.css'
import { PostCard } from './components/postCard/PostCard'
import { Loader } from '../../components/loader/Loader'
import { Error } from '../../components/error/Error'
import { usePosts } from '../../hooks/usePosts'

export const PostsPage = () => {
  const { posts, isLoading, error } = usePosts()

  return (
    <>
      {error ? (
        <Error message={error} />
      ) : (
        <section className='posts'>
          <div className='posts__content'>
            <h2 className='title'>All posts</h2>
            {isLoading && <Loader />}
            <div className='posts__cards'>
              {posts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
