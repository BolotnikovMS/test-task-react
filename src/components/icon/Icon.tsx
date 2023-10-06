import './icon.css'

import { IPropsIcon } from './icon.interface'
import React from 'react'
import cx from 'classnames'

export const Icon = ({ nameIcon, classIcon, altTextIcon }: IPropsIcon) => {
  const iconPath = `./../../../img/icons/${nameIcon}`

  return (
    <img
      src={iconPath}
      className={cx('icon', classIcon)}
      alt={altTextIcon ? altTextIcon : nameIcon}
    />
  )
}
