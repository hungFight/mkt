/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import ButtonC from '@renderer/components/CustomField/ButtonC'
import CheckboxField from '@renderer/components/CustomField/CheckboxField'
import InputNumberField from '@renderer/components/CustomField/InputNumberField'
import SelectField from '@renderer/components/CustomField/SelectField'
import FormInteraction from '@renderer/components/Form/FormInteraction'
import ModalAddScript from '@renderer/components/Modal/ModalAddScript'
import ModalProgress from '@renderer/components/Modal/ModalProgress'

import { setPageTitle } from '@renderer/store/themeConfigSlice'
import { Button, Checkbox, Label } from 'flowbite-react'
import { ChevronDown, CirclePlay, CircleX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CiCirclePlus } from 'react-icons/ci'
import { LiaHandPointer } from 'react-icons/lia'
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
  const [isShowSScript, setIsShowScript] = useState(false)
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
      <div className="flex gap-3 justify-center ">
        <div className="w-full  px-2 pb-5 pt-0">
          <div className="w-full flex items-center justify-between px-[2px] pl-1 rounded-[10px] ">
            <div className="flex items-center">
              <SelectField
                name="script"
                placeholder={t('script')}
                parenSelect="w-[300px] rounded-[5px] border border-[#979797]"
              />
              <ButtonC
                icon={<CiCirclePlus />}
                title={t('add_script')}
                classNameIcon="text-[20px]"
                className="bg-blue-500 py-[10px] ml-2"
                onClick={() => setIsShowScript(true)}
              />
            </div>
            <div className="flex items-center gap-5 border shadow-[2px_2px_2px_#979797] py-2 px-4 rounded-[5px] bg-white">
              <p className="text-sm font-thin">
                {t('total')}: <span className="text-blue-700 text-base">0</span>
              </p>
              <p className="text-sm font-thin">
                {t('live')}: <span className="text-green-700 text-base">0</span>
              </p>
              <p className="text-sm font-thin">
                {t('die')}: <span className="text-red-500 text-base">0</span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-5   ">
            <div className="w-[64%] h-[74vh] border border-[rgb(214_214_214)] rounded-[10px] bg-[rgb(255_255_255)] relative">
              {' '}
              <h2 className="text-sm absolute top-[-13px] left-2 px-3 py-1 z-10">
                QUẢN LÝ TÀI KHOẢN
              </h2>
              <div className="w-[160px] absolute top-[-1px] left-[10px] h-[1px] bg-white"></div>
              <div className="mt-8 px-5">
                <div className="flex items-center justify-start">
                  <SelectField
                    name="script"
                    placeholder="Chọn danh mục"
                    parenSelect="w-[200px]"
                    borderColor="#91bff0"
                    boxShadow="0 0 1px"
                    height="30px"
                  />
                  <div className="gap-2 flex h-fit items-center justify-between ml-2 ">
                    {/* <SelectField name="group" placeholder="Danh mục" className="w-[50%] py-0" /> */}
                    <Button
                      className="bg-green-700 rounded-xl h-max btn-start py-[3px]"
                      size="sm"
                      onClick={handleStart}
                    >
                      <CirclePlay size={20} className="mr-2" />
                      Start
                    </Button>
                    <Button className="bg-red-700 rounded-xl h-max py-[3px]" size="sm">
                      <CircleX size={20} className="mr-2" />
                      Stop
                    </Button>
                  </div>
                </div>{' '}
              </div>
            </div>
            <div className="w-[35%] h-[74vh] border border-[rgb(214_214_214)] rounded-[10px] relative bg-[rgb(255_255_255)] pt-5">
              <h2 className="text-sm absolute top-[-13px] left-2 px-3 py-1 z-10">
                {t('interactive_config')}
              </h2>
              <div className="w-[210px] absolute top-[-1px] left-[15px] h-[1px] bg-white "></div>
              <form className="w-full bg-white overflow-hidden pl-2 mt-2">
                <div className="pb-2 border-b mb-3">
                  <InputNumberField
                    min={1}
                    name="stream"
                    max={100}
                    title={t('stream_concurrency')}
                    onChange={(e: any) => setInNumber(e.target.value)}
                    value={inNumber}
                    classInput="ml-2 !w-[70px] !px-2 !py-1"
                    span={t('stream')}
                    clsTitle="w-[58%]"
                    clsLabel="whitespace-pre-wrap"
                    classInputContainer="w-full flex items-center justify-start  mb-2 py-1"
                  />{' '}
                  <InputNumberField
                    min={1}
                    name="stream"
                    max={100}
                    title={t('next_profile_error')}
                    onChange={(e: any) => setInNumber(e.target.value)}
                    span="Lần"
                    value={inNumber}
                    classInput="ml-2 !w-[70px] !px-2 !py-1"
                    clsLabel="whitespace-pre-wrap"
                    clsTitle="w-[58%]"
                    classInputContainer="w-full flex items-center justify-start  mb-2 "
                  />
                </div>
                <div>
                  <CheckboxField
                    name="thread"
                    title={t('auto_get_profile')}
                    classLabel="text-sm"
                    classInputContainer="mb-2  pb-3 border-b"
                  />{' '}
                  <div className="mb-2">
                    <CheckboxField name="thread" title={t('get_rerun')} classLabel="text-sm " />
                  </div>
                  <div className="pb-2 border-b mb-3">
                    <InputNumberField
                      min={1}
                      name="time"
                      max={100}
                      onChange={(e: any) => setInNumber(e.target.value)}
                      value={inNumber}
                      classInput="ml-2 !w-[70px] !px-2 !py-1"
                      span={t('times')}
                      clsTitle="w-[58%]"
                      clsLabel="whitespace-pre-wrap"
                      classInputContainer="w-full flex items-center justify-start mb-2"
                    />{' '}
                    <InputNumberField
                      min={1}
                      name="minute"
                      max={100}
                      onChange={(e: any) => setInNumber(e.target.value)}
                      span={t('minute')}
                      value={inNumber}
                      classInput="ml-2 !w-[70px] !px-2 !py-1"
                      clsLabel="whitespace-pre-wrap"
                      clsTitle="w-[58%]"
                      classInputContainer="w-full flex items-center justify-start  mb-2 "
                    />
                  </div>
                </div>
                <div className="text-center flex items-center justify-center">
                  <div className="rotate-[85deg] text-[20px] mr-1">
                    <LiaHandPointer />
                  </div>
                  <a href="#" className="text-blue-500 font-thin hover:underline">
                    {t('see_guide_here')}
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        {isShowStart && <ModalProgress isShow={isShowStart} setIsShow={setIsShowStart} />}
        {isShowSScript && <ModalAddScript isShow={isShowSScript} setIsShow={setIsShowScript} />}
      </div>
    </>
  )
}

export default InteractionAcc
