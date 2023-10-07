import './user-card.css'

import { IUser } from '../../../../interfaces'
import { Icon } from '../../../../components'
import { Link } from 'react-router-dom'
import React from 'react'

interface PropsUserCard {
  user: IUser
}

export const UserCard = ({ user }: PropsUserCard) => {
  return (
    <div className='user__card'>
      <Link to={`/users/${user.id}`} className='user__link' />
      <div className='user__card-body'>
        <Icon name='user' className='icon_wh-25' />
        <span className='user__card-text-fs user__card-text-fs_21 user__card-text-bold'>{user.name}</span>
      </div>
      <hr className='line' />
      <div className='user__card-footer'>
        <span className="user__card-text">
          Email: {user.email}
        </span>
      </div>
    </div>
  )
}
