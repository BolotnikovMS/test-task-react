import './icon.css'

import { IPropsIcon } from './icon.interface'
import Icons from './../../assets/img/icons/sprite.svg'
import React from 'react'
import cx from 'classnames'

export const Icon = ({ name, className }: IPropsIcon) => {

  return (
    <svg className={cx('icon', className)}>
      <use href={`${Icons}#${name}`}></use>
    </svg>
  )
}
