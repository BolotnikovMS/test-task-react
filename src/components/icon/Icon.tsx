import React from 'react'

import './icon.css'

interface PropsIcon {
  nameIcon: string
  classIcon?: string
  altText?: string
}

export const Icon = ({ nameIcon, classIcon, altText }: PropsIcon) => {
  const iconPath = `./../../../public/img/icons/${nameIcon}`

  return (
    <img
      src={iconPath}
      className={`icon ${classIcon ? classIcon : ''}`}
      alt={altText ? altText : nameIcon}
    />
  )
}
