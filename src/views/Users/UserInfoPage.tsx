import './users.css'

import { Link, useParams } from 'react-router-dom'

import { AxiosError } from 'axios'
import { Error } from '../../components/error/Error'
import { Icon } from '../../components/icon/Icon'
import { Loader } from '../../components/loader/Loader'
import React from 'react'
import { UserGroup } from './components/userGroup/UserGroup'
import { useUser } from '../../hooks/useUser'

export const UserInfoPage = () => {
  const { id } = useParams()
  const { user, isLoading, isError, error } = useUser(id)

  return (
    <section className='users'>
      <div className='users__content'>
        <h2 className='title'>User info</h2>
        {isLoading ? (
          <Loader />
        ) : isError ? (
          <Error message={(error as AxiosError).message} />
        ) : (
          <>
            <div className='user__info'>
              <UserGroup groupName='Name' value={user?.name} />
              <UserGroup groupName='Username' value={user?.username} />
              <UserGroup groupName='Email' value={user?.email} />
              <UserGroup groupName='Phone' value={user?.phone} />
              <UserGroup groupName='Website' value={user?.website} />
              <UserGroup groupName='Company' value={user?.company.name} />
            </div>
            <div className="user__posts">
              <h3>User posts</h3>
            </div>
            <div className="users__btns">
              <Link to={'/'} className='link'>
                <Icon nameIcon='arrow-left.svg'/>
                Back to homepage
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
