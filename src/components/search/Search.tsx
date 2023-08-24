import './search.css'

import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'

import { Button } from '../buttons/Button'
import { IPost } from '../../types/post.interface';
import { IUser } from '../../types/user.interface';
import { Icon } from '../icon/Icon'
import { Link } from 'react-router-dom'

type KeysObj = 'name' | 'title' | 'body' | 'username'

interface PropsSearch {
  arrayToSearch: IUser[] | IPost[] | undefined
  keyObjSearch: KeysObj
  keyObjName: KeysObj
  linkPath?: string
}

export const Search = ({ arrayToSearch, keyObjSearch, keyObjName, linkPath }: PropsSearch) => {
  const [desiredValue, setDesiredValue] = useState<string>('')
  
  const handleChanges = ({target}: ChangeEvent<HTMLInputElement>) => {
    setDesiredValue(target.value)
  }
  
  const handleClickReset = () => {
    setDesiredValue('')
  }

  const getSearchResult = () => {
    if (!desiredValue) return

    return arrayToSearch?.filter(item => item[keyObjSearch].toLocaleLowerCase().includes(desiredValue.toLocaleLowerCase()))
  }

  const searchResult = useMemo(getSearchResult, [desiredValue, arrayToSearch, keyObjSearch])

  return (
    <div className='search'>
      <div className='search__group'>
        <input
          type='text'
          value={desiredValue}
          className='search__input'
          placeholder='Search...'
          onChange={handleChanges}
        />
        <Button classBtn='search__btn' onClick={handleClickReset}>
          <Icon nameIcon='close.svg' classIcon='icon_wh-21' />
        </Button>
      </div>
      <div className="search__list">
        <ul>
          {
            searchResult?.length ? (
              searchResult.map(result => 
                <li key={result.id}>
                  <Link to={linkPath ? `${linkPath}${result.id}` : `${result.id}`}>{result[keyObjName].substring(30, -10) + '...'}</Link>
                </li>)
            ) : null
          }
        </ul>
      </div>
    </div>
  )
}
