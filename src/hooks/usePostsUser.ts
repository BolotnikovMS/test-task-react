import { UserServices } from '../services/user/user.services'
import { useQuery } from '@tanstack/react-query'

export const usePostsUser = (id: string | undefined) => {
  const { data, error, isLoading, isError } = useQuery({
    queryFn: () => UserServices.getPostsByUserId(id || ''),
    queryKey: ['userPosts', id],
    staleTime: 1000 * 50,
    enabled: !!id,
  })

  const userPosts = data?.data

  return { userPosts, error, isLoading, isError }
}