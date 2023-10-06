import './search.css'

import { Button, Icon } from '..'
import React, { ChangeEvent } from 'react'

import { IPropsSearch } from './search.interface'

export const Search = ({ children, searchQuery, setSearchQuery, onChange }: IPropsSearch) => {
  const handleClickReset = () => {
    setSearchQuery('')
  }

  return (
    <div className='search'>
      <div className='search__group'>
        <input
          type='text'
          value={searchQuery}
          className='search__input'
          placeholder='Search...'
          onChange={({target}: ChangeEvent<HTMLInputElement>) => onChange(target.value)}
        />
        <Button classBtn='search__btn' onClick={handleClickReset}>
          <Icon nameIcon='close.svg' classIcon='icon_wh-21' />
        </Button>
      </div>
      {children}
    </div>
  )
}
