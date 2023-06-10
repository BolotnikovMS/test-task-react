import React from 'react'

import './users.css'
import { UserCard } from './components/userCard/UserCard'
import { useUsers } from '../../hooks/useUsers'
import { Error } from '../../components/error/Error'
import { Loader } from '../../components/loader/Loader'

export const UsersPage = () => {
  const { users, isLoading, error } = useUsers()

  return (
    <section className='users'>
      <div className='user__content'>
        <h2 className='title'>All users</h2>
        {error ? (
          <Error message={error} />
        ) : isLoading ? (
          <Loader />
        ) : (
          <div className='users__cards'>
            {users?.map(userItem => (
              <UserCard key={userItem.id} user={userItem} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
