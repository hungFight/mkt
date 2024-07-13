/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import ButtonFlowbite from '@renderer/components/ButtonFlowbite'
import ContextMenu from '@renderer/components/ContextMenu'
import CheckboxField from '@renderer/components/CustomField/CheckboxField'
import InputFilter from '@renderer/components/CustomField/InputFilter'
import ModalAddAccount from '@renderer/components/Modal/ModalAddAccount'
import ModalAddCategory from '@renderer/components/Modal/ModalAddCategory'
import ModalConfirm from '@renderer/components/Modal/ModalConfirm'
import ModalHiddenRow from '@renderer/components/Modal/ModalHiddenRow'
import ModalTrashAccount from '@renderer/components/Modal/ModalTrashAccount'
import RenderContextMenu from '@renderer/components/RenderContextMenu'
import TableManagerAccount from '@renderer/components/Table/TableAccount/TableManagerAccount'
import ToolTips from '@renderer/components/Tooltips'
import { configMenuActionAccount } from '@renderer/config/configContextMenu'
import { setPageTitle } from '@renderer/store/themeConfigSlice'
import { Button } from 'flowbite-react'
import { CircleFadingPlus, CircleX, EyeOff, Trash2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { BiDotsVerticalRounded } from 'react-icons/bi'
const ManagerAccount = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageTitle('account_management'))
  })
  const [dataCheck, setDataCheck] = useState([
    { id: 1, name: 'Danh mục 1', checked: false},
    { id: 2, name: 'Danh mục 2', checked: false }
  ])
const [options, setOptions] = useState<number | null>(null)
  const [confirmDel, setConfirmDel] = useState(false)
  const [isShowModal, setIsShowModal] = useState(false)
  const [isShowModalAccountTrash, setIsShowModalAccountTrash] = useState(false)
  const [isShowModalAccount, setIsShowModalAccount] = useState(false)
  const [isShowModalHiddenRow, setIsShowModalHiddenRow] = useState(false)
  const [selectedRecords, setSelectedRecords] = useState<any[]>([])

  const openModal = (): void => {
    setIsShowModal(true)
  }
  const openModalAccount = (): void => {
    setIsShowModalAccount(true)
  }

  const openModalHiddenRow = (): void => {
    setIsShowModalHiddenRow(true)
  }
  const openModalAccountTrash = (): void => {
    setIsShowModalAccountTrash(true)
  }
  const handleCloseChrome = () => {
    toast.success('close_chrome_success')
  }
  const handleDeleteAll = (v) => {
    if (v === true) toast.success('delete_success')
    setConfirmDel(false)
  }
    const divRef = useRef<any>(null)

    useEffect(() => {
      const handleClickOutside = (event) => {
       setOptions(null)
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [])
  return (
    <>
      <div className="flex mb-2 justify-between">
        <div className="flex gap-2 ">
          <ToolTips content="Thêm tài khoản">
            <ButtonFlowbite
              className="add-account rounded-xl"
              size="sm"
              color="blue"
              onClick={openModalAccount}
            >
              <CircleFadingPlus size={20} className="mr-2" />

              {t('add_account')}
            </ButtonFlowbite>
          </ToolTips>
          <Button className="bg-[#F4903E] rounded-xl" size="sm" onClick={openModalHiddenRow}>
            <EyeOff size={20} className="mr-2" />
            {t('hide_show')}
          </Button>
        </div>
        <div className="">
          <InputFilter button />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="bg-[#FBFBFC] rounded-lg border-dashed border border-gray-300  w-[30%] h-[85vh] px-2 py-3">
          <div className="min-w-[1500px]:flex min-w-[1500px]:items-center min-w-[1500px]:justify-between">
            <p className="text-lg font-bold mb-[2px]">{t('category_management')}</p>
            <ToolTips content="Thêm nhóm tài khoản">
              <ButtonFlowbite
                color="blue"
                className="rounded-xl items-center"
                size="sm"
                onClick={openModal}
              >
                <CircleFadingPlus size={20} className="mr-2" />
                Thêm
              </ButtonFlowbite>
            </ToolTips>
          </div>
          <div className="mt-5 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <CheckboxField
                name="all"
                title={t('all')}
                onChange={(e: any) => {
                  setDataCheck((pre) =>
                    pre.map((v) => {
                      v.checked = e.target.checked
                      return v
                    })
                  )
                }}
                classInputContainer="w-1/4 !mt-0 white-space-nowrap"
              />
            </div>
            {dataCheck.map((r) => (
              <div key={r.id} className="flex items-center gap-2 justify-between relative">
                <CheckboxField
                  name="category"
                  checked={r.checked}
                  onChange={(e: any) =>
                    setDataCheck((pre) =>
                      pre.map((v) => {
                        if (v.id === r.id) v.checked = e.target.checked
                        return v
                      })
                    )
                  }
                  title={r.name}
                  classInputContainer="w-1/4 !mt-0 white-space-nowrap"
                />
                <div
                  ref={divRef}
                  className={`text-[20px] outside cursor-pointer mr-5 p-1 rounded-[50%] hover:bg-[rgb(214,214,214)]  ${
                    r.id === 1 ? 'pointer-events-none cursor-no-drop opacity-[0.4]' : ''
                  }`}
                  onClick={() => setOptions(r.id)}
                >
                  <BiDotsVerticalRounded />
                  {r.id === options && (
                    <div className="absolute bottom-[-79px] right-[48px] p-2 rounded-md bg-white  ">
                      <div className="text-sm cursor-pointer p-1 px-2 hover:bg-black-light">
                        {t('edit')}
                      </div>
                      <div className="text-sm cursor-pointer p-1 px-2 hover:bg-black-light">
                        {t('delete')}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-[70%] rounded-lg border-dashed border border-gray-300 h-[85vh] px-2 py-3 justify-between">
          <div className="flex justify-between items-center">
            <div className="gap-2 flex mb-3 h-fit">
              <Button className="bg-red-700 rounded-xl" size="sm" onClick={handleCloseChrome}>
                <CircleX size={20} className="mr-2" />
                {t('close_chrome')}
              </Button>
              <Button
                className="bg-red-700 rounded-xl"
                size="sm"
                onClick={() => setConfirmDel(true)}
              >
                <CircleX size={20} className="mr-2" />
                {t('delete_all')}
              </Button>
              <Button
                className="bg-white rounded-xl text-red-500 border-red-500"
                size="sm"
                onClick={openModalAccountTrash}
              >
                <Trash2 size={20} className="mr-2" color="red" />
                {t('trash')}
              </Button>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-base">
                {t('total')}: <span className="text-blue-700 text-base">0</span>
              </p>
              <p className="text-base">
                {t('live')}: <span className="text-green-700 text-base">0</span>
              </p>
              <p className="text-base">
                {t('die')}: <span className="text-red-500 text-base">0</span>
              </p>
            </div>
          </div>
          <ContextMenu
            selector="#wapper_menu_context .mantine-ScrollArea-viewport"
            selectorChild=".context_menu_child"
          >
            <RenderContextMenu
              renderData={configMenuActionAccount}
              valueClickItem={selectedRecords}
              expandValue={{
                dispatch,
                setSelectedRecords
              }}
            />
          </ContextMenu>
          <div className="table-account" id="wapper_menu_context">
            <TableManagerAccount />
          </div>
        </div>
        {isShowModal && <ModalAddCategory isShow={isShowModal} setIsShow={setIsShowModal} />}
        {confirmDel && (
          <ModalConfirm
            title={t('confirm_delete')}
            onClick={handleDeleteAll}
            titleLeftB={t('close_chrome')}
            titleRightB={t('cancel')}
            icon={
              <svg
                className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            }
          />
        )}
        {isShowModalAccountTrash && (
          <ModalTrashAccount
            isShow={isShowModalAccountTrash}
            setIsShow={setIsShowModalAccountTrash}
          />
        )}
        {isShowModalAccount && (
          <ModalAddAccount isShow={isShowModalAccount} setIsShow={setIsShowModalAccount} />
        )}
        {isShowModalHiddenRow && (
          <ModalHiddenRow isShow={isShowModalHiddenRow} setIsShow={setIsShowModalHiddenRow} />
        )}
      </div>
    </>
  )
}

export default ManagerAccount
