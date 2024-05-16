import { Modal } from 'flowbite-react'
import { Dispatch, FC, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import ButtonFlowbite from '../ButtonFlowbite'
import TextAreaField from '../CustomField/TextAreaField'

interface ModalAddAccountProps {
  isShow: boolean
  setIsShow?: Dispatch<SetStateAction<boolean>>
}

const ModalAddAccount: FC<ModalAddAccountProps> = ({ isShow, setIsShow }) => {
  const handleClose = (): void => setIsShow && setIsShow(false)
  const handleSubmit = (): void => {
    toast.success('Thêm tài khoản thành công')
  }
  return (
    <Modal show={isShow} onClose={handleClose} className="modal-acc modal">
      <Modal.Header className="px-5 py-3">Thêm tài khoản</Modal.Header>
      <Modal.Body>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <TextAreaField title="Thêm tài khoản" placeholder="Nhập tài khoản" name="accountHolder" />
        </form>
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
