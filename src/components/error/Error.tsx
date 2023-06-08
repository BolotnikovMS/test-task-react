import React from 'react'

import './error.css'

interface PropsError {
  message: string
}

export const Error = ({ message }: PropsError) => {
  return (
    <div className='errors'>
      <div className='error__message'>{message} :(</div>
    </div>
  )
}
