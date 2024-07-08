import { Button, Modal } from 'flowbite-react'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import SelectField from '../CustomField/SelectField'
import ButtonC from '../CustomField/ButtonC'
import 'react-toastify/dist/ReactToastify.css'
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
  const [files, setFiles] = useState<{ files: File[] | [] }>({ files: [] })
  const [inNumber, setInNumber] = useState<number>(1)
  const [isShowImage, setIsShowImage] = useState(false)
  const [isShowAI, setIsShowAI] = useState(false)
  const [error, setError] = useState(false)

  const handleClose = (): void => setIsShow && setIsShow(false)
  const onSubmit = (data): void => {
    console.log(data, 'data')
  }
  console.log(files, 'files')

  return (
    <Modal
      show={isShow}
      onClose={handleClose}
      className="modal-post modal max-h-full overflow-auto"
    >
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
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="px-2 py-2 pt-5  relative  rounded-xl">
            <div className="rounded-xl  mt-1">
              <TextAreaField
                register={{ ...register('title', { required: true }) }}
                name="title"
                title="Tiêu đề bài đăng"
                placeholder="Tiêu đề bài đăng"
                clsTextArea=" !overflow-auto"
              />
              {errors.title && <p className="text-sm text-red-500 ">This field is required</p>}
            </div>
            <div className="rounded-xl  mt-1 flex items-center">
              <div className={isShowImage ? 'w-1/2' : 'w-full'}>
                <TextAreaField
                  register={{ ...register('content', { required: true }) }}
                  name="content"
                  title="Nội dung"
                  placeholder="Nội dung"
                  clsTextArea="h-[150px] !overflow-auto"
                />
                {errors.content && (
                  <p className="text-sm text-red-500 mt-[-5px]">This field is required</p>
                )}
              </div>
              {isShowImage && (
                <div className="w-1/2">
                  <div className="flex items-center">
                    <div className="w-fit flex items-center">
                      <InputNumberField
                        name="limit"
                        clsLabel="mr-1 mt-[-2px]"
                        title="Kèm ảnh"
                        classInput="h-[30px] mt-[-8px]"
                        classInputContainer="flex items-center mt-[-5px] mb-[4px]"
                        min={1}
                        max={100}
                        value={inNumber}
                        onChange={(e: any) => setInNumber(e.target.value)}
                      />
                      {error && <p className="text-sm text-red-500 ml-2">Max là {inNumber}</p>}
                    </div>
                  </div>
                  <div className="h-[150px] px-1">
                    <TextAreaField
                      register={{ ...register('images', { required: true }) }}
                      name="images"
                      value={files.files.map((f) => f.path).join(', ')}
                      placeholder="Danh sách ảnh"
                      clsTextArea=" h-[150px] !p-1 text-[13px] !overflow-auto"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="w-full text-blue-500 relative">
              {isShowImage && (
                <div className="w-fit absolute top-0 right-0">
                  <UploadFileField
                    name="file"
                    setError={setError}
                    clsContainer=""
                    buttonText="get file"
                    accept=""
                    changeFile={setFiles}
                    clsInput="hidden"
                    max={inNumber}
                    clsLabel="w-fit !mb-0"
                    clsLabelRoot="w-fit"
                  />
                </div>
              )}
              <h3 className="text-sm">{t('Ký tự hợp lệ')}</h3>
              <div className="flex items-center">
                <div className="mr-7">
                  <div className="text-[13px] flex items-center">
                    <p className="w-[100px]">$Number</p>
                    <p>:random số</p>
                  </div>{' '}
                  <div className="text-[13px] flex items-center">
                    <p className="w-[100px]">$Timespan</p>
                    <p>:lấy timespan hiện tại</p>
                  </div>{' '}
                  <div className="text-[13px] flex items-center">
                    <p className="w-[100px]">$Date</p>
                    <p>:lấy ngày hiện tại</p>
                  </div>
                </div>
                <div className="mr-5">
                  <div className="text-[13px] flex items-center">
                    <p className="w-[50px]">$Date </p>
                    <p>:lấy ngày hiện tại</p>
                  </div>{' '}
                  <div className="text-[13px] flex items-center">
                    <p className="w-[50px]">$Text</p>
                    <p>:lấy đoạn mã ngãu nhiên</p>
                  </div>{' '}
                  <div className="text-[13px] flex items-center">
                    <p className="w-[50px]">$Smile</p>
                    <p>:lấy icon ngẫu nhiên</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button className="bg-blue-500 mt-3" type="submit">
            {t('Lưu nội dung')}{' '}
          </Button>
        </form>
      </Modal.Body>{' '}
      <ModalRenderAI isShow={isShowAI} setIsShow={setIsShowAI} />s
      <ToastContainer />
    </Modal>
  )
}

export default ModalAddPost
