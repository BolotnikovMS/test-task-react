import React, { useEffect, useMemo, useState } from 'react'

import { AxiosError } from 'axios'
import { IPost } from '../types/post.interface'
import { PostServices } from '../services/post.services'

export const usePosts = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [parameterPostsSearch, setParameterPostsSearch] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [sortedPosts, setSortedPosts] = useState<IPost[]>(posts)

  const fetchPosts = async () => {
    try {
      setIsLoading(true)
      setError(null)

      const posts = await PostServices.getAllPosts()

      setPosts(posts)
      setSortedPosts(posts)
      setIsLoading(false)
    } catch (error: unknown) {
      const e = error as AxiosError

      setIsLoading(false)
      setError(e.message)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const getSearchList = () => {
    if (!parameterPostsSearch) return sortedPosts

    return sortedPosts.filter((post: IPost) => post.title.includes(parameterPostsSearch))
  }

  const sortPosts = (pattern: string) => {
    let direction: number
    pattern === 'asc' ? direction = 1 : pattern === 'desc' ? direction = -1 : 0
    
    const sorted = [...posts].sort((a: IPost, b: IPost) => {
      if (a.title === b.title) return 0

      return a.title > b.title ? direction : direction * -1
    })
    setSortedPosts(sorted)
  }

  const resetSort = () => {
    setSortedPosts(posts)
  } 

  
  const searchPosts = useMemo(getSearchList, [parameterPostsSearch, sortedPosts])

  return { isLoading, error, setParameterPostsSearch, searchPosts, sortPosts, resetSort }
}
