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
  const pageParam = new URLSearchParams(useLocation().search).get("_page")
  const arrPage = []
  for (let i = 1; i <= totalPage; i++) {
    arrPage.push(i)
  }

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
          to={`/?_page=${currentPage === 1 ? currentPage : currentPage - 1}`}
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
        >
          Prev
        </Link>
        {
          arrPage.map(link => (
            <Link
              key={link}
              to={`/?_page=${link}`}
              className={`pagination-item ${link === currentPage ? 'selected' : ''}`}
            >
              {link}
            </Link>
          ))
        }
        <Link 
          className={`pagination-item ${currentPage === totalPage ? 'disabled' : ''}`}
          to={`/?_page=${currentPage === totalPage ? currentPage : currentPage + 1}`} 
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
