import { configInteraction } from '@renderer/config/configInteraction'
import { Modal } from 'flowbite-react'
import { Dispatch, FC, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import ButtonFlowbite from '../ButtonFlowbite'
import FormConfigInteraction from '../Form/FormConfigInteraction'
import Tabs from '../Tabs'

interface ModalScriptProps {
  isShow: boolean
  setIsShow?: Dispatch<SetStateAction<boolean>>
}

const ModalScript: FC<ModalScriptProps> = ({ isShow, setIsShow }) => {
  const handleClose = (): void => setIsShow && setIsShow(false)
  const handleSubmit = (): void => {
    setIsShow && setIsShow(false)
    toast.success('Thêm tài khoản thành công')
  }
  return (
    <Modal show={isShow} onClose={handleClose} className="modal-config modal">
      <Modal.Header className="px-5 py-3">Cấu hình tương tác tài khoản</Modal.Header>
      <Modal.Body>
        <form className="space-y-3 mb-3" onSubmit={handleSubmit}>
          <FormConfigInteraction />
          <Tabs tabs={configInteraction} />
        </form>
      </Modal.Body>
      <Modal.Footer className="flex justify-end gap-3 px-5 py-3">
        <ButtonFlowbite type="submit" color="blue">
          Lưu
        </ButtonFlowbite>
        <ButtonFlowbite onClick={handleClose} className="bg-red-500">
          Hủy
        </ButtonFlowbite>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalScript
