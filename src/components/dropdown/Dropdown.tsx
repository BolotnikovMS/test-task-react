import './dropdown.css'

import React, { useEffect, useRef, useState } from 'react'

import { Button } from '../buttons/Button'
import { IPropsDropdown } from './dropdown.interface'
import cx from 'classnames'

export const Dropdown = ({ children, menuItems, classBtnTrigger }: IPropsDropdown) => {
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
      <Button classBtn={cx('dropdown__trigger-btn', classBtnTrigger)} onClick={handelDropdownClick}>
        {children}
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