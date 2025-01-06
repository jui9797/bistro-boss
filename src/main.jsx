import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'

import {
 
  RouterProvider,
} from "react-router-dom";
import { router } from './router/router.jsx';
import { AuthProvider } from './provider/AuthProvider.jsx';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
    <div className='max-w-screen-xl mx-auto'>
    <RouterProvider router={router} />
    </div>
    </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
  </HelmetProvider>
)
