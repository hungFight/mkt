import configStatic from '@renderer/config'
import { Modal } from 'flowbite-react'
import { Dispatch, FC, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import ButtonFlowbite from '../ButtonFlowbite'
import CheckboxField from '../CustomField/CheckboxField'

interface ModalHiddenRowProps {
  isShow: boolean
  setIsShow?: Dispatch<SetStateAction<boolean>>
}

const ModalHiddenRow: FC<ModalHiddenRowProps> = ({ isShow, setIsShow }) => {
  const handleClose = (): void => setIsShow && setIsShow(false)
  const handleSubmit = (): void => {
    toast.success('Hiển thị cột thành công')
  }
  return (
    <Modal show={isShow} onClose={handleClose} className="modal">
      <Modal.Header className="px-5 py-3">Hiển thị cột</Modal.Header>
      <Modal.Body>
        <form
          className="space-y-3 flex items-center flex-wrap gap-y-[20px]"
          onSubmit={handleSubmit}
        >
          {configStatic.configHidden.map((field, index) => (
            <CheckboxField
              key={index}
              title={field.title}
              name={field.name}
              classInputContainer="w-1/4 !mt-0"
            />
          ))}
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

export default ModalHiddenRow
