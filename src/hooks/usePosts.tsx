import { PostPatternSortType } from '../types/posts.types'
import { PostServices } from '../services/post.services'
import React from 'react'
import { useQuery } from '@tanstack/react-query'

export const usePosts = (pattern: PostPatternSortType) => {
  const { data: posts, error, isError, isLoading } = useQuery({
    queryFn: () => PostServices.getAllPosts(pattern),
    queryKey: ['posts', pattern],
    staleTime: 1000 * 10,
    keepPreviousData: true,
  })

  return { posts, error, isLoading, isError }
}
