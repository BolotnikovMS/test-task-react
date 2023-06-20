import React, { useMemo, useState } from 'react'

import './posts.css'
import { PostCard } from './components/postCard/PostCard'
import { Loader } from '../../components/loader/Loader'
import { Error } from '../../components/error/Error'
import { usePosts } from '../../hooks/usePosts'
import { Pagination } from '../../components/pagination/Pagination'
import { Search } from '../../components/search/Search'
import { InfoMessage } from '../../components/infoMessage/infoMessage'

const PageSize = 10

export const PostsPage = () => {
  const { searchPosts, isLoading, error, setParameterPostsSearch } = usePosts()
  const [currentPage, setCurrentPage] = useState(1)
  const currentPosts = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize

    return searchPosts?.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, searchPosts])

  return (
    <section className='posts'>
      <div className='posts__content'>
        <div className='posts__titles'>
          <h2 className='title'>All posts</h2>
          <Search searchText={setParameterPostsSearch} />
        </div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : (
          <>
            <div className='posts__cards'>
              {currentPosts.length ? (
                currentPosts.map(post => <PostCard key={post.id} post={post} />)
              ) : (
                <InfoMessage text='No posts.' />
              )}
              <Pagination
                currentPage={currentPage}
                totalCount={searchPosts?.length}
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
