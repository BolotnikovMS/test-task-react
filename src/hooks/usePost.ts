import { PostServices } from '../services/post/post.services'
import { useQuery } from '@tanstack/react-query'

export const usePost = (id: string | undefined) => {
  const { data: post, error, isLoading, isError } = useQuery({
    queryFn: () => PostServices.getPostById(id || ''),
    queryKey: ['post', id],
    staleTime: 1000 * 10,
    enabled: !!id,
  })

  return { post, error, isLoading, isError }
}