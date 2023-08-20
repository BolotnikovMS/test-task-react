import './icon.css'

import React from 'react'
import cx from 'classnames'

interface PropsIcon {
  nameIcon: string
  classIcon?: string
  altTextIcon?: string
}

export const Icon = ({ nameIcon, classIcon, altTextIcon }: PropsIcon) => {
  const iconPath = `./../../../public/img/icons/${nameIcon}`

  return (
    <img
      src={iconPath}
      className={cx('icon', classIcon)}
      alt={altTextIcon ? altTextIcon : nameIcon}
    />
  )
}
