import './search.css'

import { Button, Icon, Input } from '..'
import React, { ChangeEvent } from 'react'

import { IPropsSearch } from './search.interface'

export const Search = ({ children, searchQuery, setSearchQuery }: IPropsSearch) => {
  return (
    <div className='search'>
      <div className='search__group'>
        <Input
          className='search__input'
          value={searchQuery}
          onChange={({target}: ChangeEvent<HTMLInputElement>) => setSearchQuery(target.value)}
          type='text'
          placeholder='Posts search...'
        />
        <Button classBtn='search__btn' onClick={() => setSearchQuery('')}>
          <Icon name='close' className='icon_wh-21' />
        </Button>
      </div>
      {children}
    </div>
  )
}
