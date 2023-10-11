import React from 'react'
import { UserServices } from '../services/user/user.services'
import { useQuery } from '@tanstack/react-query'

interface IUseUsers {
  page?: number
  size?: number
}

export const useUsers = ({ page, size }: IUseUsers) => {
  const { data, error, isError, isLoading, isSuccess, isFetching, isPreviousData } = useQuery({
    queryFn: () => UserServices.getAllUsers({page, size}),
    queryKey: ['users', 'all', page],
    staleTime: 1000 * 20,
    keepPreviousData: true,
  })
  const totalCount = data?.meta.total || 0
  const users = data?.data

  return { users, totalCount,  isLoading, isSuccess, isError, error, isFetching, isPreviousData }
}
