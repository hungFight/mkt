import { configTableAddAccount } from '@renderer/config/configTable'
import { Modal } from 'flowbite-react'
import { Dispatch, FC, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import ButtonFlowbite from '../ButtonFlowbite'
import InputField from '../CustomField/InputField'
import SelectField from '../CustomField/SelectField'
import TextAreaField from '../CustomField/TextAreaField'
import MantineTableCustom from '../MantineTableCustom'

interface ModalAddAccountProps {
  isShow: boolean
  setIsShow?: Dispatch<SetStateAction<boolean>>
}

const ModalAddAccount: FC<ModalAddAccountProps> = ({ isShow, setIsShow }) => {
  const handleClose = (): void => setIsShow && setIsShow(false)
  const handleSubmit = (): void => {
    setIsShow && setIsShow(false)
    toast.success('Thêm tài khoản thành công')
  }
  return (
    <Modal show={isShow} onClose={handleClose} className="modal-acc modal">
      <Modal.Header className="px-5 py-3">Thêm tài khoản</Modal.Header>
      <Modal.Body>
        <form className="space-y-3 mb-3" onSubmit={handleSubmit}>
          <TextAreaField
            title="Thêm tài khoản"
            placeholder="Nhập tài khoản"
            name="accountHolder"
            clsTextArea="!max-h-[200px] h-[200px]"
          />
          <div className="flex gap-3 items-end">
            <SelectField name="accountType" title="Chọn danh mục" />
            <SelectField name="accountType" title="Chọn định dạng" />
            <InputField title="Định dạng nhập" name="Type" classInputContainer="w-[40%]" />
            <ButtonFlowbite color="warning" className="h-max bg-[#F9C047] py-[3px] border-0">
              Làm mới
            </ButtonFlowbite>
            <ButtonFlowbite color="warning" className="h-max bg-[#C8293D] py-[3px] border-0">
              Xóa dòng
            </ButtonFlowbite>
          </div>
        </form>
        <MantineTableCustom column={configTableAddAccount} data={[]} clsTable="h-[35vh]" />
      </Modal.Body>
      <Modal.Footer className="flex justify-end gap-3 px-5 py-3">
        <ButtonFlowbite type="submit" color="blue">
          Thêm
        </ButtonFlowbite>
        <ButtonFlowbite onClick={handleClose} className="bg-red-500">
          Hủy
        </ButtonFlowbite>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalAddAccount
