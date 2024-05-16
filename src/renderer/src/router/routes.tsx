import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import configStatic from '@renderer/config'
import Login from '@renderer/pages/auth/Login'
import Home from '@renderer/pages/Pages/Home'
import { IRootState, useAppSelector } from '@renderer/store'
// import { lazy } from 'react'
import { IndexRouteObject, Navigate, NonIndexRouteObject } from 'react-router-dom'

export enum layoutType {
  auth = 'auth',
  blank = 'blank'
}
type CustomRouteObjectParams = {
  layout?: layoutType | ''
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reducers?: ActionCreatorWithPayload<any, string>
}

export type CustomIndexRouteObject = IndexRouteObject & CustomRouteObjectParams

export type CustomNonIndexRouteObject = Omit<NonIndexRouteObject, 'children'> &
  CustomRouteObjectParams & {
    children?: (CustomIndexRouteObject | CustomNonIndexRouteObject)[]
  }

export type CustomRouteConfig = CustomIndexRouteObject | CustomNonIndexRouteObject

const AuthContainer = (): JSX.Element => {
  const { user, isLogged } = useAppSelector((state: IRootState) => state.auth)
  if (user?.apiToken && isLogged) {
    return <Navigate to={configStatic.router.home} replace={true} />
  } else {
    return <Navigate to={configStatic.router.login} replace={true} />
  }
}

const routes = [
  {
    path: '/',
    element: <AuthContainer />
  },
  {
    path: configStatic.router.login,
    element: <Login />,
    layout: layoutType.auth
  },
  {
    path: configStatic.router.home,
    element: <Home />,
    layout: layoutType.blank
  }
]

export { routes }
