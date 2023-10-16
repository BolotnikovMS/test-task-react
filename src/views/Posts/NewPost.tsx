import { FormPost } from './components/form/FormPost'
import React from 'react'

export const NewPost = () => {
  return (
    <section className='posts'>
      <div className="container">
        <FormPost/>
      </div>
    </section>
  )
}
