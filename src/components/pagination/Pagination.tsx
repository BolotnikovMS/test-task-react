import './pagination.css'

import { DOTS, PropsPaginationHook, usePagination } from '../../hooks/usePagination'

import React from 'react'

interface PropsPaginationComponent extends PropsPaginationHook {
  onPageChange: (arg: number) => void
  className?: string
}

export const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount,
  currentPage,
  pageSize,
  className,
}: PropsPaginationComponent) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange?.length === undefined || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange[paginationRange.length - 1]
  return (
    <ul className={`pagination ${className ? className : ''}`}>
      <li className={`pagination-item ${currentPage === 1 ? 'disabled' : ''}`} onClick={onPrevious}>
        {'<<'}
      </li>
      {paginationRange.map((pageNumber, i) => {
        if (typeof pageNumber === 'string' && pageNumber === DOTS) {
          return <li key={`${i}dots`} className='pagination-item disabled'>&#8230;</li>
        } else {
          return (
            <li
              key={pageNumber}
              className={`pagination-item ${pageNumber === currentPage ? 'selected' : ''}`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          )
        }
      })}
      <li
        className={`pagination-item ${currentPage === lastPage ? 'disabled' : ''}`}
        onClick={onNext}
      >
        {'>>'}
      </li>
    </ul>
  )
}
