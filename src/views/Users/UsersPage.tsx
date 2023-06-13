import React, { useMemo, useState } from 'react'

import './users.css'
import { UserCard } from './components/userCard/UserCard'
import { useUsers } from '../../hooks/useUsers'
import { Error } from '../../components/error/Error'
import { Loader } from '../../components/loader/Loader'
import { Pagination } from '../../components/pagination/Pagination'

const PageSize = 5

export const UsersPage = () => {
  const { users, isLoading, error } = useUsers()
  const [currentPage, setCurrentPage] = useState(1)
  const currentUsersList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return users?.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, users])

  return (
    <section className='users'>
      <div className='user__content'>
        <h2 className='title'>All users</h2>
        {error ? (
          <Error message={error} />
        ) : isLoading ? (
          <Loader />
        ) : (
          <>
            <div className='users__cards'>
              {currentUsersList?.map(userItem => (
                <UserCard key={userItem.id} user={userItem} />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalCount={users?.length}
              pageSize={PageSize}
              onPageChange={page => setCurrentPage(page)}
            />
          </>
        )}
      </div>
    </section>
  )
}
