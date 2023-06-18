import React from 'react'

import './user-card.css'
import { Link } from 'react-router-dom'
import { IUser } from '../../../../types/user.interface'
import { Icon } from '../../../../components/icon/Icon'

interface PropsUserCard {
  user: IUser
}

export const UserCard = ({ user }: PropsUserCard) => {
  return (
    <div className='user__card'>
      <Link to={`/users/${user.id}`} className='user__link' />
      <div className='user__card-body'>
        <Icon nameIcon='user.svg' classIcon='icon_wh-25' altText='Icon user' />
        <span className='user__card-text'>{user.name}</span>
      </div>
      <hr className='line' />
      <div className='user__card-footer'>Email: {user.email}</div>
    </div>
  )
}
