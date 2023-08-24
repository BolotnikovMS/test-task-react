import './users.css'

import React, { useMemo, useState } from 'react'

import { Error } from '../../components/error/Error'
import { InfoMessage } from '../../components/infoMessage/InfoMessage'
import { Loader } from '../../components/loader/Loader'
import { Pagination } from '../../components/pagination/Pagination'
import { Search } from '../../components/search/Search'
import { UserCard } from './components/userCard/UserCard'
import { useUsers } from '../../hooks/useUsers'

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
        <div className='users__titles'>
          <h2 className='title'>All users</h2>
          <Search arrayToSearch={users} keyObjSearch='name' keyObjName='name' />
        </div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : (
          <>
            <div className='users__cards'>
              {currentUsersList?.length ? (
                currentUsersList?.map(userItem => <UserCard key={userItem.id} user={userItem} />)
              ) : (
                <InfoMessage text='No users.' />
              )}
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
