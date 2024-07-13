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
      <Modal.Header className="px-5 py-3">{t('add_account')}</Modal.Header>
      <Modal.Body>
        <form className="space-y-3 mb-3" onSubmit={handleSubmit}>
          <TextAreaField
            // title={t('add_account')}
            placeholder={t('enter_account')}
            name="accountHolder"
            clsTextArea="!max-h-[200px] h-[200px] "
          />
          <div className="flex gap-3 items-center justify-between !my-[9px] !mb-4">
            <div className="flex items-center gap-3">
              <SelectField
                name="accountType"
                placeholder={t('choice_index')}
                parenSelect="w-[210px] max-[1500px]:w-[230px]"
              />
              <SelectField
                name="accountType"
                placeholder={t('choice_format')}
                parenSelect="w-[210px] max-[1500px]:w-[230px]"
              />
              <InputField
                name="Type"
                classInputContainer="200px"
                placeholder={t('enter_format')}
                inputClassName="shadow-[0_0_2px_#3b82f6] focus:!shadow-[0_0_4px_#3b82f6]"
              />
            </div>
            <div className="flex items-center gap-3">
              <ButtonFlowbite color="warning" className="h-max bg-[#F9C047] py-[3px] border-0">
                {t('do_new')}
              </ButtonFlowbite>
              <ButtonFlowbite color="warning" className="h-max bg-[#C8293D] py-[3px] border-0">
                {t('delete_line')}
              </ButtonFlowbite>
            </div>
          </div>
        </form>
        <MantineTableCustom column={configTableAddAccount.map(r => ({...r,title: r.accessor}))} data={[]} clsTable="h-[30vh]" />
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
