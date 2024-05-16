import { Modal } from 'flowbite-react'
import { Dispatch, FC, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import ButtonFlowbite from '../ButtonFlowbite'
import InputField from '../CustomField/InputField'

interface ModalAddCategoryProps {
  isShow: boolean
  setIsShow?: Dispatch<SetStateAction<boolean>>
}

const ModalAddCategory: FC<ModalAddCategoryProps> = ({ isShow, setIsShow }) => {
  const handleClose = (): void => setIsShow && setIsShow(false)
  const handleSubmit = (): void => {
    toast.success('Thêm danh mục thành công')
  }
  return (
    <Modal show={isShow} onClose={handleClose} className="modal">
      <Modal.Header className="px-5 py-3">Thêm danh mục</Modal.Header>
      <Modal.Body>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <InputField title="Thêm danh mục" placeholder="Nhập danh mục" name="accountHolder" />
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

export default ModalAddCategory
