import React from 'react'

import './button.css'

enum ButtonTypes {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset',
}

interface PropsButton {
  name: string
  typeBtn?: ButtonTypes
  classBtn?: string
}

export const Button = ({ name, typeBtn, classBtn }: PropsButton) => {
  const styleBtn = `btn ${classBtn ? classBtn : ''}`

  return (
    <button type={typeBtn} className={styleBtn}>
      {name}
    </button>
  )
}
