import './search.css'

import { Button, Icon } from '..'
import React, { ChangeEvent, Dispatch, SetStateAction } from 'react'

interface PropsSearch {
  children: React.ReactNode
  searchQuery: string
  setSearchQuery: Dispatch<SetStateAction<string>>
  onChange: (value: string) => void
}

export const Search = ({ children, searchQuery, setSearchQuery, onChange }: PropsSearch) => {
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
