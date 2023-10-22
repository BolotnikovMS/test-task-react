import './posts.css'

import { Button, Dropdown, Error, Icon, InfoMessage, Loader, Pagination, Search, SearchList } from '../../components'
import { Link, useLocation } from 'react-router-dom'
import React, { useState } from 'react'
import { usePosts, useTitle } from '../../hooks'

import { AxiosError } from 'axios'
import { PostCard } from './components/postCard/PostCard'
import { PostServices } from '../../services/post/post.services'
import { TOrderSort } from '../../types/order.types'
import { useQuery } from '@tanstack/react-query'

const PageSize = 10

export const PostsPage = () => {
  useTitle('Posts page')
  const pageParam = new URLSearchParams(useLocation().search).get("_page") 
  const [currentPage, setCurrentPage] = useState<number>(pageParam === null ? 1 : +pageParam)
  const [patternSort, setPatternSort] = useState<TOrderSort>('asc')
  const { posts, totalCount, error, isError, isFetching, isPreviousData } = usePosts({order: patternSort, page: currentPage, size: PageSize})
  const [searchQuery, setSearchQuery] = useState<string>('')
  const { data: searchResult, error: searchError, isLoading: searchIsLoading, isError: searchIsError } = useQuery({
    enabled: searchQuery.trim().length > 1,
    queryFn: () => PostServices.getAllPosts({search: searchQuery, size: 7}),
    queryKey: ['searchResult', searchQuery],
  })  

  return (
    <div className='posts'>
      <div className='posts__content'>
        <div className='posts__titles'>
          <h2 className='title'>All posts</h2>
        </div>
        <div className="posts__control">
          <div className="posts__sort">
            <Dropdown menuItems={[
              <Button classBtn='dropdown__menu-btn' onClick={() => setPatternSort('asc')}>
                Asc
                {
                  patternSort === 'asc' ?
                  <Icon name='check'/>
                  :
                  null
                }
              </Button>,
              <Button classBtn='dropdown__menu-btn' onClick={() => setPatternSort('desc')}>
                Desc
                {
                  patternSort === 'desc' ?
                  <Icon name='check'/>
                  :
                  null
                }
              </Button>,
            ]}>
              <Icon name='sort' />
              {patternSort}
            </Dropdown> 
          </div>
          <Link to={'/new'} className='btn btn-bg_green'>Add</Link>
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} >
            {searchQuery.trim().length > 1 ? 
              <SearchList searchIsLoading={searchIsLoading} searchIsError={searchIsError} searchError={(searchError as AxiosError)} searchResult={searchResult?.data}/>
              :
              null
            }
          </Search>
        </div>
        {isFetching ? (
          <Loader />
        ) : isError ? (
          <Error message={(error as AxiosError).message} />
        ) : (
          <>
            <div className='posts__cards'>
              {
                posts?.length ? (
                  posts.map(post => <PostCard key={post.id} post={post}/>)
                ) : (
                  <InfoMessage text='No posts.' />
                )
              }
            <Pagination 
              totalCount={totalCount}
              pageSize={PageSize}
              currentPage={currentPage}
              prevData={isPreviousData} 
              setCurrentPage={setCurrentPage}
            />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
