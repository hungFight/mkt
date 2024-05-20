/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from 'react'
import TabsSetting from '../TabsSetting'

const Setting = () => {
  const [showCustomizer, setShowCustomizer] = useState(false)
  const handleCloseSettings = () => {
    const tabSettingElement = document.querySelector('.tab-setting')
    const openSettingElement = document.querySelector('.bg-setting')

    if (tabSettingElement) {
      tabSettingElement.classList.remove('open-setting')
    }
    if (openSettingElement) {
      openSettingElement.classList.remove('bgSetting')
    }
  }

  return (
    <div>
      <div
        className={`${
          showCustomizer ? '!block' : 'hidden'
        } fixed inset-0 bg-[black]/60 z-[51] bg-setting px-4 transition-[display]`}
        onClick={() => setShowCustomizer(false)}
      ></div>

      <nav
        className={`${
          (showCustomizer && 'ltr:!right-0 rtl:!left-0') || ''
        } bg-white fixed ltr:-right-[50%] rtl:-left-[50%] tab-setting top-0 bottom-0 w-full max-w-[50%] cs-setting shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-[right] duration-300 z-[51] dark:bg-black p-4`}
      >
        <div className="overflow-y-auto overflow-x-hidden perfect-scrollbar h-full">
          <div className="text-center relative pb-5">
            <button
              type="button"
              className="absolute top-0 ltr:right-0 rtl:left-0 opacity-30 hover:opacity-100 dark:text-white"
              onClick={handleCloseSettings}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div>
              <TabsSetting />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Setting
