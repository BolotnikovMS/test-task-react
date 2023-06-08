import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/reset.css'
import './styles/main.css'

import { Router } from './components/routing/Router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div className='container'>
    <Router />
  </div>
)
