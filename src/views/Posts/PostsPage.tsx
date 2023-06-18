import React, { useMemo, useState } from 'react'

import './posts.css'
import { PostCard } from './components/postCard/PostCard'
import { Loader } from '../../components/loader/Loader'
import { Error } from '../../components/error/Error'
import { usePosts } from '../../hooks/usePosts'
import { Pagination } from '../../components/pagination/Pagination'
import { Search } from '../../components/search/Search'

const PageSize = 10

export const PostsPage = () => {
  const { filterPosts, isLoading, error, setSearchPostTopic } = usePosts()
  const [currentPage, setCurrentPage] = useState(1)
  const currentPosts = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize

    return filterPosts?.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, filterPosts])

  return (
    <section className='posts'>
      <div className='posts__content'>
        <div className='posts__titles'>
          <h2 className='title'>All posts</h2>
          <Search searchText={setSearchPostTopic} />
        </div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : (
          <>
            <div className='posts__cards'>
              {currentPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
              <Pagination
                currentPage={currentPage}
                totalCount={filterPosts?.length}
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
