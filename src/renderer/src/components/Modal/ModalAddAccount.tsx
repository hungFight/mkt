import { configTableAddAccount } from '@renderer/config/configTable'
import { Modal } from 'flowbite-react'
import { Dispatch, FC, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import ButtonFlowbite from '../ButtonFlowbite'
import InputField from '../CustomField/InputField'
import SelectField from '../CustomField/SelectField'
import TextAreaField from '../CustomField/TextAreaField'
import MantineTableCustom from '../MantineTableCustom'
import { useTranslation } from 'react-i18next'

interface ModalTrashAccountProps {
  isShow: boolean
  setIsShow?: Dispatch<SetStateAction<boolean>>
}

const ModalAddAccount: FC<ModalTrashAccountProps> = ({ isShow, setIsShow }) => {
  const { t } = useTranslation()
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
            title={t('add_account')}
            placeholder={t('enter_account')}
            name="accountHolder"
            clsTextArea="!max-h-[200px] h-[200px] "
          />
          <div className="flex gap-3 items-end">
            <SelectField
              name="accountType"
              placeholder={t('choice_index')}
              parenSelect="w-[270px]"
            />
            <SelectField
              name="accountType"
              placeholder={t('choice_format')}
              parenSelect="w-[270px]"
            />
            <InputField
              name="Type"
              classInputContainer="w-[40%]"
              placeholder={t('enter_format')}
              inputClassName="shadow-[0_0_2px_#3b82f6] focus:!shadow-[0_0_4px_#3b82f6]"
            />
            <ButtonFlowbite color="warning" className="h-max bg-[#F9C047] py-[3px] border-0">
              {t('do_new')}
            </ButtonFlowbite>
            <ButtonFlowbite color="warning" className="h-max bg-[#C8293D] py-[3px] border-0">
              {t('delete_line')}
            </ButtonFlowbite>
          </div>
        </form>
        <MantineTableCustom column={configTableAddAccount} data={[]} clsTable="h-[35vh]" />
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

export default ModalAddAccount
