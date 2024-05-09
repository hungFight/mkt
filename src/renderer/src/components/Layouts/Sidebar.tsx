/* eslint-disable @typescript-eslint/explicit-function-return-type */
import logo from '@renderer/assets/images/logo-mkt.png'
import { IRootState } from '@renderer/store'
import { toggleSidebar } from '@renderer/store/themeConfigSlice'
import { useEffect, useState } from 'react'
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
    setCurrentMenu((oldValue) => {
      return oldValue === value ? '' : value
    })
  }

  useEffect(() => {
    const selector = document.querySelector(
      '.sidebar ul a[href="' + window.location.pathname + '"]'
    )
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
        className={`sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300 ${
          semidark ? 'text-white-dark' : ''
        }`}
      >
        <div className="bg-white dark:bg-black h-full">
          <div className="flex justify-between items-center px-4 py-3">
            <NavLink to="/" className="main-logo block items-center shrink-0 w-[70%]">
              <img className="w-full flex-none " src={logo} alt="logo" />
              {/* <span className="text-2xl ltr:ml-1.5 rtl:mr-1.5 font-semibold align-middle lg:inline dark:text-white-light">
                {t('Phần Mềm MKT')}
              </span> */}
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
          <PerfectScrollbar className="h-[calc(100vh-80px)] relative">
            <ul>
              <li className="mx-4 my-2">
                <NavLink
                  to="/"
                  className="block w-full text-[#6B7280] font-bold py-[10px] px-[35px] link-hv"
                >
                  {t('Quản lý tài khoản')}
                </NavLink>
              </li>
              <li className="mx-4 my-2">
                <NavLink
                  to="/1"
                  className="block w-full text-[#6B7280] font-bold py-[10px] px-[35px] link-hv"
                >
                  {t('Chức năng 1')}
                </NavLink>
              </li>
            </ul>
            <ul className="relative font-semibold space-y-0.5 p-4 py-0">
              <li className="menu nav-item">
                <button
                  type="button"
                  className={`${currentMenu === 'Menu' ? 'active' : ''} nav-link group w-full`}
                  onClick={() => toggleMenu('Menu')}
                >
                  <div className="flex items-center">
                    <svg
                      className="group-hover:!text-primary shrink-0"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.5"
                        d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z"
                        fill="currentColor"
                      />
                      <path
                        d="M9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                      {t('Menu')}
                    </span>
                  </div>

                  <div className={currentMenu === 'Menu' ? 'rotate-90' : 'rtl:rotate-180'}>
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
                </button>

                <AnimateHeight duration={300} height={currentMenu === 'Menu' ? 'auto' : 0}>
                  <ul className="sub-menu text-gray-500">
                    <li>
                      <NavLink to="/analytics">{t('Menu 1')}</NavLink>
                    </li>
                    <li>
                      <NavLink to="/finance">{t('Menu 2')}</NavLink>
                    </li>
                    <li>
                      <NavLink to="/crypto">{t('Menu 3')}</NavLink>
                    </li>
                  </ul>
                </AnimateHeight>
              </li>
            </ul>
          </PerfectScrollbar>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
