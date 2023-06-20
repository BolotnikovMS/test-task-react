import React, { ChangeEvent, useEffect, useState } from 'react'

import './search.css'
import { Button } from '../buttons/Button'
import { Icon } from '../icon/Icon'

interface PropsSearch {
  searchText: (text: string) => void
}

export const Search = ({ searchText }: PropsSearch) => {
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    if (value == '') {
      searchText('')
    }
  })

  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    searchText(value)
  }
  const handleClick = () => {
    setValue('')
    searchText('')
  }

  return (
    <div className='search'>
      <div className='search__group'>
        <input
          type='text'
          value={value}
          className='search__input'
          placeholder='Search...'
          onChange={handleChanges}
        />
        <Button classBtn='search__btn' handlerEvent={handleClick}>
          <Icon nameIcon='close.svg' classIcon='icon_wh-21' />
        </Button>
      </div>
    </div>
  )
}
