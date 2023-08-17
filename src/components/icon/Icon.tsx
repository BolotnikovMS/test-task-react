import './icon.css'

import React from 'react'

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
      className={`icon ${classIcon ? classIcon : ''}`}
      alt={altTextIcon ? altTextIcon : nameIcon}
    />
  )
}
