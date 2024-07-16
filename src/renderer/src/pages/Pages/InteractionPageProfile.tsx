/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import ButtonC from '@renderer/components/CustomField/ButtonC'
import CheckboxField from '@renderer/components/CustomField/CheckboxField'
import InputNumberField from '@renderer/components/CustomField/InputNumberField'
import SelectField from '@renderer/components/CustomField/SelectField'
import FormInteraction from '@renderer/components/Form/FormInteraction'
import MantineTableCustom from '@renderer/components/MantineTableCustom'
import ModalAddScript from '@renderer/components/Modal/ModalAddScript'
import ModalProgress from '@renderer/components/Modal/ModalProgress'
import {
  configTableInteractionAccountManagementOne,
  configTableInteractionAccountManagementTwo
} from '@renderer/config/configTable'

import { setPageTitle } from '@renderer/store/themeConfigSlice'
import { Button, Checkbox, Label } from 'flowbite-react'
import { ChevronDown, CirclePlay, CircleX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { CiCirclePlus } from 'react-icons/ci'
import { LiaHandPointer } from 'react-icons/lia'
import { useDispatch } from 'react-redux'

const InteractionPageProfile = () => {
  const { register, handleSubmit } = useForm()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageTitle(t('account_integration')))
  })
  const [inNumber, setInNumber] = useState<{
    stream_concurrency: number
    next_profile_error: number
    auto_get_profile: boolean
    get_rerun: boolean
    rerun: { from: number; to: number }
  }>({
    stream_concurrency: 1,
    next_profile_error: 1,
    auto_get_profile: false,
    get_rerun: false,
    rerun: { from: 1, to: 1 }
  })
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
    // setIsShowStart(true)
  }
  const onSubmit = (data) => {
    console.table(inNumber)
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  const data = [
    {
      uid: '1',
      title: 'firstLast',
      content: 'Hello'
    },
    {
      uid: '1',
      title: 'firstLast',
      content: 'Hello'
    },
    {
      uid: '1',
      title: 'firstLast',
      content: 'Hello'
    },
    {
      uid: '1',
      title: 'firstLast',
      content: 'Hello'
    },
    {
      uid: '1',
      title: 'firstLast',
      content: 'Hello'
    },
    {
      uid: '1',
      title: 'firstLast',
      content: 'Hello'
    },
    {
      uid: '1',
      title: 'firstLast',
      content: 'Hello'
    }
  ]
  const dataTwo = [
    {
      uid: '1',
      title: 'firstLast',
      content: 'Hello'
    },
    {
      uid: '1',
      title: 'firstLast',
      content: 'Hello'
    },
    {
      uid: '1',
      title: 'firstLast',
      content: 'Hello'
    },
    {
      uid: '1',
      title: 'firstLast',
      content: 'Hello'
    },
    {
      uid: '1',
      title: 'firstLast',
      content: 'Hello'
    },
    {
      uid: '1',
      title: 'firstLast',
      content: 'Hello'
    },
    {
      uid: '1',
      title: 'firstLast',
      content: 'Hello'
    }
  ]

  return (
    <>
      <form className="flex gap-3 justify-center " onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full   pt-0">
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
            <div className="w-[63%] min-[1438px]:w-[64%] h-[76vh] border border-[rgb(214_214_214)] rounded-[10px] bg-[rgb(255_255_255)] relative">
              <h2 className="w-fit text-base relative top-[-16px] left-3 px-3 py-1 z-10">
                <p className="z-10 relative">{t('account_management')}</p>
                <div className="w-full absolute top-[15px] left-[1px] h-[1px] bg-white "></div>
              </h2>
              <div className=" px-2">
                <div className="flex items-center justify-start mb-3">
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
                      className="bg-green-700 rounded-[10px] h-max btn-start py-[2px]"
                      size="sm"
                      // onClick={handleStart}
                      type="submit"
                    >
                      <CirclePlay size={20} className="mr-2" />
                      Start
                    </Button>
                    <Button className="bg-red-700 rounded-[10px] h-max py-[2px]" size="sm">
                      <CircleX size={20} className="mr-2" />
                      Stop
                    </Button>
                  </div>
                </div>{' '}
                <div className="mt-2">
                  <MantineTableCustom
                    column={configTableInteractionAccountManagementOne.map((r) => ({
                      ...r,
                      title: t(r.accessor)
                    }))}
                    // data={data.map(r => ({...r,title: }))}
                    data={data}
                    clsTable="!h-[31vh] mb-2  border  rounded-[15px]"
                  />{' '}
                  <MantineTableCustom
                    column={configTableInteractionAccountManagementTwo.map((r) => ({
                      ...r,
                      title: t(r.accessor)
                    }))}
                    data={dataTwo}
                    clsTable="!h-[31vh]  border  rounded-[15px]"
                  />
                </div>
              </div>
            </div>
            <div className="w-[36%] min-[1438px]:w-[35%] h-[76vh] border border-[rgb(214_214_214)] rounded-[10px] relative bg-[rgb(255_255_255)] pt-5">
              <h2 className="w-fit text-base relative top-[-36px] left-3 px-3 py-1 z-10">
                <p className="z-10 relative"> {t('interactive_config')}</p>
                <div className="w-full absolute top-[15px] left-[1px] h-[1px] bg-white "></div>
              </h2>
              <div className="w-full bg-white overflow-hidden pl-2 mt-2">
                <div className="py-2 border-b border-t mb-3">
                  <InputNumberField
                    min={1}
                    name="stream_concurrency"
                    max={100}
                    register={{ ...register('stream_concurrency') }}
                    title={t('stream_concurrency')}
                    onChange={(e: any) =>
                      setInNumber((pre) => ({ ...pre, stream_concurrency: e.target.value }))
                    }
                    value={inNumber.stream_concurrency}
                    classInput="ml-2 !w-[70px] !px-2 !py-1"
                    span={t('stream')}
                    clsTitle="w-[58%]"
                    clsLabel="whitespace-pre-wrap"
                    classInputContainer="w-full flex items-center justify-start  mb-1 py-1"
                  />{' '}
                  <InputNumberField
                    min={1}
                    register={{ ...register('next_profile_error') }}
                    name="stream"
                    max={100}
                    title={t('next_profile_error')}
                    onChange={(e: any) =>
                      setInNumber((pre) => ({ ...pre, next_profile_error: e.target.value }))
                    }
                    value={inNumber.next_profile_error}
                    span={t('times')}
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
                    register={{ ...register('auto_get_profile') }}
                    onChange={(e: any) =>
                      setInNumber((pre) => ({ ...pre, auto_get_profile: e.target.checked }))
                    }
                    checked={inNumber.auto_get_profile}
                    classLabel="text-sm"
                    classInputContainer="mb-2  pb-3 border-b"
                  />{' '}
                  <div className="mb-2 flex items-center">
                    <CheckboxField
                      name="get_rerun"
                      title={t('get_rerun')}
                      onChange={(e: any) =>
                        setInNumber((pre) => ({ ...pre, get_rerun: e.target.checked }))
                      }
                      checked={inNumber.get_rerun}
                      classLabel="text-sm "
                      register={{ ...register('get_rerun') }}
                    />
                    <InputNumberField
                      min={1}
                      name="times"
                      register={{ ...register('times') }}
                      max={100}
                      onChange={(e: any) =>
                        setInNumber((pre) => ({
                          ...pre,
                          rerun: { ...pre.rerun, from: e.target.value }
                        }))
                      }
                      value={inNumber.rerun.from}
                      classInput="ml-2 !w-[70px] !px-2 !py-1"
                      span={t('times')}
                      clsLabel="whitespace-pre-wrap"
                      classInputContainer="w-full flex items-center justify-start mb-2"
                    />{' '}
                  </div>
                  <div className="pb-2 border-b mb-3">
                    <InputNumberField
                      min={1}
                      register={{ ...register('minute') }}
                      name="minute"
                      title={t('every_stop')}
                      max={100}
                      span={t('minute')}
                      onChange={(e: any) =>
                        setInNumber((pre) => ({
                          ...pre,
                          rerun: { ...pre.rerun, to: e.target.value }
                        }))
                      }
                      value={inNumber.rerun.to}
                      classInput="ml-2 !w-[70px] !px-2 !py-1"
                      clsLabel="whitespace-pre-wrap"
                      classInputContainer="w-full flex items-center justify-start  mb-2 "
                    />
                  </div>
                </div>
                <div className="text-center flex items-center justify-center">
                  <div className="rotate-[85deg] text-[20px] mr-1">
                    <LiaHandPointer />
                  </div>
                  <a
                    onClick={() => window.open('https://phanmemmkt.vn/', '_blank')}
                    className="text-blue-500 font-thin hover:underline"
                  >
                    {t('see_guide_here')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isShowStart && <ModalProgress isShow={isShowStart} setIsShow={setIsShowStart} />}
        {isShowSScript && <ModalAddScript isShow={isShowSScript} setIsShow={setIsShowScript} />}
      </form>
    </>
  )
}

export default InteractionPageProfile