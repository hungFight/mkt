import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import configStatic from '@renderer/config'
import Login from '@renderer/pages/auth/Login'
import ContentManagement from '@renderer/pages/Pages/ContentManagement'
import InteractionPageProfile from '@renderer/pages/Pages/InteractionPageProfile'
import ManagerAccount from '@renderer/pages/Pages/ManagerAccount'
import PostProfile from '@renderer/pages/Pages/ViralMarketing/PostProfile'
import ScanProfile from '@renderer/pages/Pages/ViralMarketing/ScanProfile'
import { IRootState, useAppSelector } from '@renderer/store'
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

const routes: CustomRouteConfig[] = [
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
    element: <ManagerAccount />,
    layout: layoutType.blank
  },
  {
    path: configStatic.router.contentManagement,
    element: <ContentManagement />,
    layout: layoutType.blank
  },
  {
    path: configStatic.router.scanViralMarketing,
    element: <ScanProfile />,
    layout: layoutType.blank
  },
  {
    path: configStatic.router.postViralMarketing,
    element: <PostProfile />,
    layout: layoutType.blank
  },
  {
    path: configStatic.router.interactionPageProfile,
    element: <InteractionPageProfile />,
    layout: layoutType.blank
  }
]

export { routes }
