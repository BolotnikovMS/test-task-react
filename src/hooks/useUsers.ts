import React from 'react'
import { UserServices } from '../services/user.services'
import { useQuery } from '@tanstack/react-query'

export const useUsers = () => {
  const { data: users, error, isError, isLoading, isSuccess } = useQuery({
    queryFn: () => UserServices.getAllUsers(),
    queryKey: ['users', 'all'],
    staleTime: 1000 * 20,
    keepPreviousData: true,
  })

  return { users,  isLoading, isSuccess, isError, error }
}
