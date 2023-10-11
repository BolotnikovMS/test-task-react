import { PostServices } from '../services/post/post.services'
import React from 'react'
import { TOrderSort } from '../types/order.types'
import { useQuery } from '@tanstack/react-query'

interface IUsePosts {
  order: TOrderSort
  page?: number
  size?: number
}

export const usePosts = ({order, page, size}: IUsePosts) => {
  const { data, error, isError, isLoading, isFetching, isPreviousData } = useQuery({
    queryKey: ['posts', order, page],
    queryFn: () => PostServices.getAllPosts({order, page, size}),
    staleTime: 1000 * 10,
    keepPreviousData: true,
  })

  const totalCount = data?.meta.total || 0
  const posts = data?.data
  
  return { posts, totalCount, error, isLoading, isError, isFetching, isPreviousData }
}
