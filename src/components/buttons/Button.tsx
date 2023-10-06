import './button.css'

import { ButtonTypes } from './button.enum'
import { IPropsButton } from './button.interface'
import React from 'react'
import cx from 'classnames'

export const Button = ({
  children,
  typeBtn = ButtonTypes.Button,
  classBtn,
  ...attributes
}: IPropsButton) => {
  return (
    <button type={typeBtn} className={cx('btn', classBtn)} {...attributes}>
      {children}
    </button>
  )
}
