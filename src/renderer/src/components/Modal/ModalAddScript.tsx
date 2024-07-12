import { configTableAddAccount } from '@renderer/config/configTable'
import { Modal } from 'flowbite-react'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { toast } from 'react-toastify'
import ButtonFlowbite from '../ButtonFlowbite'
import InputField from '../CustomField/InputField'
import SelectField from '../CustomField/SelectField'
import TextAreaField from '../CustomField/TextAreaField'
import MantineTableCustom from '../MantineTableCustom'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import ToggleSwitch from '../ToggleSwitch'
import ButtonC from '../CustomField/ButtonC'
import InputNumberField from '../CustomField/InputNumberField'
import CheckboxField from '../CustomField/CheckboxField'
import { LiaHandPointer } from 'react-icons/lia'

interface ModalTrashAccountProps {
  isShow: boolean
  setIsShow?: Dispatch<SetStateAction<boolean>>
}

const ModalAddScript: FC<ModalTrashAccountProps> = ({ isShow, setIsShow }) => {
  const { t } = useTranslation()
  const { register, handleSubmit } = useForm()
  const [switchScript, setSwitchScript] = useState({ add: false, edit: false })
  const [choiceList, setChoiceList] = useState<number>(1)
  const handleClose = (): void => setIsShow && setIsShow(false)
  const onSubmit = (data): void => {
    // setIsShow && setIsShow(false)
    // toast.success('Thêm tài khoản thành công')
  }
  const datList = [
    { id: 1, name: 'Tương tác cá nhân' },
    { id: 2, name: 'Tương tác bạn bè' },
    { id: 3, name: 'Tương tác nhóm' },
    { id: 4, name: 'Tương tác page' },
    { id: 5, name: 'Cập nhật thông tin tài khoản' }
  ]
  return (
    <Modal show={isShow} onClose={handleClose} className="modal-acc modal">
      <Modal.Header className="px-5 py-3">{t('interactive_config')}</Modal.Header>
      <Modal.Body>
        <form className="space-y-3 mb-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center pb-4 border-b ">
            <div className="mr-4">
              <ToggleSwitch
                spanText={t('add_new_script')}
                checked={switchScript.add}
                onChange={(e) => setSwitchScript((pre) => ({ ...pre, add: e.target.checked }))}
              />
              <div
                className={`flex items-center ${
                  !switchScript.add ? 'opacity-60 select-none pointer-events-none' : ''
                }`}
              >
                <InputField name="script" placeholder={t('name_script')} />
                <ButtonC title={t('add_script')} className="bg-blue-500 p-[11px] ml-2" />
              </div>
            </div>
            <div className={``}>
              <ToggleSwitch
                spanText={t('edit_current_script')}
                checked={switchScript.edit}
                onChange={(e) => setSwitchScript((pre) => ({ ...pre, edit: e.target.checked }))}
              />
              <div
                className={`flex items-center ${
                  !switchScript.edit ? 'opacity-60 select-none pointer-events-none' : ''
                }`}
              >
                <SelectField
                  name="script"
                  placeholder={t('script')}
                  parenSelect="w-[200px] rounded-[5px] border border-[#b1b1b1]"
                />
                <ButtonC title={t('delete_script')} className="bg-red-500 p-[11px] ml-2" />
              </div>
            </div>
          </div>
          <div className=" py-4 pt-[14px] border-b">
            <div className="flex items-center w-fit">
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                title="Tổng số hành động thao tác"
                // onChange={(e: any) => setInNumber(e.target.value)}
                // value={inNumber}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span="Hành động"
                clsTitle="w-[200px] "
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start mb-2"
              />{' '}
            </div>{' '}
            <div className="flex items-center justify-start w-fit">
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                title="Khoảng cách 2 lần tương tác"
                // onChange={(e: any) => setInNumber(e.target.value)}
                // value={inNumber}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                clsTitle="w-[200px] text-[15px]"
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start mb-2"
              />{' '}
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                // onChange={(e: any) => setInNumber(e.target.value)}
                // value={inNumber}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span="Giây"
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start mb-2"
              />{' '}
            </div>
          </div>
          <div className="mt-2 py-2">
            <div className=" w-fit">
              <CheckboxField
                name="not_same"
                title="Không tương tác trùng hành động"
                classInputContainer="mb-2"
                classLabel=" text-sm"
              />
              <CheckboxField
                name="not_same"
                title="Chọn/Bỏ tất cả hành đồng"
                classLabel=" text-sm"
              />
            </div>{' '}
          </div>
          <div className="w-full">
            <div className="border-b h-fit flex items-center">
              {datList.map((r) => (
                <p
                  key={r.id}
                  className={`text-sm p-3 mx-1 border-b-[2px] ${
                    choiceList === r.id ? 'border-blue-500 text-blue-500' : 'hover:text-[#4f5051]'
                  } pb-5 cursor-pointer font-normal`}
                  onClick={() => setChoiceList(r.id)}
                >
                  {r.name}
                </p>
              ))}
            </div>
            <div className="w-full p-2 px-3 rounded-[5px] bg-[rgb(249_249_249_/_34%)] border h-[400px] mt-4">
              <div className="flex items-start ">
                <h3 className="text-blue-500 font-medium mr-4">Lựa chọn tương tác theo nhóm</h3>
                <div className="flex items-center mt-[2px]">
                  <fieldset className="">
                    <ToggleSwitch
                      spanText={t('Nhóm của tài khoản')}
                      checked={switchScript.add}
                      circle
                      name="by_group_id "
                      clsLabel="!m-0 !mr-4"
                      onChange={(e) =>
                        setSwitchScript((pre) => ({ ...pre, add: e.target.checked }))
                      }
                    />
                    <ToggleSwitch
                      spanText={t('Theo ID nhóm')}
                      checked={switchScript.add}
                      circle
                      clsLabel="!m-0"
                      name="by_group"
                      onChange={(e) =>
                        setSwitchScript((pre) => ({ ...pre, add: e.target.checked }))
                      }
                    />
                  </fieldset>
                </div>
              </div>
              <a href="#" className="font-medium text-sm flex items-center">
                <div className="rotate-[85deg] text-[20px] mr-1">
                  <LiaHandPointer />
                </div>{' '}
                Vui lòng nhập ID tại đây
              </a>
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="flex justify-end gap-3 px-5 py-3">
        <ButtonFlowbite type="submit" color="blue">
          {t('add')}
        </ButtonFlowbite>
        <ButtonFlowbite onClick={handleClose} className="bg-red-500">
          {t('cancel')}
        </ButtonFlowbite>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalAddScript
