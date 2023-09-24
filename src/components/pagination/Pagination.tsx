import './pagination.css'

import { DOTS, PropsPaginationHook, usePagination } from '../../hooks/usePagination'
import { Link, useLocation } from 'react-router-dom'
import React, { Dispatch, SetStateAction, useEffect } from 'react'

interface PropsPaginationComponent extends PropsPaginationHook {
  prevData: boolean
  className?: string
  setCurrentPage: Dispatch<SetStateAction<number>>
}

export const Pagination2 = ({
  totalCount,
  siblingCount,
  currentPage,
  pageSize,
  prevData,
  setCurrentPage,
  className,
}: PropsPaginationComponent) => {
  const path = useLocation().pathname
  const pageParam = new URLSearchParams(useLocation().search).get("_page")
  const {totalPageCount, paginationRange} = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })
  
  useEffect(() => {
    if (pageParam === null) {
      setCurrentPage(1)
    } else {
      setCurrentPage(+pageParam)
    }

  }, [pageParam, setCurrentPage])

  if (totalPageCount <= 1 || paginationRange?.length === undefined || paginationRange.length < 2) {
    return null
  }
    
  return (
    <ul className={`pagination ${className ? className : ''}`}>
      <Link 
        className={`pagination-item ${currentPage === 1 ? 'disabled' : ''}`}
        to={`${path}?_page=${currentPage === 1 ? currentPage : currentPage - 1}`}
        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
      >
        Prev
      </Link>
      {paginationRange.map((pageNumber, i) => {
        if (typeof pageNumber === 'string' && pageNumber === DOTS) {
          return <li key={`${i}dots`} className='pagination-item disabled'>&#8230;</li>
        } else {
          return (
            <Link
              key={pageNumber}
              to={`${path}?_page=${pageNumber}`}
              className={`pagination-item ${pageNumber === currentPage ? 'selected' : ''}`}
            >
              {pageNumber}
            </Link>
          )
        }
      })}
      <Link 
        className={`pagination-item ${currentPage === totalPageCount ? 'disabled' : ''}`}
        to={`${path}?_page=${currentPage === totalPageCount ? currentPage : currentPage + 1}`} 
        onClick={() => {
          if (!prevData && currentPage < totalPageCount) {
            setCurrentPage(prev => prev + 1)
          }
        }}
      >
        Next
      </Link>
    </ul>
  )
}
