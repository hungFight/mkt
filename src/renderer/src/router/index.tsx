import LayoutAuth from '@renderer/components/Layouts/LayoutAuth'
import { createMemoryRouter } from 'react-router-dom'
import DefaultLayout from '../components/Layouts/DefaultLayout'
import { layoutType, routes } from './routes'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const checkLayout = (route: any): JSX.Element => {
  if (route?.layout) {
    switch (route.layout) {
      case layoutType.auth:
        return <LayoutAuth>{route.element}</LayoutAuth>

      default:
        return <DefaultLayout>{route.element}</DefaultLayout>
    }
  }
  return <DefaultLayout>{route.element}</DefaultLayout>
}

const finalRoutes = routes.map((route) => {
  return {
    ...route,
    element: checkLayout(route)
  }
})

const router = createMemoryRouter(finalRoutes)

export default router
