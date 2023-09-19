import { PostPatternSortType } from '../types/posts.types'
import { PostServices } from '../services/post.services'
import React from 'react'
import { useQuery } from '@tanstack/react-query'

interface IUsePosts {
  pattern: PostPatternSortType
  page?: number
  limit?: number
}

export const usePosts = ({pattern, page, limit}: IUsePosts) => {
  const { data, error, isError, isLoading, isFetching, isPreviousData } = useQuery({
    queryKey: ['posts', pattern, page],
    queryFn: () => PostServices.getAllPosts({patternOrder: pattern, page, limit}),
    staleTime: 1000 * 10,
    keepPreviousData: true,
  })
  const totalCount = data?.headers['x-total-count']
  const posts = data?.data
  
  return { posts, totalCount, error, isLoading, isError, isFetching, isPreviousData }
}
