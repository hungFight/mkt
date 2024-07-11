/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import ButtonC from '@renderer/components/CustomField/ButtonC'
import CheckboxField from '@renderer/components/CustomField/CheckboxField'
import InputNumberField from '@renderer/components/CustomField/InputNumberField'
import SelectField from '@renderer/components/CustomField/SelectField'

import ModalProgress from '@renderer/components/Modal/ModalProgress'

import { setPageTitle } from '@renderer/store/themeConfigSlice'
import { Button, Checkbox, Label } from 'flowbite-react'
import { ChevronDown, CirclePlay, CircleX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CiCirclePlus } from 'react-icons/ci'
import { useDispatch } from 'react-redux'

const InteractionAcc = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageTitle(t('account_integration')))
  })
  const [inNumber, setInNumber] = useState<number>(1)
  const [isScriptDropdownVisible, setIsScriptDropdownVisible] = useState(false)
  const [isShowStart, setIsShowStart] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsScriptDropdownVisible(false)
    }
  }

  const handleStart = (): void => {
    setIsShowStart(true)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <div className="flex gap-3 justify-center">
        <div className="w-full  px-2 pb-5 pt-0">
          <div className="w-full flex items-center justify-between  p-2 px-4 rounded-[10px] ">
            <div className="gap-2 flex h-fit items-center justify-between">
              {/* <SelectField name="group" placeholder="Danh mục" className="w-[50%] py-0" /> */}
              <Button
                className="bg-green-700 rounded-xl h-max btn-start"
                size="sm"
                onClick={handleStart}
              >
                <CirclePlay size={20} className="mr-2" />
                Start
              </Button>
              <Button className="bg-red-700 rounded-xl h-max" size="sm">
                <CircleX size={20} className="mr-2" />
                Stop
              </Button>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-base">
                Tổng: <span className="text-blue-700 text-base">0</span>
              </p>
              <p className="text-base">
                Live: <span className="text-green-700 text-base">0</span>
              </p>
              <p className="text-base">
                Die: <span className="text-red-500 text-base">0</span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-5   ">
            <div className="w-[64%] h-[75vh] border border-blue-500 rounded-[10px] bg-[rgb(255_255_255)] relative">
              {' '}
              <h2 className="text-sm absolute top-[-15px] left-1 px-3 py-1 z-10">
                QUẢN LÝ TÀI KHOẢN
              </h2>
              <div className="w-[150px] absolute top-[-1px] left-[10px] h-[1px] bg-white"></div>
              <div className="mt-3 w-">
                <div className="flex items-center justify-between">
                  <SelectField name="script" placeholder={t('script')} />
                  <ButtonC
                    icon={<CiCirclePlus />}
                    title={t('add_script')}
                    classNameIcon="text-[20px]"
                    className="bg-blue-500 py-2"
                  />
                  <SelectField name="script" placeholder="Chọn danh mục" parenSelect="w-[200px]" />
                </div>{' '}
              </div>
            </div>
            <div className="w-[35%] h-[75vh] border border-blue-500 rounded-[10px] relative bg-[rgb(255_255_255)] pt-5">
              <h2 className="text-sm absolute top-[-15px] left-2 px-3 py-1 z-10">
                CẤU HÌNH CHẠY TƯƠNG TÁC
              </h2>
              <div className="w-[210px] absolute top-[-1px] left-[15px] h-[1px] bg-white "></div>
              <div className="w-full bg-white overflow-hidden pl-2">
                <InputNumberField
                  min={1}
                  name="stream"
                  max={100}
                  title="Số luồng chạy đồng thời"
                  onChange={(e: any) => setInNumber(e.target.value)}
                  value={inNumber}
                  classInput="ml-2 !w-[70px] !px-2 !py-1"
                  span="Luồng"
                  clsTitle="w-[58%]"
                  clsLabel="whitespace-pre-wrap"
                  classInputContainer="w-full flex items-center justify-start  mb-2"
                />{' '}
                <InputNumberField
                  min={1}
                  name="stream"
                  max={100}
                  title="Chuyễn PageProfile nếu lỗi liên tiếp"
                  onChange={(e: any) => setInNumber(e.target.value)}
                  span="Lần"
                  value={inNumber}
                  classInput="ml-2 !w-[70px] !px-2 !py-1"
                  clsLabel="whitespace-pre-wrap"
                  clsTitle="w-[58%]"
                  classInputContainer="w-full flex items-center justify-start  mb-2"
                />
                <div>
                  <CheckboxField
                    name="thread"
                    title="Tự động lấy danh sách nhóm của PageProfile"
                    classLabel="text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="2xl:w-[35%] w-[40%] px-2 py-5 pt-0 relative" ref={dropdownRef}>
          <p
            className="border border-[#dedede] whitespace-nowrap w-[30%] px-4 py-1 rounded-[5px] flex justify-between items-center hover:border-[#000] cursor-pointer"
            onClick={toggleScriptDropdown}
          >
            Kịch bản <ChevronDown />
          </p>
        
        </div> */}
        {isShowStart && <ModalProgress isShow={isShowStart} setIsShow={setIsShowStart} />}
      </div>
    </>
  )
}

export default InteractionAcc
