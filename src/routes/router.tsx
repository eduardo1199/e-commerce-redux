import { CheckIn } from '@/pages/check-in'
import { Dashboard } from '@/pages/dashboard'
import { Login } from '@/pages/login'
import { Orders } from '@/pages/orders'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/check-in',
    element: <CheckIn />,
  },
  {
    path: '/orders',
    element: <Orders />,
  }
])