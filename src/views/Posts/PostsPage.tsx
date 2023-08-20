import './posts.css'

import React, { useMemo, useState } from 'react'

import { Button } from '../../components/buttons/Button'
import { Dropdown } from '../../components/dropdown/Dropdown'
import { Error } from '../../components/error/Error'
import { Icon } from '../../components/icon/Icon'
import { InfoMessage } from '../../components/infoMessage/InfoMessage'
import { Loader } from '../../components/loader/Loader'
import { Pagination } from '../../components/pagination/Pagination'
import { PostCard } from './components/postCard/PostCard'
import { Search } from '../../components/search/Search'
import { usePosts } from '../../hooks/usePosts'

const PageSize = 10

export const PostsPage = () => {
  const { searchPosts, isLoading, error, setParameterPostsSearch, sortPosts, resetSort } = usePosts()
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
        <div className="posts__sorte">
          <Dropdown menuItems={[
            <Button classBtn='dropdown__menu-btn' onClick={() => sortPosts('asc')}>Asc</Button>,
            <Button classBtn='dropdown__menu-btn' onClick={() => sortPosts('desc')}>Desc</Button>,
            <Button classBtn='dropdown__menu-btn' onClick={resetSort}>Reset sort</Button>,
          ]}>
            <Icon nameIcon='sort.svg' />
            Sort
          </Dropdown> 
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
