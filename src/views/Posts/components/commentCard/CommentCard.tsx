import './comment-card.css'

import { IComment } from '../../../../services/comment/comment.interface'
import React from 'react'

interface PropsCommentCard {
  comment: IComment
}

export const CommentCard = ({ comment }: PropsCommentCard) => {
  return (
    <div className='card__comment'>
      <div className='card__comment-header'>{comment.user?.email}</div>
      <div className='card__comment-body'>{comment.commentBody}</div>
    </div>
  )
}
