import { PropsWithChildren, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalTerm from './components/Modal/ModalTerm'
import store, { IRootState } from './store'
import {
  toggleAnimation,
  toggleLayout,
  toggleLocale,
  toggleMenu,
  toggleNavbar,
  toggleRTL,
  toggleSemidark,
  toggleTheme
} from './store/themeConfigSlice'

function App({ children }: PropsWithChildren): JSX.Element {
  const themeConfig = useSelector((state: IRootState) => state.themeConfig)
  const dispatch = useDispatch()
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    dispatch(toggleTheme(localStorage.getItem('theme') || themeConfig.theme))
    dispatch(toggleMenu(localStorage.getItem('menu') || themeConfig.menu))
    dispatch(toggleLayout(localStorage.getItem('layout') || themeConfig.layout))
    dispatch(toggleRTL(localStorage.getItem('rtlClass') || themeConfig.rtlClass))
    dispatch(toggleAnimation(localStorage.getItem('animation') || themeConfig.animation))
    dispatch(toggleNavbar(localStorage.getItem('navbar') || themeConfig.navbar))
    dispatch(toggleLocale(localStorage.getItem('i18nextLng') || themeConfig.locale))
    dispatch(toggleSemidark(localStorage.getItem('semidark') || themeConfig.semidark))

    const modalTermShow = localStorage.getItem('modalTermShow')
    if (!modalTermShow) {
      setIsShow(true)
    }
  }, [
    dispatch,
    themeConfig.theme,
    themeConfig.menu,
    themeConfig.layout,
    themeConfig.rtlClass,
    themeConfig.animation,
    themeConfig.navbar,
    themeConfig.locale,
    themeConfig.semidark
  ])

  const handleModalClose = (): void => {
    setIsShow(false)
    localStorage.setItem('modalTermShow', 'true')
  }

  return (
    <div
      className={`${(store.getState().themeConfig.sidebar && 'toggle-sidebar') || ''} ${
        themeConfig.menu
      } ${themeConfig.layout} ${
        themeConfig.rtlClass
      } main-section antialiased relative font-googleSans text-sm font-normal`}
    >
      <ModalTerm isShow={isShow} setIsShow={handleModalClose} />
      {children}
    </div>
  )
}

export default App
