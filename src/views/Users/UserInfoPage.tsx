import './users.css'

import { Error, Icon, InfoMessage, Loader } from '../../components'
import { Link, useParams } from 'react-router-dom'

import { AxiosError } from 'axios'
import { PostCard } from '../Posts/components/postCard/PostCard'
import React from 'react'
import { UserGroup } from './components/userGroup/UserGroup'
import { usePostsUser } from '../../hooks/usePostsUser'
import { useUser } from '../../hooks/useUser'

export const UserInfoPage = () => {
  const { id } = useParams()
  const { user, error, isLoading, isError } = useUser(id)
  const { userPosts, error: errorPost, isLoading: isLoadingPosts, isError: isErrorPosts } = usePostsUser(id)

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
            <h3 className='title-1'>User posts</h3>
            <div className="user__posts">
              {
                isLoadingPosts ? (
                  <Loader />
                ) : isErrorPosts ? (
                  <Error message={(errorPost as AxiosError).message}/>
                ) : (
                  userPosts?.length ? (
                    userPosts.map(post => <PostCard key={post.id} post={post}/>)
                  ) : (
                    <InfoMessage text='No posts.'/>  
                  )
                )
              }
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
