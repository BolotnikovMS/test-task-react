import React from 'react'

import './post-card.css'
import avatarImg from './../../../../assets/img/icons/user.svg'
import { IPost } from '../../../../types/post.interface'
import { Button } from '../../../../components/buttons/Button'
import { Link } from 'react-router-dom'

interface PropsPostCards {
  post: IPost
}

export const PostCard = ({ post }: PropsPostCards) => {
  return (
    <div className='card'>
      <div className='card__content'>
        <div className='card__title'>{post.title}</div>
        <div className='card__body'>{post.body}</div>
        <div className='card__footer'>
          <div className='card__btns'>
            <Button name='Комментарии' />
          </div>
          <div className='card__author'>
            <Link to={`/users/${post.userId}`}>
              <img src={avatarImg} alt='Avatar' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
