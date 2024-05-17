/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import ButtonFlowbite from '@renderer/components/ButtonFlowbite'
import ContextMenu from '@renderer/components/ContextMenu'
import InputFilter from '@renderer/components/CustomField/InputFilter'
import SelectField from '@renderer/components/CustomField/SelectField'
import FormInteraction from '@renderer/components/Form/FormInteraction'
import RenderContextMenu from '@renderer/components/RenderContextMenu'
import TableInteractionAcc from '@renderer/components/Table/TableAccount/TableInteractionAcc'
import { configMenuActionAccount } from '@renderer/config/configContextMenu'
import { setPageTitle } from '@renderer/store/themeConfigSlice'
import { Button } from 'flowbite-react'
import { ChevronDown, CirclePlay, CircleX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

const InteractionAcc = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageTitle('Tương tác tài khoản'))
  })
  const [selectedRecords, setSelectedRecords] = useState<any[]>([])
  const [isScriptDropdownVisible, setIsScriptDropdownVisible] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const toggleScriptDropdown = () => {
    setIsScriptDropdownVisible(!isScriptDropdownVisible)
  }
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsScriptDropdownVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <div className="flex gap-3">
        <div className="gap-2 flex mb-3 h-fit 2xl:w-[65%] w-[60%] px-2 py-5 pt-0">
          <SelectField name="group" placeholder="Danh mục" className="w-[50%] py-0" />
          <Button className="bg-green-700 rounded-xl" size="sm">
            <CirclePlay size={20} className="mr-2" />
            Start
          </Button>
          <Button className="bg-red-700 rounded-xl" size="sm">
            <CircleX size={20} className="mr-2" />
            Stop
          </Button>
        </div>
        <div className="2xl:w-[35%] w-[40%] px-2 py-5 pt-0 relative" ref={dropdownRef}>
          <p
            className="border border-[#dedede] w-[30%] px-4 py-1 rounded-[5px] flex justify-between items-center hover:border-[#000] cursor-pointer"
            onClick={toggleScriptDropdown}
          >
            Kịch bản <ChevronDown />
          </p>
          {isScriptDropdownVisible && (
            <div className="absolute z-[99] top-[29px] mt-1 w-[80%] bg-white border border-gray-300 rounded shadow-md">
              {/* Content of the popup */}
              <div className="flex items-center justify-between px-[10px] py-[5px]">
                <InputFilter onChangeValue={() => {}} />
                <ButtonFlowbite color="warning" className="h-max bg-[#F9C047] py-[3px] border-0">
                  Thêm kịch bản
                </ButtonFlowbite>
              </div>
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Kịch bản 1</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Kịch bản 2</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Kịch bản 3</li>
              </ul>
            </div>
          )}
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
            <FormInteraction />
          </div>
        </div>
      </div>
    </>
  )
}

export default InteractionAcc
