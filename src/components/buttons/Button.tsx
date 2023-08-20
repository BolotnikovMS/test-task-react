import './button.css'

import React from 'react'
import cx from 'classnames'

enum ButtonTypes {
  Button = 'button',
  Submit = 'submit',
  Reset = 'reset',
}

interface PropsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  typeBtn?: ButtonTypes
  classBtn?: string
}

export const Button = ({
  children,
  typeBtn = ButtonTypes.Button,
  classBtn,
  ...attributes
}: PropsButton) => {
  return (
    <button type={typeBtn} className={cx('btn', classBtn)} {...attributes}>
      {children}
    </button>
  )
}
