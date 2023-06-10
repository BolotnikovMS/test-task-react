import React from 'react'

import './user-card.css'
import { Link } from 'react-router-dom'
import { IUser } from '../../../../types/user.interface'

interface PropsUserCard {
  user: IUser
}

export const UserCard = ({ user }: PropsUserCard) => {
  return (
    <div className='user__card'>
      <Link to={`/users/${user.id}`} className='user__link' />
      <div className='user__card-body'>{user.name}</div>
      <hr className='line' />
      <div className='user__card-footer'>{user.email}</div>
    </div>
  )
}
