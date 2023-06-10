import React from 'react'

interface PropsUserGroup {
  groupName: string
  value: string | undefined
}

export const UserGroup = ({ groupName, value }: PropsUserGroup) => {
  return (
    <div className='user__group'>
      {groupName + ':'}
      <span className='user__text'>{value}</span>
    </div>
  )
}
