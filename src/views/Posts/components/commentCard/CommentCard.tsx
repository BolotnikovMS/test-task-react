import './comment-card.css'

import { IComment } from '../../../../interfaces'
import React from 'react'

interface PropsCommentCard {
  comment: IComment
}

export const CommentCard = ({ comment }: PropsCommentCard) => {
  return (
    <div className='card__comment'>
      <div className='card__comment-header'>{comment.email}</div>
      <div className='card__comment-body'>{comment.body}</div>
    </div>
  )
}
