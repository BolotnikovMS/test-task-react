import './post-card.css'

import React, { useState } from 'react'

import { AxiosError } from 'axios'
import { Button } from '../../../../components/buttons/Button'
import { CommentCard } from '../commentCard/CommentCard'
import { CommentsServices } from '../../../../services/comment.services'
import { Error } from '../../../../components/error/Error'
import { IComment } from '../../../../types/comment.interface'
import { IPost } from '../../../../types/post.interface'
import { Icon } from '../../../../components/icon/Icon'
import { Link } from 'react-router-dom'
import { Loader } from '../../../../components/loader/Loader'

interface PropsPostCards {
  post: IPost
}

export const PostCard = ({ post }: PropsPostCards) => {
  const [comments, setComments] = useState<IComment[]>([])
  const [show, setShow] = useState(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const fetchCommentsPost = async (idPost: number) => {
    try {
      setIsLoading(true)
      setError(null)

      const response = await CommentsServices.getPostComments(idPost)

      setComments(response)
      setIsLoading(false)
    } catch (error) {
      const e = error as AxiosError

      setIsLoading(false)
      setError(e.message)
    }
  }

  const showComments = () => {
    setShow(!show)

    if (!show) fetchCommentsPost(post.id)
  }

  return (
    <div className='card'>
      <div className='card__content'>
        <div className='card__title'>{post.title}</div>
        <div className='card__body'>{post.body}</div>
        <div className='card__footer'>
          <div className='card__btns'>
            <Button name='Комментарии' classBtn='btn-bg_blue' handlerEvent={showComments}>
              {show ? <Icon nameIcon='uparrow.svg' /> : <Icon nameIcon='downarrow.svg' />}
            </Button>
          </div>
          <div className='card__author'>
            <Link to={`/users/${post.userId}`}>
              <Icon nameIcon='user.svg' classIcon='icon_wh-25' altTextIcon='Icon user' />
            </Link>
          </div>
        </div>
        {show ? (
          isLoading ? (
            <Loader />
          ) : error ? (
            <Error message={error} />
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
