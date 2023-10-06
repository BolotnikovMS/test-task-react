import './search.css'

import { Error, Loader } from '..'

import { IPropsSearchList } from './search.interface'
import { Link } from 'react-router-dom'
import React from 'react'

export const SearchList = ({searchResult, searchIsLoading, searchIsError, searchError}: IPropsSearchList) => {
  return (
    <ul className="search__list">
      {
        searchIsLoading ?
          (
            <Loader />
          ) : searchIsError ? (
            <Error message={searchError.message} />
          ) : searchResult && searchResult.length ? (
            searchResult.map(result => 
              <li key={result.id} className='search__list-item'>
                <Link to={`/posts/${result.id}`}>
                  {result.title}
                </Link>
              </li>
            )
          ) : (
            <li className="search__list-item">No result...</li>
          )
      }
    </ul>
  )
}
