import './posts.css'

import { Link, useParams } from 'react-router-dom'

import { AxiosError } from 'axios'
import { Error } from '../../components/error/Error'
import { Icon } from '../../components/icon/Icon';
import { Loader } from '../../components/loader/Loader'
import React from 'react'
import { usePost } from '../../hooks'

export const PostInfoPage = () => {
  const { id } = useParams()
  const { post, error, isLoading, isError } = usePost(id)

  return (
    <div className='posts'>
      <div className="posts__content">
        {
          isLoading ? (
            <Loader />
          ) : isError ? (
            <Error message={(error as AxiosError).message} />
          ) : (
            <>
              <div className="posts__titles">
                <h2 className="title">{post?.title}</h2>
              </div>
              <div className="posts__body">
                <p>{post?.body}</p>
              </div>
              <div className="posts__btn">
                <Link to={'/'} className='link'>
                  <Icon name='arrow-left'/>
                  Back to homepage
                </Link>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}
