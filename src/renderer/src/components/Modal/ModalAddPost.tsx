import { Button, Modal } from 'flowbite-react'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import SelectField from '../CustomField/SelectField'
import ButtonC from '../CustomField/ButtonC'
import 'react-toastify/dist/ReactToastify.css'
import ModalOneField from './ModalOneField'
import { useForm } from 'react-hook-form'
import TextAreaField from '../CustomField/TextAreaField'
import { FaRobot } from 'react-icons/fa6'
import { IoImageOutline } from 'react-icons/io5'
import InputNumberField from '../CustomField/InputNumberField'
import UploadFileField, { paramsChangeFile } from '../CustomField/UploadFileField'
import ModalRenderAI from './ModalRenderAI'
interface ModalAddAccountProps {
  isShow: boolean
  setIsShow?: Dispatch<SetStateAction<boolean>>
}

const ModalAddPost: FC<ModalAddAccountProps> = ({ isShow, setIsShow }) => {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const [files, setFiles] = useState<any>({ files: [] })
  const [inNumber, setInNumber] = useState<number>(1)
  const [isShowImage, setIsShowImage] = useState(false)
  const [isShowAI, setIsShowAI] = useState(false)

  const handleClose = (): void => setIsShow && setIsShow(false)
  const onSubmit = (data): void => {
    console.log(data, 'data', files.files[0].mozFullPath)
  }
  console.log(files, 'files')

  return (
    <Modal show={isShow} onClose={handleClose} className="modal-post modal">
      <div className="bg-[#f2f2f2] rounded-tr-[6px] rounded-tl-[6px]">
        <Modal.Header className="px-5 py-3 font-bold items-center">
          {t('Thêm bài viết')}
        </Modal.Header>
      </div>
      <Modal.Body>
        <div className="flex items-center justify-between">
          <SelectField
            placeholder="Chọn danh mục"
            options={[{ value: 'hello', label: 'Hello' }]}
            name="option"
          />
          <ButtonC
            title="Cấu hình Render AI"
            icon={<FaRobot />}
            className="bg-blue-500 py-2"
            onClick={() => setIsShowAI(true)}
          />
        </div>
        <div className="w-fit flex items-center mt-5">
          <div className={`${!isShowImage ? 'border-b-2 pb-1 border-black' : ''} mr-2`}>
            <ButtonC
              title="Trạng thái"
              className="bg-blue-500"
              onClick={() => setIsShowImage(false)}
            />
          </div>
          <div className={`${isShowImage ? 'border-b-2 pb-1 border-black' : ''}`}>
            <ButtonC
              title="Nội dung kèm ảnh"
              className="bg-purple-500"
              icon={<IoImageOutline />}
              onClick={() => setIsShowImage(true)}
            />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <div className="px-2 py-2 pt-5  relative  rounded-xl">
            <div className="rounded-xl  mt-1">
              <TextAreaField
                register={{ ...register('title', { required: true }) }}
                name="title"
                title="Tiêu đề bài đăng"
                placeholder="Tiêu đề bài đăng"
                clsTextArea="!border-2"
              />
              {errors.title && (
                <p className="text-sm text-red-500 mt-[-5px]">This field is required</p>
              )}
            </div>
            <div className="rounded-xl  mt-1">
              <TextAreaField
                register={{ ...register('content', { required: true }) }}
                name="content"
                title="Nội dung"
                placeholder="Nội dung"
                clsTextArea="!border-2 h-[150px]"
              />
              {errors.content && (
                <p className="text-sm text-red-500 mt-[-5px]">This field is required</p>
              )}
            </div>
            {isShowImage && (
              <>
                <div className="w-fit mb-5">
                  <InputNumberField
                    name="limit"
                    title="Kèm ảnh"
                    min={1}
                    max={100}
                    value={inNumber}
                    onChange={(e: any) => setInNumber(e.target.value)}
                  />
                </div>
                <div className="w-fit">
                  <UploadFileField
                    name="file"
                    clsContainer=""
                    buttonText="get file"
                    accept=""
                    changeFile={setFiles}
                    clsInput="hidden"
                    max={inNumber}
                    clsLabelRoot=""
                    moreTag={
                      <ButtonC className="text-sm font-light !text-black" title={t('add_image')} />
                    }
                  />
                </div>
              </>
            )}
          </div>
          <Button className="bg-blue-500" type="submit">
            {t('Lưu nội dung')}{' '}
          </Button>
        </form>
      </Modal.Body>{' '}
      <ModalRenderAI />
      <ToastContainer />
    </Modal>
  )
}

export default ModalAddPost
