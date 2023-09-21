import './pagination.css'

import { Link, useLocation } from 'react-router-dom'
import React, { Dispatch, SetStateAction, useEffect } from 'react'

interface PropsPagination {
  className?: string
  totalPage: number
  currentPage: number
  prevData: boolean
  setCurrentPage: Dispatch<SetStateAction<number>>
}

export const Pagination = ({ className, totalPage, currentPage, prevData, setCurrentPage }: PropsPagination) => {
  const path = useLocation().pathname  
  const pageParam = new URLSearchParams(useLocation().search).get("_page")

  useEffect(() => {
    if (pageParam === null) {
      setCurrentPage(1)
    } else {
      setCurrentPage(+pageParam)
    }

  }, [pageParam, setCurrentPage])
  
  return (
    <div>
      <ul className={`pagination ${className ? className : ''}`}>
        <Link 
          className={`pagination-item ${currentPage === 1 ? 'disabled' : ''}`}
          to={`${path}?_page=${currentPage === 1 ? currentPage : currentPage - 1}`}
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        >
          Prev
        </Link>
        {
          Array(totalPage).fill(0).map((_, i) => (
            <Link
              key={i + 1}
              to={`${path}?_page=${i + 1}`}
              className={`pagination-item ${i + 1 === currentPage ? 'selected' : ''}`}
            >
              {i + 1}
            </Link>
          ))
        }
        <Link 
          className={`pagination-item ${currentPage === totalPage ? 'disabled' : ''}`}
          to={`${path}?_page=${currentPage === totalPage ? currentPage : currentPage + 1}`} 
          onClick={() => {
            if (!prevData && currentPage < totalPage) {
              setCurrentPage(prev => prev + 1)
            }
          }}
        >
          Next
        </Link>
      </ul>
    </div>
  )
}
