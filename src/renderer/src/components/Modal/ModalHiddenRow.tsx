import configStatic from '@renderer/config'
import { Modal } from 'flowbite-react'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { toast } from 'react-toastify'
import ButtonFlowbite from '../ButtonFlowbite'
import CheckboxField from '../CustomField/CheckboxField'
import { useTranslation } from 'react-i18next'

interface ModalHiddenRowProps {
  isShow: boolean
  setIsShow?: Dispatch<SetStateAction<boolean>>
  setHiddenArray: Dispatch<SetStateAction<string[]>>
  hiddenArray: string[]
}

const ModalHiddenRow: FC<ModalHiddenRowProps> = ({
  isShow,
  setIsShow,
  setHiddenArray,
  hiddenArray
}) => {
  const { t } = useTranslation()
  const [preData, setPreData] = useState<typeof hiddenArray>(hiddenArray)
  const handleClose = (): void => setIsShow && setIsShow(false)
  const handleSubmit = (): void => {
    toast.success('Hiển thị cột thành công')
  }
  return (
    <Modal show={isShow} onClose={handleClose} className="modal">
      <Modal.Header className="px-5 py-3">{t('show_column')}</Modal.Header>
      <Modal.Body>
        <form
          className="space-y-3 flex items-center flex-wrap gap-y-[20px]"
          onSubmit={handleSubmit}
        >
          {configStatic.configHidden.map((field, index) => (
            <CheckboxField
              key={index}
              title={t(field.name)}
              name={field.name}
              defaultChecked={hiddenArray.includes(field.name)}
              onChange={(e: any) =>
                setPreData((pre) => {
                  if (pre.some((r) => r === field.name) && !e.target.checked) {
                    pre = pre.filter((r) => r !== field.name)
                  } else {
                    return [...pre, field.name]
                  }
                  return pre
                })
              }
              classInputContainer="w-1/4 !mt-0 mr-8"
            />
          ))}
        </form>
      </Modal.Body>
      <Modal.Footer className="flex justify-end gap-3 px-5 py-3">
        <ButtonFlowbite type="submit" color="blue" onClick={() => setHiddenArray(preData)}>
          Thêm
        </ButtonFlowbite>
        <ButtonFlowbite
          onClick={() => {
            setHiddenArray(hiddenArray)
            setIsShow && setIsShow(false)
          }}
          className="bg-red-500"
        >
          Hủy
        </ButtonFlowbite>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalHiddenRow
