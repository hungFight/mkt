/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import ContextMenu from '@renderer/components/ContextMenu'
import SelectField from '@renderer/components/CustomField/SelectField'
import FormSharePost from '@renderer/components/Form/FormSharePost'
import ModalScript from '@renderer/components/Modal/ModalScript'
import RenderContextMenu from '@renderer/components/RenderContextMenu'
import TableInteractionAcc from '@renderer/components/Table/TableAccount/TableInteractionAcc'
import { configMenuActionAccount } from '@renderer/config/configContextMenu'
import { setPageTitle } from '@renderer/store/themeConfigSlice'
import { Button } from 'flowbite-react'
import { CirclePlay, CircleX } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const ShareViralMarketing = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageTitle('Tương tác tài khoản'))
  })
  const [selectedRecords, setSelectedRecords] = useState<any[]>([])
  const [isShowModalScript, setIsShowModalScript] = useState(false)

  return (
    <>
      <div className="flex gap-3">
        <div className="gap-2 flex mb-3 h-fit 2xl:w-[65%] w-[60%] px-2 py-5 pt-0">
          <SelectField name="group" placeholder="Danh mục" className="w-[50%] py-0" />
          <Button className="bg-green-700 rounded-xl h-max" size="sm">
            <CirclePlay size={20} className="mr-2" />
            Start
          </Button>
          <Button className="bg-red-700 rounded-xl h-max" size="sm">
            <CircleX size={20} className="mr-2" />
            Stop
          </Button>
        </div>
      </div>
      <div className="flex gap-3">
        <div className="2xl:w-[65%] w-[60%] rounded-lg relative border-dashed border border-gray-300 h-[85vh] px-2 py-3 justify-between">
          <div className="flex items-center justify-between absolute -top-[15px] bg-[#fafafa] px-[10px] py-0">
            <p className="text-lg font-bold">Danh sách tài khoản</p>
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
          <div id="wapper_menu_context" className="mt-[25px]">
            <TableInteractionAcc />
          </div>
        </div>
        <div className="bg-[#FBFBFC] rounded-lg border-dashed border relative border-gray-300 2xl:w-[35%] w-[40%] h-[85vh] px-2 py-3">
          <div className="flex items-center justify-between absolute -top-[15px] bg-[#fafafa] px-[10px] py-0">
            <p className="text-lg font-bold">Cấu hình chạy tương tác</p>
          </div>
          <div className="mt-5 flex flex-col gap-3">
            <FormSharePost />
          </div>
        </div>
      </div>
      {isShowModalScript && (
        <ModalScript isShow={isShowModalScript} setIsShow={setIsShowModalScript} />
      )}
    </>
  )
}

export default ShareViralMarketing
