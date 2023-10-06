import { Dispatch, SetStateAction } from 'react'

import { PropsPaginationHook } from '../../hooks/usePagination'

export interface IPropsPaginationComponent extends PropsPaginationHook {
  prevData: boolean
  className?: string
  setCurrentPage: Dispatch<SetStateAction<number>>
}