/* eslint-disable @typescript-eslint/explicit-function-return-type */

import ButtonFlowbite from '@renderer/components/ButtonFlowbite'
import InputField from '@renderer/components/CustomField/InputField'
import TextAreaField from '@renderer/components/CustomField/TextAreaField'
import ToggleSwitch from '@renderer/components/ToggleSwitch'
import { t } from 'i18next'
import { CSSProperties, useState } from 'react'

const SettingProxy = () => {
  const [toggleState, setToggleState] = useState({
    isCheckedIP: true,
    isCheckedTinsoft: false,
    isCheckedTmProxy: false,
    isCheckedV6Proxy: false
  })

  const handleToggle = (name: string) => {
    setToggleState((prevState) => {
      const newState = { ...prevState }
      Object.keys(newState).forEach((key) => {
        if (key !== name) {
          newState[key] = false
        }
      })
      newState[name] = !prevState[name]
      return newState
    })
  }

  const disabledStyles: CSSProperties = {
    pointerEvents: 'none',
    opacity: 0.5
  }
  return (
    <>
      <div className="flex flex-col gap-2">
        <div id="nochange" className="grid grid-cols-8 items-center my-3">
          <div className="flex items-center space-x-2 col-span-2">
            <div className="bg-blue-200 p-2 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7 "
              >
                <path
                  stroke="#1E83F7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <div>
                <span className="text-sm font-semibold ml-3">No Change IP</span>
              </div>
            </div>
          </div>

          <div className="text-sm ml-3 col-span-2">Use LAN or Wifi Network</div>

          <div className="flex items-center space-x-2">
            <ToggleSwitch
              checked={toggleState.isCheckedIP}
              onChange={() => handleToggle('isCheckedIP')}
              spanText="Local IP"
              focusRingColor="blue-300"
              darkFocusRingColor="blue-800"
              spanClass="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
            />
          </div>
          <div className="col-span-2 flex space-x-2 items-center">
            <InputField
              classInputContainer="w-full bg-[#f0f0f0]"
              inputClassName="text-[#000]"
              name="ip"
              disabled
            />
          </div>
          <div className="justify-self-end">
            <ButtonFlowbite className="bg-[#2196f3] " size="sm">
              Change IP
            </ButtonFlowbite>
          </div>
        </div>

        <div id="tinsoft" className="grid grid-cols-8 items-center my-3" aria-disabled>
          <div className="flex items-center space-x-2 mb-6 col-span-4">
            <div className="bg-blue-200 p-2 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path
                  stroke="#1E83F7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </div>
            <div>
              <div className="text-left">
                <span className="text-sm font-semibold ml-3 ">{t('Tinsoft Proxy')}</span>
              </div>
              <div>
                <button type="button" className="text-sm ml-3 text-blue-500 pl-0">
                  {t(`Tinsoftproxy.com`)}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 col-span-3">
            <div>
              <ToggleSwitch
                spanText="List key Tinsoft Proxy"
                checked={toggleState.isCheckedTinsoft}
                onChange={() => handleToggle('isCheckedTinsoft')}
                focusRingColor="blue-300"
                darkFocusRingColor="blue-800"
                spanClass="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              />
            </div>
          </div>
          <div className="justify-self-end">
            <ButtonFlowbite size="sm" className="bg-[#2196f3] whitespace-nowrap w-[120px]">
              Check Server
            </ButtonFlowbite>
          </div>

          <div className="font-medium text-slate-500 text-sm ml-3 col-span-4 self-start text-left mr-4 leading-6">
            <div>{t('-Tinsoft bản chất là IP LAN của mạng Viettel')}</div>
            <div>
              {t(
                '-Sử dụng Tinsoft Proxy cho các hoạt động của tài khoản Facebook là một trong các hiệu quả về mặt kinh tế do không phải đầu tư thiết bị Proxy'
              )}
            </div>
            <div className="text-red-500">
              {t('*Lưu ý để giảm tối đa tỉ lệ die nick khi chạy tool:')}{' '}
            </div>
            <div>{t('-Ngày đầu tiên: Chỉ chạy một tài khoản Facebook/ 1 key Tinsoft')}</div>
            <div>{t('-Ngày thứ 2-6: Chỉ nên chạy tối đa 3 tài khoản Facebook/ 1 key Tinsoft')}</div>
            <div>
              {t('-Ngày thứ 7: Người dùng thống kê kết quả và rút ra kinh nghiệm cho riêng mình')}
            </div>
          </div>
          <div className="col-span-4" style={toggleState.isCheckedIP ? {} : disabledStyles}>
            <TextAreaField
              placeholder="Mỗi key 1 dòng "
              name="accountHolder"
              clsTextArea="h-[250px] bg-[#eceeef]"
            />
          </div>
        </div>

        <div id="tmproxy" className="grid grid-cols-8 items-center my-3">
          <div className="flex items-center space-x-2 mb-6 col-span-4">
            <div className="bg-blue-200 p-2 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#1E83F7"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
                />
              </svg>
            </div>
            <div>
              <div className="text-left">
                <span className="text-sm font-semibold ml-3">{t('TM Proxy')}</span>
              </div>
              <div>
                <button type="button" className="text-sm ml-3 text-blue-500 pl-0">
                  {t(`tmproxy.com`)}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 col-span-3">
            <div>
              <ToggleSwitch
                spanText="List key TM Proxy"
                checked={toggleState.isCheckedTmProxy}
                onChange={() => handleToggle('isCheckedTmProxy')}
                focusRingColor="blue-300"
                darkFocusRingColor="blue-800"
                spanClass="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              />
            </div>
          </div>
          <div className="justify-self-end">
            <ButtonFlowbite size="sm" className="bg-[#2196f3] whitespace-nowrap w-[120px]">
              Check Server
            </ButtonFlowbite>
          </div>

          <div className="font-medium text-slate-500 text-sm ml-3 col-span-4 self-start text-left mr-4 leading-6">
            <div>{t('-TM Proxy bản chất là IP LAN của mạng Viettel')}</div>
            <div>
              {t(
                '-Sử dụng TM Proxy cho các hoạt động của tài khoản Facebook là một trong các hiệu quả về mặt kinh tế do không phải đầu tư thiết bị Proxy'
              )}
            </div>
            <div className="text-red-500">
              {t('*Lưu ý để giảm tối đa tỉ lệ die nick khi chạy tool:')}{' '}
            </div>
            <div>{t('-Ngày đầu tiên: Chỉ chạy một tài khoản Facebook/ 1 key Tinsoft')}</div>
            <div>{t('-Ngày thứ 2-6: Chỉ nên chạy tối đa 3 tài khoản Facebook/ 1 key Tinsoft')}</div>
            <div>
              {t('-Ngày thứ 7: Người dùng thống kê kết quả và rút ra kinh nghiệm cho riêng mình')}
            </div>
          </div>
          <div className="col-span-4">
            <TextAreaField
              placeholder="Mỗi key 1 dòng "
              name="accountHolder"
              clsTextArea="h-[250px] bg-[#eceeef]"
            />
          </div>
        </div>

        <div id="v6proxy" className="grid grid-cols-8 items-center my-3">
          <div className="flex items-center space-x-2 mb-6 col-span-4">
            <div className="bg-blue-200 p-2 rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#1E83F7"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </div>
            <div>
              <div className="text-left">
                <span className="text-sm font-semibold ml-3">{t('ProxyV6.net')}</span>
              </div>
              <div>
                <button type="button" className="text-sm ml-3 text-blue-500 pl-0">
                  {t(`proxyv6.net`)}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 col-span-3">
            <div>
              <ToggleSwitch
                spanText="List key ProxyV6.net"
                checked={toggleState.isCheckedV6Proxy}
                onChange={() => handleToggle('isCheckedV6Proxy')}
                focusRingColor="blue-300"
                darkFocusRingColor="blue-800"
                spanClass="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              />
            </div>
          </div>
          <div className="justify-self-end">
            <ButtonFlowbite size="sm" className="bg-[#2196f3] whitespace-nowrap w-[120px]">
              Check Server
            </ButtonFlowbite>
          </div>

          <div className="font-medium text-slate-500 text-sm ml-3 col-span-4 self-start text-left mr-4 leading-6">
            <div>
              {t(
                'ProxyV6.net là lựa chọn phù hợp khi bạn không đặt yêu cầu quá cao' +
                  ' về độ Trust đối với tài khoản facebook.'
              )}
            </div>
            <div>
              {t(
                'Với số lượng IP lớn, tốc độ ổn định và chi phí hợp lý ProxyV6.net' +
                  ' mang đến trải nghiệm khá tốt đối với các dịch vụ Mạng xã hội nói' +
                  ' chung và facebook nói riêng.'
              )}
            </div>
          </div>
          <div className="col-span-4">
            <TextAreaField
              placeholder="Mỗi key 1 dòng"
              name="accountHolder"
              clsTextArea="h-[250px] bg-[#eceeef]"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SettingProxy
