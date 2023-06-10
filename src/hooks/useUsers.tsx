import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { AxiosError } from 'axios'

import { IUser } from '../types/user.interface'
import { UserServices } from '../services/user.services'

export const useUsers = () => {
  const [users, setUsers] = useState<IUser[]>()
  const [user, setUser] = useState<IUser>()
  const { id } = useParams()
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const fetchUsers = async () => {
    try {
      setIsLoading(true)
      setError('')

      const users: IUser[] = await UserServices.getAllUsers()

      setUsers(users)
      setIsLoading(false)
    } catch (error: unknown) {
      const e = error as AxiosError

      setIsLoading(false)
      setError(e.message)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUser = async (id: number) => {
    if (!id) return

    try {
      setIsLoading(true)
      setError('')

      const user: IUser = await UserServices.getUserById(id)

      setUser(user)
      setIsLoading(false)
    } catch (error: unknown) {
      const e = error as AxiosError

      setIsLoading(false)
      setError(e.message)
    }
  }

  useEffect(() => {
    if (!id) return

    fetchUser(parseInt(id))
  }, [id])

  return { users, user, isLoading, error }
}
