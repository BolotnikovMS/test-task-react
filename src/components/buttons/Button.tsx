import './button.css'

import { IPropsButton } from './button.interface'
import React from 'react'
import cx from 'classnames'

export const Button = ({
  children,
  classBtn,
  ...attributes
}: IPropsButton) => {
  return (
    <button className={cx('btn', classBtn)} {...attributes}>
      {children}
    </button>
  )
}
