import './users.css'

import { Error, InfoMessage, Loader, Pagination } from '../../components'
import React, { useMemo, useState } from 'react'

import { AxiosError } from 'axios'
import { UserCard } from './components/userCard/UserCard'
import { useUsers } from '../../hooks/useUsers'

const PageSize = 5

export const UsersPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const {users, totalCount, isFetching, isError, error, isPreviousData} = useUsers({page: currentPage, limit: PageSize})
  const currentUsersList = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    
    return users?.slice(firstPageIndex, lastPageIndex)
  }, [currentPage, users])

  return (
    <section className='users'>
      <div className='user__content'>
        <div className='users__titles'>
          <h2 className='title'>All users</h2>
        </div>
        {isFetching ? (
          <Loader />
        ) : isError ? (
          <Error message={(error as AxiosError).message} />
        ) : (
          <>
            <div className='users__cards'>
              {currentUsersList?.length ? (
                currentUsersList.map(userItem => <UserCard key={userItem.id} user={userItem} />)
              ) : (
                <InfoMessage text='No users.' />
              )}
            </div>
            <Pagination
              totalPage={totalCount / PageSize}
              currentPage={currentPage}
              prevData={isPreviousData}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}
      </div>
    </section>
  )
}
