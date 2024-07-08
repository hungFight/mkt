import { configTableAddAccount, configTableTrashAccount } from '@renderer/config/configTable'
import { Button, Modal } from 'flowbite-react'
import { Dispatch, FC, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import ButtonFlowbite from '../ButtonFlowbite'
import MantineTableCustom from '../MantineTableCustom'
import { useTranslation } from 'react-i18next'
import { EyeOff, RotateCcw, RotateCw, Search, Trash2 } from 'lucide-react'
import ToolTips from '../Tooltips'
import InputField from '../CustomField/InputField'
import SelectField from '../CustomField/SelectField'

interface ModalAddAccountProps {
  isShow: boolean
  setIsShow?: Dispatch<SetStateAction<boolean>>
}

const ModalTrashAccount: FC<ModalAddAccountProps> = ({ isShow, setIsShow }) => {
  const { t } = useTranslation()
  const handleClose = (): void => setIsShow && setIsShow(false)
  const handleSubmit = (): void => {
    setIsShow && setIsShow(false)
    toast.success(t('account_added_successfully'))
  }
  const data = [
    {
      uid: '1'
    },
    {
      uid: '1'
    },
    {
      uid: '1'
    },
    {
      uid: '1'
    },
    {
      uid: '1'
    },
    {
      uid: '1'
    },
    {
      uid: '1'
    },
    {
      uid: '1'
    },
    {
      uid: '1'
    },
    {
      uid: '1'
    },
    {
      uid: '1'
    }
  ]
  return (
    <Modal show={isShow} onClose={handleClose} className="modal-acc modal">
      <div className="bg-[#f2f2f2] rounded-tr-[6px] rounded-tl-[6px]">
        <Modal.Header className="px-5 py-3 font-bold items-center">{t('trash')}</Modal.Header>
      </div>
      <Modal.Body>
        <div className="flex gap-2 ">
          <ToolTips content={t('account_recovery')}>
            <ButtonFlowbite
              className="add-account rounded-xl p-1 px-3"
              size="sm"
              color="blue"
              // onClick={openModalAccount}
            >
              <div className="w-5 h-5 flex mr-2 items-center justify-center p-[3px] rounded-[50%] bg-white text-black">
                <RotateCw size={15} />
              </div>
              {t('account_recovery')}
            </ButtonFlowbite>
          </ToolTips>
          <ToolTips content={t('folder_recovery')}>
            <ButtonFlowbite
              className="add-account rounded-xl p-1 px-3"
              size="sm"
              color="blue"
              // onClick={openModalAccount}
            >
              <div className="w-5 h-5 flex mr-2 items-center justify-center p-[3px] rounded-[50%] bg-white text-black">
                <RotateCw size={15} />
              </div>
              {t('folder_recovery')}
            </ButtonFlowbite>
          </ToolTips>
          <ToolTips content={t('delete_all')}>
            <ButtonFlowbite
              className="add-account rounded-xl p-1 px-3"
              size="sm"
              color="failure"
              // onClick={openModalAccount}
            >
              <div className="w-5 h-5 flex mr-2 items-center justify-center p-[3px] rounded-[50%] bg-white text-black">
                <Trash2 size={15} />
              </div>
              {t('delete_all')}
            </ButtonFlowbite>
          </ToolTips>
        </div>
        <div className="px-2 py-2 pt-5 border relative border-blue-500 border-dashed my-10 rounded-xl">
          <div className="w-full  h-10 flex items-center justify-between mt-1 mb-5">
            <div className="flex items-center w-[250px] h-full">
              <InputField type="search" name="search" placeholder={t('search')} />
              <div className="flex bg-blue-500 rounded-br-xl rounded-tr-xl text-white items-center justify-center w-[90px] h-full">
                <Search size={20} />
              </div>
            </div>{' '}
            <div className="flex items-center w-[250px]">
              <SelectField name="" parenSelect="w-full" />
            </div>
          </div>
          <p className="absolute top-[-20px] left-3 bg-white px-2 py-1 text-blue-400">
            {t('deleted_list')}
          </p>
          <div className="rounded-xl border">
            <MantineTableCustom column={configTableTrashAccount} data={data} clsTable="h-[35vh]" />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ModalTrashAccount
