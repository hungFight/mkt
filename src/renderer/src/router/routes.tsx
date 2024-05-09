import { lazy } from 'react'
const Index = lazy(() => import('@renderer/pages/Index'))
const Analytics = lazy(() => import('@renderer/pages/Analytics'))
const Finance = lazy(() => import('@renderer/pages/Finance'))
const Crypto = lazy(() => import('@renderer/pages/Crypto'))

const List = lazy(() => import('@renderer/pages/Apps/Invoice/List'))
const Preview = lazy(() => import('@renderer/pages/Apps/Invoice/Preview'))
const Add = lazy(() => import('@renderer/pages/Apps/Invoice/Add'))
const Edit = lazy(() => import('@renderer/pages/Apps/Invoice/Edit'))
const Error = lazy(() => import('@renderer/components/Error'))

const Tabs = lazy(() => import('../pages/Components/Table'))
const Faq = lazy(() => import('../pages/Pages/Faq'))
const KnowledgeBase = lazy(() => import('../pages/Pages/KnowledgeBase'))

const routes = [
  // dashboard
  {
    index: true,
    path: '/',
    element: <Index />
  },
  // analytics page
  {
    path: '/analytics',
    element: <Analytics />
  },
  // finance page
  {
    path: '/finance',
    element: <Finance />
  },
  // crypto page
  {
    path: '/crypto',
    element: <Crypto />
  },
  {
    path: '/apps/invoice/list',
    element: <List />
  },

  // preview page
  {
    path: '/apps/invoice/preview',
    element: <Preview />
  },
  {
    path: '/apps/invoice/add',
    element: <Add />
  },
  {
    path: '/apps/invoice/edit',
    element: <Edit />
  },
  {
    path: '/components/tabs',
    element: <Tabs />
  },
  {
    path: '/pages/knowledge-base',
    element: <KnowledgeBase />
  },
  {
    path: '/pages/faq',
    element: <Faq />
  },

  {
    path: '*',
    element: <Error />,
    layout: ''
  }
]

export { routes }
