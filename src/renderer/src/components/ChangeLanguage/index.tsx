/* eslint-disable @typescript-eslint/no-explicit-any */
import i18next from 'i18next'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import languageImage from '@renderer/assets/flags'
import { IRootState } from '@renderer/store'
import { toggleRTL } from '@renderer/store/themeConfigSlice'
import Dropdown from '../Dropdown'

const ChangeLanguage = (): JSX.Element => {
  const dispatch = useDispatch()
  const isRtl =
    useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false
  const themeConfig = useSelector((state: IRootState) => state.themeConfig)
  const [flag, setFlag] = useState(themeConfig.locale)

  const setLocale = (flag: string): void => {
    setFlag(flag)
    if (flag.toLowerCase() === 'ae') {
      dispatch(toggleRTL('rtl'))
    } else {
      dispatch(toggleRTL('ltr'))
    }
  }

  return (
    <div className="dropdown shrink-0 text-sm">
      <Dropdown
        offset={[0, 8]}
        placement={`${isRtl ? 'bottom-start' : 'bottom-end'}`}
        btnClassName="block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
        button={
          <img
            className="w-5 h-5 object-cover rounded-full"
            src={`${languageImage[flag.toUpperCase()]}`}
            alt="flag"
          />
        }
      >
        <ul className="!px-2 text-dark dark:text-white-dark grid grid-cols-2 gap-2 font-semibold dark:text-white-light/90 w-[280px]">
          {themeConfig.languageList.map((item: any) => {
            return (
              <li key={item.code}>
                <button
                  type="button"
                  className={`flex w-full hover:text-primary rounded-lg select-none ${
                    i18next.language === item.code ? 'bg-primary/10 text-primary' : ''
                  }`}
                  onClick={(): void => {
                    i18next.changeLanguage(item.code)
                    setLocale(item.code)
                  }}
                >
                  <img
                    src={`${languageImage[item.code.toUpperCase()]}`}
                    alt="flag"
                    className="w-5 h-5 object-cover rounded-full"
                  />
                  <span className="ltr:ml-3 rtl:mr-3">{item.name}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </Dropdown>
    </div>
  )
}

export default ChangeLanguage
