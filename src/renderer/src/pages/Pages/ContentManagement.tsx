/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import ButtonC from '@renderer/components/CustomField/ButtonC'
import SelectField from '@renderer/components/CustomField/SelectField'
import MantineTableCustom from '@renderer/components/MantineTableCustom'
import ModalAddIndex from '@renderer/components/Modal/ModalAddIndex'
import ModalAddPost from '@renderer/components/Modal/ModalAddPost'
import ModalScript from '@renderer/components/Modal/ModalScript'
import { configTableAddIndex } from '@renderer/config/configTable'
import { setPageTitle } from '@renderer/store/themeConfigSlice'
import { Button } from 'flowbite-react'
import { CirclePlay } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CiCirclePlus } from 'react-icons/ci'
import { RiMenuAddFill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
const ContentAcc = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageTitle(t('content_management')))
  })
  const [isScriptDropdownVisible, setIsScriptDropdownVisible] = useState(false)
  const [isShowModalScript, setIsShowModalScript] = useState(false)
  const [isShowModalAddIndex, setIsShowModalAddIndex] = useState(false)
  const [isShowModalAddPost, setIsShowModalAddPost] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const toggleScriptDropdown = () => {
    setIsScriptDropdownVisible(!isScriptDropdownVisible)
  }
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsScriptDropdownVisible(false)
    }
  }

  const openModalScript = (): void => {
    setIsShowModalScript(true)
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
      title: '1',
      content: 'Hello'
    },
    {
      uid: '2',
      title: '1'
    },
    {
      title: '1'
    },
    {
      title: '1'
    },
    {
      title: '1'
    },
    {
      uid: '2',
      title: '1'
    },
    {
      title: '1'
    },
    {
      title: '1'
    },
    {
      title: '1'
    },
    {
      uid: '2',
      title: '1'
    },
    {
      title: '1'
    },
    {
      title: '1'
    },
    {
      title: '1'
    }
  ]
  return (
    <div className="">
      <div className="w-full mb-3 flex items-center rounded-[10px] pb-2">
        <ButtonC
          className="bg-blue-600 w-fit p-2 mr-[145px]"
          icon={<CiCirclePlus size={20} className="mr-2" />}
          title={t('add_category')}
          onClick={() => setIsShowModalAddIndex(true)}
          />
        <ButtonC
          title={t('add_post')}
          onClick={() => setIsShowModalAddPost(true)}
          classNameIcon="!mr-1"
          className="bg-blue-600 w-fit  p-2"
          icon={<RiMenuAddFill size={20} className="mr-2" />}
        />{' '}
      </div>
      <div className="flex justify-between">
        <div className="w-[28%] p-2  bg-[rgb(255_255_255)] rounded-xl border border-blue-400 relative">
          <h3 className="absolute top-[-15px] left-5 px-2 py-1 text-blue-600 rounded-xl z-10 ">
            {t('category_management')}
          </h3>
          <div className="w-[150px] absolute top-[-1px] left-[15px] h-[1px] bg-white"></div>
        </div>
        <div className="bg-[rgb(255_255_255)] w-[70%] h-full border border-blue-500 rounded-xl relative">
          <div className="w-[150px] absolute top-[-1px] left-[15px] h-[1px] bg-white"></div>
          <h3 className="absolute top-[-15px] left-5 px-2 py-1 [rgb(255_255_255)] text-blue-600 rounded-xl z-10">
            {t('post_management')}
          </h3>
          <div className="flex items-center w-full justify-between p-5 ">
            <SelectField
              placeholder={t('choice_account_index')}
              name="index"
              className="!shadow-none p-3"
            />

            <div className="flex items-center justify-between">
              <h3 className="flex items-center mr-5 ">
                {t('total')}
                <p className="text-blue-500 ml-2">0</p>
              </h3>
              <h3 className="flex items-center mr-5 ">
                {t('withTotal_image')}
                <p className="text-green-500 ml-2">0</p>
              </h3>
              <h3 className="flex items-center mr-5 ">
                {t('withoutTotal_image')}
                <p className="text-yellow-400 ml-2">0</p>
              </h3>
            </div>
          </div>
          <div className=" rounded-xl border-t  border-black ">
            <MantineTableCustom column={configTableAddIndex} data={data} />
          </div>
        </div>
      </div>
      {isShowModalAddIndex && (
        <ModalAddIndex isShow={isShowModalAddIndex} setIsShow={setIsShowModalAddIndex} />
      )}
      {isShowModalAddPost && (
        <ModalAddPost isShow={isShowModalAddPost} setIsShow={setIsShowModalAddPost} />
      )}
      {isShowModalScript && (
        <ModalScript isShow={isShowModalScript} setIsShow={setIsShowModalScript} />
      )}
    </div>
  )
}

export default ContentAcc
