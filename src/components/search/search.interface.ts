import { Dispatch, SetStateAction } from 'react'

import { AxiosError } from 'axios'
import { IPost } from '../../interfaces'

export interface IPropsSearch {
  children: React.ReactNode
  searchQuery: string
  setSearchQuery: Dispatch<SetStateAction<string>>
}

export interface IPropsSearchList {
  searchResult: IPost[] | undefined
  searchIsLoading: boolean
  searchIsError: boolean
  searchError: AxiosError
}