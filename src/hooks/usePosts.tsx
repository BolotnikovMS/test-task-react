import React, { useEffect, useState } from 'react'

import { IPost } from '../types/post.interface'
import { PostServices } from '../services/post.services'
import { AxiosError } from 'axios'

export const usePosts = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchPosts = async () => {
    try {
      setIsLoading(true)
      setError('')

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

  return { posts, isLoading, error }
}
