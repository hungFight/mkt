/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import ButtonFlowbite from '@renderer/components/ButtonFlowbite'
import ContextMenu from '@renderer/components/ContextMenu'
import InputFilter from '@renderer/components/CustomField/InputFilter'
import ModalAddAccount from '@renderer/components/Modal/ModalAddAccount'
import ModalAddCategory from '@renderer/components/Modal/ModalAddCategory'
import ModalHiddenRow from '@renderer/components/Modal/ModalHiddenRow'
import RenderContextMenu from '@renderer/components/RenderContextMenu'
import TableManagerAccount from '@renderer/components/Table/TableAccount/TableManagerAccount'
import ToolTips from '@renderer/components/Tooltips'
import { configMenuActionAccount } from '@renderer/config/configContextMenu'
import { setPageTitle } from '@renderer/store/themeConfigSlice'
import { Button } from 'flowbite-react'
import { CircleFadingPlus, CircleX, EyeOff, RotateCcw, Trash } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageTitle('Quản lý tài khoản'))
  })
  const [isShowModal, setIsShowModal] = useState(false)
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
              Thêm tài khoản
            </ButtonFlowbite>
          </ToolTips>
          <Button className="bg-[#F4903E] rounded-xl step-2" size="sm">
            <RotateCcw size={20} className="mr-2" />
            Tải lại
          </Button>
          <Button className="bg-[#F4903E] rounded-xl" size="sm" onClick={openModalHiddenRow}>
            <EyeOff size={20} className="mr-2" />
            Ẩn hiển cột
          </Button>
        </div>
        <div className="">
          <InputFilter />
        </div>
      </div>
      <div className="flex gap-3">
        <div className="bg-[#FBFBFC] rounded-lg border-dashed border border-gray-300 2xl:w-[20%] w-[30%] h-[85vh] px-2 py-3">
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold">Quản lý danh mục</p>
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
          <div className="mt-5"></div>
        </div>
        <div className="2xl:w-[80%] w-[70%] rounded-lg border-dashed border border-gray-300 h-[85vh] px-2 py-3 justify-between">
          <div className="gap-2 flex mb-3 h-fit">
            <Button className="bg-red-700 rounded-xl" size="sm">
              <CircleX size={20} className="mr-2" />
              Đóng chrome
            </Button>
            <Button className="bg-white rounded-xl text-red-500 border-red-500" size="sm">
              <Trash size={20} className="mr-2" color="red" />
              Thùng rác
            </Button>
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

export default Home
