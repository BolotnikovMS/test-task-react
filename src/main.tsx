import './styles/reset.css'
import './styles/main.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Router } from './components/routing/Router'

const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={client}>
    <div className='container'>
      <Router />
    </div>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)
