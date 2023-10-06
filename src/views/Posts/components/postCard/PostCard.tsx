import './post-card.css'

import { Button, Error, Icon, Loader } from '../../../../components'
import React, { useEffect, useState } from 'react'

import { AxiosError } from 'axios'
import { CommentCard } from '../commentCard/CommentCard'
import { IPost } from '../../../../interfaces'
import { Link } from 'react-router-dom'
import cx from 'classnames';
import { useComments } from '../../../../hooks'

interface PropsPostCards {
  post: IPost
}

export const PostCard = ({ post }: PropsPostCards) => {
  const [show, setShow] = useState<boolean>(false)
  const { comments, error, isLoading, isError, refetch } = useComments(String(post.id))
  const mediaQuery = '(max-width: 425px)'
  const mediaQueryMatch = window.matchMedia(mediaQuery)
  const [isMobile, setIsMobile] = useState(false)

  const showComments = () => {
    setShow(!show)
  }

  useEffect(() => {
    if (show === true) refetch()
  }, [refetch, show])

  useEffect(() => {
    const handleClassByMediaQuery = (event: { matches: any }) => {
      const isMobile = event.matches

      return setIsMobile(isMobile)
    }
    mediaQueryMatch.addEventListener('change', handleClassByMediaQuery)

    return () => {
      mediaQueryMatch.removeEventListener('change', handleClassByMediaQuery)
    }
  }, [isMobile, mediaQueryMatch])

  return (
    <div className='card'>
      <div className='card__content'>
        <div className='card__title'>{post.title}</div>
        <div className='card__body'>{post.body}</div>
        <div className='card__footer'>
          <div className='card__btns'>
            <Button classBtn='btn-bg_blue' onClick={showComments}>
              Комментарии
              {show ? <Icon nameIcon='uparrow.svg' /> : <Icon nameIcon='downarrow.svg' />}
            </Button>
          </div>
          <div className='card__author'>
            <Link to={`/users/${post.userId}`}>
              <Icon nameIcon='user.svg' classIcon={cx({'icon_wh-21': isMobile, 'icon_wh-25': !isMobile})} altTextIcon='Icon user' />
            </Link>
          </div>
        </div>
        {show ? (
          isLoading ? (
            <Loader />
          ) : isError ? (
            <Error message={(error as AxiosError).message} />
          ) : (
            <div className='card__comments'>
              {comments &&
                comments.map(comment => <CommentCard key={comment.id} comment={comment} />)}
            </div>
          )
        ) : null}
      </div>
    </div>
  )
}
