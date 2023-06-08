import React from 'react'

import './users.css'
import { useUsers } from '../../hooks/useUsers'
import { Loader } from '../../components/loader/Loader'
import { Error } from '../../components/error/Error'

export const UserInfoPage = () => {
  const { user, isLoading, error } = useUsers()

  return (
    <section className='users'>
      <div className='users__content'>
        <h2 className='title'>User info</h2>
        {error ? (
          <Error message={error} />
        ) : (
          <div className='user__info'>
            <div className='user__group'>
              Name:
              <span className='user__text'>{user?.name}</span>
            </div>
            <div className='user__group'>
              Username:
              <span className='user__text'>{user?.username}</span>
            </div>
            <div className='user__group'>
              Email:
              <span className='user__text'>{user?.email}</span>
            </div>
            <div className='user__group'>
              Phone:
              <span className='user__text'>{user?.phone}</span>
            </div>
            <div className='user__group'>
              Website:
              <span className='user__text'>{user?.website}</span>
            </div>
            <div className='user__group'>
              Company:
              <span className='user__text'>{user?.company.name}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
