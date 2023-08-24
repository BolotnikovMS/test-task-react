import React, { useEffect, useState } from 'react'

import { AxiosError } from 'axios'
import { IPost } from '../types/post.interface'
import { PostServices } from '../services/post.services'
import { useParams } from 'react-router-dom'

export const usePosts = () => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [post, setPost] = useState<IPost>()
  const { id } = useParams()
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

  const fetchPost = async (id: number) => {
    if (!id) return

    try {
      setIsLoading(true)
      setError('')

      const post: IPost = await PostServices.getPostById(id)

      setPost(post)
      setIsLoading(false)
    } catch (error: unknown) {
      const e = error as AxiosError

      setIsLoading(false)
      setError(e.message)
    }
  }

  useEffect(() => {
    if (!id) return
    
    fetchPost(+id)
  }, [id])

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

  return { posts, post, isLoading, error, sortedPosts, sortPosts, resetSort }
}
