import './posts.css'

import { Button, Dropdown, Error, Icon, InfoMessage, Loader, Pagination, Search, SearchList } from '../../components'
import React, { useMemo, useState } from 'react'

import { AxiosError } from 'axios'
import { PostCard } from './components/postCard/PostCard'
import { PostPatternSortType } from '../../types/posts.types'
import { PostServices } from '../../services/post.services'
import { usePosts } from '../../hooks/usePosts'
import { useQuery } from '@tanstack/react-query'

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

  const [searchQuery, setSearchQuery] = useState<string>('')
  const { data: searchResult, error: searchError, isLoading: searchIsLoading, isError: searchIsError } = useQuery({
    queryFn: () => PostServices.getAllPosts({searchString: searchQuery}),
    queryKey: ['searchResult', searchQuery],
    enabled: !!searchQuery
  })

  const handleChanges = (value: string) => {
    setSearchQuery(value)
  }

  return (
    <section className='posts'>
      <div className='posts__content'>
        <div className='posts__titles'>
          <h2 className='title'>All posts</h2>
          <Search onChange={handleChanges} searchQuery={searchQuery} setSearchQuery={setSearchQuery} >
            {searchQuery ? 
              <SearchList searchIsLoading={searchIsLoading} searchIsError={searchIsError} searchError={(searchError as AxiosError)} searchResult={searchResult}/>
              :
              null
            }
          </Search>
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
