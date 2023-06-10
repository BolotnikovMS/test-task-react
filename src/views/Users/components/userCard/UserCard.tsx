import React from 'react'

import './user-card.css'
import userIcon from './../../../../assets/img/icons/user.svg'
import { Link } from 'react-router-dom'
import { IUser } from '../../../../types/user.interface'

interface PropsUserCard {
  user: IUser
}

export const UserCard = ({ user }: PropsUserCard) => {
  return (
    <div className='user__card'>
      <Link to={`/users/${user.id}`} className='user__link' />
      <div className='user__card-body'>
        <img src={userIcon} alt='User avatar' className='user__card-img' />
        <span className='user__card-text'>{user.name}</span>
      </div>
      <hr className='line' />
      <div className='user__card-footer'>Email: {user.email}</div>
    </div>
  )
}
