import './posts.css'

import React, { useMemo, useState } from 'react'

import { AxiosError } from 'axios'
import { Button } from '../../components/buttons/Button'
import { Dropdown } from '../../components/dropdown/Dropdown'
import { Error } from '../../components/error/Error'
import { Icon } from '../../components/icon/Icon'
import { InfoMessage } from '../../components/infoMessage/InfoMessage'
import { Loader } from '../../components/loader/Loader'
import { Pagination } from '../../components/pagination/Pagination'
import { PostCard } from './components/postCard/PostCard'
import { PostPatternSortType } from '../../types/posts.types'
import { Search } from '../../components/search/Search'
import { usePosts } from '../../hooks/usePosts'

const PageSize = 10

export const PostsPage = () => {
  const [patternSort, setPatternSort] = useState<PostPatternSortType>('asc')
  const { posts, error, isLoading, isError } = usePosts(patternSort)
  const [currentPage, setCurrentPage] = useState<number>(1)
  const currentPosts = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize

    return posts?.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, posts])

  return (
    <section className='posts'>
      <div className='posts__content'>
        <div className='posts__titles'>
          <h2 className='title'>All posts</h2>
          <Search arrayToSearch={posts} keyObjSearch='title' keyObjName='title' linkPath='/posts/' />
        </div>
        <div className="posts__sort">
          <Dropdown menuItems={[
            <Button classBtn='dropdown__menu-btn' onClick={() => setPatternSort('asc')}>Asc</Button>,
            <Button classBtn='dropdown__menu-btn' onClick={() => setPatternSort('desc')}>Desc</Button>,
          ]}>
            <Icon nameIcon='sort.svg' />
            Sort
          </Dropdown> 
        </div>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Error message={(error as AxiosError).message} />
        ) : (
          <>
            <div className='posts__cards'>
              {currentPosts?.length ? (
                currentPosts.map(post => <PostCard key={post.id} post={post} />)
              ) : (
                <InfoMessage text='No posts.' />
              )}
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
