import React from 'react'

import './info-message.css'

interface PropsInfoMessage {
  text: string
}

export const InfoMessage = ({ text }: PropsInfoMessage) => {
  return (
    <div className='info-message'>
      <div className='info-message__text'>{text}</div>
    </div>
  )
}
