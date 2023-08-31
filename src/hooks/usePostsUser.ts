import { UserServices } from '../services/user.services'
import { useQuery } from '@tanstack/react-query'

export const usePostsUser = (id: string | undefined) => {
  const { data: userPosts, error, isLoading, isError } = useQuery({
    queryFn: () => UserServices.getPostsByUserId(id || ''),
    queryKey: ['userPosts', id],
    staleTime: 1000 * 50,
    enabled: !!id,
  })

  return { userPosts, error, isLoading, isError }
}