import './posts.css'

import { Error } from '../../components/error/Error'
import { Icon } from '../../components/icon/Icon';
import { Link } from 'react-router-dom'
import { Loader } from '../../components/loader/Loader'
import React from 'react'
import { usePosts } from '../../hooks/usePosts'

export const PostInfoPage = () => {
  const { post, isLoading, error } = usePosts()

  return (
    <section className='posts'>
      <div className="posts__content">
        {
          isLoading ? (
            <Loader />
          ) : error ? (
            <Error message={error} />
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
                  <Icon nameIcon='arrow-left.svg'/>
                  Back to homepage
                </Link>
              </div>
            </>
          )
        }
      </div>
    </section>
  )
}
