import { UserServices } from '../services/user.services'
import { useQuery } from '@tanstack/react-query'

export const useUser = (id: string | undefined) => {
  const { data: user, isLoading, isError, error } = useQuery({
    queryFn: () => UserServices.getUserById(id || ''),
    queryKey: ['user', id],
    staleTime: 1000 * 20,
    enabled: !!id,
  })

  return { user, isLoading, isError, error }
}