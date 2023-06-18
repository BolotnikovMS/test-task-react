import React, { useEffect, useMemo, useState } from 'react'

import { IPost } from '../types/post.interface'
import { PostServices } from '../services/post.services'
import { AxiosError } from 'axios'

export const usePosts = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [searchPostTopic, setSearchPostTopic] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPosts = async () => {
    try {
      setIsLoading(true)
      setError(null)

      const posts = await PostServices.getAllPosts()

      setPosts(posts)
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

  const getFilteredList = () => {
    if (!searchPostTopic) return posts

    return posts.filter((post: IPost) => post.title.includes(searchPostTopic))
  }

  const filterPosts = useMemo(getFilteredList, [searchPostTopic, posts])

  return { posts, isLoading, error, setSearchPostTopic, filterPosts }
}
