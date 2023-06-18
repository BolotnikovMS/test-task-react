import React from 'react'

import './button.css'

enum ButtonTypes {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset',
}

interface PropsButton {
  children?: React.ReactNode
  name?: string
  typeBtn?: ButtonTypes
  classBtn?: string
  handlerEvent?: () => void
}

export const Button = ({
  children,
  name,
  typeBtn = ButtonTypes.Button,
  classBtn,
  handlerEvent,
}: PropsButton) => {
  const styleBtn = `btn ${classBtn ? classBtn : ''}`

  return (
    <button type={typeBtn} className={styleBtn} onClick={handlerEvent}>
      {name}
      {children}
    </button>
  )
}
