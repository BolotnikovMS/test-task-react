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
        <Icon nameIcon='user.svg' classIcon='icon_wh-25' altTextIcon='Icon user' />
        <span className='user__card-text'>{user.name}</span>
      </div>
      <hr className='line' />
      <div className='user__card-footer'>Email: {user.email}</div>
    </div>
  )
}
