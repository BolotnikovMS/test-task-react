import React, { useEffect, useState } from 'react'

import './post-card.css'
import { IPost } from '../../../../types/post.interface'
import { Button } from '../../../../components/buttons/Button'
import { Link } from 'react-router-dom'
import { AxiosError } from 'axios'
import { CommentsServices } from '../../../../services/comment.services'
import { IComment } from '../../../../types/comment.interface'
import { CommentCard } from '../commentCard/CommentCard'
import { Loader } from '../../../../components/loader/Loader'
import { Icon } from '../../../../components/icon/Icon'

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
    fetchCommentsPost(post.id)
  }

  return (
    <div className='card'>
      <div className='card__content'>
        <div className='card__title'>{post.title}</div>
        <div className='card__body'>{post.body}</div>
        <div className='card__footer'>
          <div className='card__btns'>
            <Button
              name='Комментарии'
              iconName={show ? 'uparrow.svg' : 'downarrow.svg'}
              handlerEvent={showComments}
            />
          </div>
          <div className='card__author'>
            <Link to={`/users/${post.userId}`}>
              <Icon nameIcon='user.svg' classIcon='icon_wh-25' altText='Icon user' />
            </Link>
          </div>
        </div>
        {show ? (
          isLoading ? (
            <Loader />
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
