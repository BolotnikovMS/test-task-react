import React, { useMemo, useState } from 'react'

import './posts.css'
import { PostCard } from './components/postCard/PostCard'
import { Loader } from '../../components/loader/Loader'
import { Error } from '../../components/error/Error'
import { usePosts } from '../../hooks/usePosts'
import { Pagination } from '../../components/pagination/Pagination'

const PageSize = 10

export const PostsPage = () => {
  const { posts, isLoading, error } = usePosts()
  const [currentPage, setCurrentPage] = useState(1)
  const currentPosts = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return posts?.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, posts])

  return (
    <section className='posts'>
      <div className='posts__content'>
        <h2 className='title'>All posts</h2>
        {error ? (
          <Error message={error} />
        ) : isLoading ? (
          <Loader />
        ) : (
          <>
            <div className='posts__cards'>
              {currentPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
              <Pagination
                currentPage={currentPage}
                totalCount={posts?.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
              />
            </div>
          </>
        )}
      </div>
    </section>
  )
}
