import React from 'react'

import './button.css'
import { Icon } from '../icon/Icon'

enum ButtonTypes {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset',
}

interface PropsButton {
  name: string
  typeBtn?: ButtonTypes
  classBtn?: string
  handlerEvent?: () => void
  iconName?: string
}

export const Button = ({ name, typeBtn, iconName, classBtn, handlerEvent }: PropsButton) => {
  const styleBtn = `btn ${classBtn ? classBtn : ''}`

  return (
    <button type={typeBtn} className={styleBtn} onClick={handlerEvent}>
      {name}
      {iconName ? <Icon nameIcon={iconName} /> : null}
    </button>
  )
}
