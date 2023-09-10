import './search.css'

import { Error, Loader } from '..'

import { AxiosError } from 'axios'
import { IPost } from '../../interfaces/post.interface';
import React from 'react'

interface IPropsSearchList {
  searchResult: IPost[] | undefined
  searchIsLoading: boolean
  searchIsError: boolean
  searchError: AxiosError
}

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
                {result.title}
              </li>
            )
          ) : (
            <li className="search__list-item">No result...</li>
          )
      }
    </ul>
  )
}
