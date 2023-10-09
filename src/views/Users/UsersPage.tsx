import './users.css'

import { Error, InfoMessage, Loader, Pagination } from '../../components'
import React, { useState } from 'react'
import { useTitle, useUsers } from '../../hooks'

import { AxiosError } from 'axios'
import { UserCard } from './components/userCard/UserCard'

const PageSize = 5

export const UsersPage = () => {
  useTitle('User page')
  const [currentPage, setCurrentPage] = useState(1)
  const { users, totalCount, isFetching, isError, error, isPreviousData } = useUsers({page: currentPage, limit: PageSize})
  
  return (
    <section className='users'>
      <div className="container">
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
                {
                  users?.length ? (
                    users.map(userItem => <UserCard key={userItem.id} user={userItem} />)
                  ) : (
                    <InfoMessage text='No users.' />
                  )
                }
              </div>
              <Pagination 
                totalCount={totalCount}
                pageSize={PageSize}
                currentPage={currentPage}
                prevData={isPreviousData} 
                setCurrentPage={setCurrentPage}
              />
            </>
          )}
        </div>
      </div>
    </section>
  )
}
