import { createBrowserRouter } from 'react-router'
import AboutPage from '../screens/about/about'
import HomePage from '../screens/home/homepage'
import SecuritySolutionScreen from '../screens/security/security-solution'
import ServiceScreen from '../screens/services/services'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/services',
    element: <ServiceScreen />,
  },
  {
    path: '/security-solution',
    element: <SecuritySolutionScreen />,
  },
])
