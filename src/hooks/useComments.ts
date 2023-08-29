import { CommentsServices } from '../services/comment.services'
import { useQuery } from '@tanstack/react-query'

export const useComments = (postId: string | undefined) => {
  const { data: comments, error, isLoading, isError, refetch } = useQuery({
    queryFn: () => CommentsServices.getPostComments(postId || ''),
    queryKey: ['commentsPost', postId],
    staleTime: 1000 * 3,
    enabled: false,
  })

  return { comments, error, isLoading, isError, refetch }
}