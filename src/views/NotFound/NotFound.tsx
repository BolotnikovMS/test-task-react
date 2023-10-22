import './error-page.css'

import { Icon } from '../../components'
import { Link } from 'react-router-dom'
import React from 'react'
import { useTitle } from '../../hooks/useTitle'

const NotFound = () => {
  useTitle('No Found!')

  return (
    <div className="error-page">
      <h1 className="title">Ooops!</h1>
      <p>
        <i>
          Not Found
        </i>
      </p>
      <Link to='/' className='link'>
        <Icon name='arrow-left'/>
        Go Posts
      </Link>
    </div>
  )
}

export default NotFound