import './dropdown.css'

import React, { useEffect, useRef, useState } from 'react'

import { Button } from '../buttons/Button'
import { Icon } from '../icon/Icon'

interface PropsDropdown {
  nameBtnDropdown?: string
  nameIcon?: string
  classIcon?: string
  altTextIcon?: string
  menuItems: React.ReactNode[]
  handlerEvent?: () => void
}

export const Dropdown = ({ nameBtnDropdown, nameIcon, classIcon, altTextIcon, menuItems }: PropsDropdown) => {
  const [dropdownState, setDropdownState] = useState<boolean>(false)
  const dropdown = useRef<HTMLDivElement | null>(null)

  const handelDropdownClick = () => {
    setDropdownState(!dropdownState)
  }
  
  const handleClickOutside = ({ target }: MouseEvent | TouchEvent): void => {
    if (target instanceof Node && dropdown.current && !dropdown.current.contains(target)) {
      setDropdownState(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className='dropdown' ref={dropdown}>
      <Button name={nameBtnDropdown ?? ''} classBtn='dropdown__btn' handlerEvent={handelDropdownClick}>
        {
          nameIcon && (<Icon nameIcon={nameIcon} classIcon={classIcon} altTextIcon={altTextIcon} />)
        }
      </Button>
      { dropdownState ? (
        <ul className='dropdown__menu'>
          {
            menuItems.map((item, i) => (
              <li key={i}>
                {item}
              </li>
            ))
          }
        </ul>
      ) : null }
    </div>
  )
}