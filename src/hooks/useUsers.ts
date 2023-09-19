import React from 'react'
import { UserServices } from '../services/user.services'
import { useQuery } from '@tanstack/react-query'

interface IUseUsers {
  page?: number
  limit?: number
}

export const useUsers = ({ page, limit }: IUseUsers) => {
  const { data, error, isError, isLoading, isSuccess, isFetching, isPreviousData } = useQuery({
    queryFn: () => UserServices.getAllUsers({page, limit}),
    queryKey: ['users', 'all', page],
    staleTime: 1000 * 20,
    keepPreviousData: true,
  })
  const totalCount = data?.headers['x-total-count']
  const users = data?.data


  return { users, totalCount,  isLoading, isSuccess, isError, error, isFetching, isPreviousData }
}
