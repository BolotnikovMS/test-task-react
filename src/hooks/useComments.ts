import { CommentsServices } from '../services/comment/comment.services'
import { useQuery } from '@tanstack/react-query'

export const useComments = (postSlug: string | undefined) => {
  const { data, error, isLoading, isError, refetch } = useQuery({
    queryFn: () => CommentsServices.getPostComments(postSlug || ''),
    queryKey: ['commentsPost', postSlug],
    staleTime: 1000 * 3,
    enabled: false,
  })

  const comments = data?.data

  return { comments, error, isLoading, isError, refetch }
}