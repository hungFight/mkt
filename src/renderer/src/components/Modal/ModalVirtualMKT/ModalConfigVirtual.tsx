import { Modal } from 'flowbite-react'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import ButtonFlowbite from '@renderer/components/ButtonFlowbite'
import ButtonC from '@renderer/components/CustomField/ButtonC'
import { VscCloudDownload } from 'react-icons/vsc'
import {
  configTableVirtualModalConfigOne,
  configTableVirtualModalConfigTwo
} from '@renderer/config/configTable'
import {
  data,
  dataTwo,
  dataVirtualModalConfigOne,
  dataVirtualModalConfigTwo
} from '@renderer/pages/data/postProfileData'
import MantineTableCustom from '@renderer/components/MantineTableCustom'
interface PropsModalConfig {
  isShow: boolean
  setIsShow?: Dispatch<SetStateAction<boolean>>
}

const ModalConfigVirtual: FC<PropsModalConfig> = ({ isShow, setIsShow }) => {
  const { t } = useTranslation()
  const handleClose = (): void => setIsShow && setIsShow(false)
  const [loading, setLoading] = useState<boolean>(false)
  const handleSubmit = (): void => {
    setIsShow && setIsShow(false)
    toast.success('Thêm tài khoản thành công')
  }
  return (
    <Modal show={isShow} onClose={handleClose} className="modal-virtual-config modal">
      <Modal.Header className="px-5 py-3">{t('middle_config')}</Modal.Header>
      <Modal.Body>
        <form className="space-y-3 mb-3" onSubmit={handleSubmit}>
          <div className="w-full  px-2 pb-2 pt-0">
            <div className="w-full flex items-center justify-between px-[2px] pl-1 rounded-[10px] ">
              <div className="flex items-center justify-start pb-2"></div>{' '}
            </div>
            <div className="flex items-center justify-between mt-5   ">
              <div className="w-[38%] min-[1438px]:w-[35%] h-[69vh] border-t border-[rgb(214_214_214)] rounded-[10px] bg-[rgb(255_255_255)] relative">
                <h2 className="w-fit text-base relative top-[-16px] left-3 px-3 py-1 z-10">
                  <p className="z-10 relative">{t('list_category')}</p>
                  <div className="w-full absolute top-[15px] left-[1px] h-[1px] bg-white "></div>
                </h2>
                <div className=" px-2">
                  <div className="   overflow-auto mt-[-12px] category">
                    <MantineTableCustom
                      column={configTableVirtualModalConfigOne.map((r) => ({
                        ...r,
                        title: t(r.accessor)
                      }))}
                      data={dataVirtualModalConfigOne}
                      clsTable="!h-[60vh] mb-2  border  rounded-[15px]"
                    />{' '}
                  </div>
                  <ButtonC
                    className="bg-blue-500"
                    title={t('load_data')}
                    icon={
                      //   <svg
                      //     aria-hidden="true"
                      //     role="status"
                      //     className="inline w-4 h-4 me-3 text-white animate-spin"
                      //     viewBox="0 0 100 101"
                      //     fill="none"
                      //     xmlns="http://www.w3.org/2000/svg"
                      //   >
                      //     <path
                      //       d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      //       fill="#E5E7EB"
                      //     />
                      //     <path
                      //       d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      //       fill="currentColor"
                      //     />
                      //   </svg>
                      <VscCloudDownload />
                    }
                  />
                </div>
              </div>
              <div className="w-[82%] min-[1438px]:w-[64%] h-[69vh] border-t border-[rgb(214_214_214)] rounded-[10px] relative bg-[rgb(255_255_255)]">
                <h2 className="w-fit text-base relative top-[-16px] left-3 px-3 py-1 z-10">
                  <p className="z-10 relative"> {t('list_post')}</p>
                  <div className="w-full absolute top-[15px] left-[1px] h-[1px] bg-white "></div>
                </h2>
                <div className="w-full bg-white overflow-hidden px-2 mt-2 relative top-[-20px]">
                  <div>
                    <MantineTableCustom
                      column={configTableVirtualModalConfigTwo.map((r) => ({
                        ...r,
                        title: t(r.accessor)
                      }))}
                      data={dataVirtualModalConfigTwo}
                      clsTable="!h-[60vh]  border  rounded-[15px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="flex justify-end gap-3 px-5 py-3">
        <ButtonFlowbite type="submit" onClick={handleClose} className="bg-red-500">
          {t('cancel')}
        </ButtonFlowbite>
        <ButtonFlowbite className="bg-blue-500">{t('save')}</ButtonFlowbite>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalConfigVirtual
