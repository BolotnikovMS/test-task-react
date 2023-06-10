import React from 'react'

import './users.css'
import { useUsers } from '../../hooks/useUsers'
import { Loader } from '../../components/loader/Loader'
import { Error } from '../../components/error/Error'
import { UserGroup } from './components/userGroup/UserGroup'

export const UserInfoPage = () => {
  const { user, isLoading, error } = useUsers()

  return (
    <section className='users'>
      <div className='users__content'>
        <h2 className='title'>User info</h2>
        {error ? (
          <Error message={error} />
        ) : isLoading ? (
          <Loader />
        ) : (
          <div className='user__info'>
            <UserGroup groupName='Name' value={user?.name} />
            <UserGroup groupName='Username' value={user?.username} />
            <UserGroup groupName='Email' value={user?.email} />
            <UserGroup groupName='Phone' value={user?.phone} />
            <UserGroup groupName='Website' value={user?.website} />
            <UserGroup groupName='Company' value={user?.company.name} />
          </div>
        )}
      </div>
    </section>
  )
}
