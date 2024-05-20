/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Button } from '@mantine/core'
import logo from '@renderer/assets/images/logo-mkt.png'
import configSidebar from '@renderer/config/configSidebar'
import { IRootState } from '@renderer/store'
import { toggleSidebar } from '@renderer/store/themeConfigSlice'
import React, { Fragment, useEffect, useState } from 'react'
import AnimateHeight from 'react-animate-height'
import { useTranslation } from 'react-i18next'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'

const Sidebar = (): JSX.Element => {
  const [currentMenu, setCurrentMenu] = useState<string>('')
  const themeConfig = useSelector((state: IRootState) => state.themeConfig)
  const semidark = useSelector((state: IRootState) => state.themeConfig.semidark)
  const location = useLocation()
  const dispatch = useDispatch()
  const { t } = useTranslation()

  const toggleMenu = (value: string): void => {
    setCurrentMenu((oldValue) => (oldValue === value ? '' : value))
  }

  useEffect(() => {
    const selector = document.querySelector(`.sidebar ul a[href="${window.location.pathname}"]`)
    if (selector) {
      selector.classList.add('active')
      const ul = selector.closest('ul.sub-menu')
      if (ul) {
        const ele = ul.closest('li.menu')!.querySelectorAll('.nav-link') || []
        if (ele.length) {
          const el = ele[0] as HTMLElement
          setTimeout(() => {
            el.click()
          })
        }
      }
    }
  }, [])

  useEffect(() => {
    if (window.innerWidth < 1024 && themeConfig.sidebar) {
      dispatch(toggleSidebar())
    }
  }, [location])

  return (
    <div className={semidark ? 'dark' : ''}>
      <nav
        className={`sidebar fixed min-h-screen border-r h-full top-0 bottom-0 w-[260px] z-50 transition-all duration-300 ${
          semidark ? 'text-white-dark' : ''
        }`}
      >
        <div className="bg-white dark:bg-black h-full">
          <div className="flex justify-between items-center px-4 py-3">
            <NavLink to="/" className="main-logo block items-center shrink-0 w-[70%]">
              <img className="w-full flex-none " src={logo} alt="logo" />
            </NavLink>

            <button
              type="button"
              className="collapse-icon w-8 h-8 rounded-full flex items-center hover:bg-gray-500/10 dark:hover:bg-dark-light/10 dark:text-white-light transition duration-300 rtl:rotate-180"
              onClick={() => dispatch(toggleSidebar())}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 m-auto"
              >
                <path
                  d="M13 19L7 12L13 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.5"
                  d="M16.9998 19L10.9998 12L16.9998 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <PerfectScrollbar
            className="h-[calc(100vh-80px)] relative sidebar"
            options={{
              suppressScrollX: false
            }}
          >
            <ul className="relative font-semibold space-y-0.5 p-2 py-0">
              {configSidebar?.map((item, index) => {
                const Icon = item?.icon

                return (
                  <Fragment key={index}>
                    {item?.isHeader && (
                      <h2 className="py-3 px-7 flex items-center uppercase font-extrabold bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] -mx-4 mb-1">
                        <svg
                          className="w-4 h-5 flex-none hidden"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        <span>{t(`${item?.title}`)}</span>
                      </h2>
                    )}

                    {!item?.isHeader && (
                      <li className="menu nav-item">
                        {!item?.children ? (
                          <NavLink
                            to={item?.path || ''}
                            className="border-0 !py-0 !mb-1 flex items-center h-[36px] !justify-start"
                          >
                            {Icon ? (
                              <Icon className="group-hover:!text-primary shrink-0" size={20} />
                            ) : (
                              <Fragment />
                            )}
                            <span className="ltr:pl-2 rtl:pr-2 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                              {t(`${item?.title}`)}
                            </span>
                          </NavLink>
                        ) : (
                          <Button
                            className="border-0 !py-0 !mb-1 bg-transparent custom-button"
                            onClick={(e) => {
                              e.preventDefault()
                              toggleMenu(item?.title ?? '')
                            }}
                          >
                            <div className="flex items-center">
                              {Icon ? (
                                <Icon className="group-hover:!text-primary shrink-0" />
                              ) : (
                                <Fragment />
                              )}
                              <span className="ltr:pl-2 rtl:pr-2 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                                {t(`${item?.title}`)}
                              </span>
                            </div>

                            <div
                              className={
                                currentMenu === item?.title ? 'rotate-90' : 'rtl:rotate-180'
                              }
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M9 5L15 12L9 19"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </Button>
                        )}

                        {item?.children && (
                          <AnimateHeight
                            duration={300}
                            height={currentMenu === item?.title ? 'auto' : 0}
                          >
                            <ul className="sub-menu text-gray-500">
                              {item?.children?.map((child, indexChild) => (
                                <li key={indexChild}>
                                  <NavLink
                                    to={child?.path ?? ''}
                                    className="flex items-center !pl-[25px]"
                                  >
                                    {child.icon && (
                                      <span className="mr-2 text-[20px]">
                                        {React.createElement(child.icon)}
                                      </span>
                                    )}
                                    <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark whitespace-nowrap">
                                      {t(`${child?.title}`)}
                                    </span>
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </AnimateHeight>
                        )}
                      </li>
                    )}
                  </Fragment>
                )
              })}
            </ul>
          </PerfectScrollbar>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
