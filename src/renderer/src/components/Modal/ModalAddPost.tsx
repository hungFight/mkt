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
import { IoCloseOutline, IoImageOutline } from 'react-icons/io5'
import InputNumberField from '../CustomField/InputNumberField'
import UploadFileField, { paramsChangeFile } from '../CustomField/UploadFileField'
import ModalRenderAI from './ModalRenderAI'
import CheckboxField from '../CustomField/CheckboxField'
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
  const [files, setFiles] = useState<{ files: File[] }>({ files: [] })
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
      className="modal-post modal max-h-full overflow-auto "
    >
      <div className="bg-[#f2f2f2] rounded-tr-[6px] rounded-tl-[6px]">
        <Modal.Header className="px-5 py-3 font-bold items-center">{t('add_post')}</Modal.Header>
      </div>
      <Modal.Body>
        <div className=" flex items-center justify-between overflow-auto relative ">
          <div className="w-full flex items-center mt-5 justify-between">
            <SelectField
              placeholder={t('choice_index')}
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
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className=" py-2 pt-5  relative   rounded-[5px] mb-[35px]">
            <div className="rounded-xl  mt-1  mb-5">
              <TextAreaField
                register={{ ...register('title', { required: true }) }}
                name="title"
                isRequire
                title={t('title_post')}
                clsTextArea="!overflow-auto resize-none"
                classInputContainer="relative"
                clsTextLabel="absolute top-[-18px] left-2 bg-white p-1 font-light"
              />
              {errors.title && <p className="text-sm text-red-500 ">{t('require')}</p>}
            </div>
            <div className="rounded-xl ">
              <div className="w-full ">
                <TextAreaField
                  register={{ ...register('content', { required: true }) }}
                  name="content"
                  title={t('content')}
                  isRequire
                  classInputContainer="relative"
                  clsTextLabel="absolute top-[-18px] left-2 bg-white p-1 font-light"
                  clsTextArea="h-[150px] !max-h-auto !overflow-auto"
                />
                {errors.content && <p className="text-sm text-red-500 mt-[-5px]">{t('require')}</p>}
              </div>
              <div className="flex items-center mb-3">
                <CheckboxField
                  name="Nội dung kèm ảnh"
                  title={t('Nội dung kèm ảnh')}
                  onChange={(e: any) => setIsShowImage(e.target.checked)}
                />
              </div>
              {isShowImage && (
                <div className="w-full">
                  <div className="flex items-center ">
                    <div className="w-fit flex items-center p-1">
                      <InputNumberField
                        name="limit"
                        clsLabel="mr-1 "
                        title={t('width_image')}
                        classInput="h-[30px] "
                        classInputContainer="flex items-center mt-[-5px] mb-[4px]"
                        min={1}
                        max={100}
                        value={inNumber}
                        onChange={(e: any) => setInNumber(e.target.value)}
                      />
                      {error && <p className="text-sm text-red-500 ml-2">Max là {inNumber}</p>}
                    </div>
                  </div>
                  <div className="w-full px-1 ">
                    <div className="w-full h-[200px] border border-blue-500 rounded-[10px] mb-2 p-4 overflow-auto relative">
                      {files.files.map((f, index) => (
                        <div className="flex items-center justify-between hover:bg-black-light cursor-pointer px-2 py-1">
                          <div className="flex items-center">
                            <h2 className="w-5 mr-2">{index + 1}:</h2>
                            <p className="text-[13px]">{f.path}</p>
                          </div>
                          <div className="flex items-center  hoverImage">
                            <img
                              src={URL.createObjectURL(f)}
                              alt={f.path}
                              className="w-6 h-6 rounded-[5px] mr-3"
                            />
                            <img
                              src={URL.createObjectURL(f)}
                              alt={f.path}
                              className="hidden max-w-[150px] h-[150px] absolute top-3 right-[100px] rounded-[5px] mr-3 hoveredImage"
                            />
                            <div
                              className="text-[25px] flex items-center justify-center rounded-[50%] hover:bg-white"
                              onClick={() =>
                                setFiles((pre) => ({
                                  files: pre.files.filter((_, indexF) => indexF !== index)
                                }))
                              }
                            >
                              <IoCloseOutline />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* <TextAreaField
                      register={{ ...register('images', { required: true }) }}
                      name="images"
                      value={files.files.map((f) => f.path).join(', ')}
                      placeholder={t('list_image')}
                      clsTextArea=" h-[150px] !max-h-auto !p-1 text-[13px] !overflow-auto"
                      classInputContainer="w-[70%]"
                    /> */}
                    {isShowImage && (
                      <UploadFileField
                        name="file"
                        setError={setError}
                        clsContainer=""
                        buttonText="get file"
                        accept=""
                        changeFile={setFiles}
                        clsInput="hidden"
                        clsLabel="w-fit !mb-0"
                        clsLabelRoot="w-fit"
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="w-full text-blue-500 relative">
              <h3 className="text-sm my-3">{t('valid_character')}</h3>
              <div className="flex items-center">
                <div className="mr-7">
                  <div className="text-[12px] flex items-center mb-1">
                    <p className="w-[100px]">$Number</p>
                    <p>:{t('random_number')}</p>
                  </div>{' '}
                  <div className="text-[12px] flex items-center mb-1">
                    <p className="w-[100px]">$Timespan</p>
                    <p>:{t('get_current_timespan')}</p>
                  </div>{' '}
                  <div className="text-[12px] flex items-center mb-1">
                    <p className="w-[100px]">$Time</p>
                    <p>:{t('get_current_time')}</p>
                  </div>
                </div>
                <div className="mr-5">
                  <div className="text-[12px] flex items-center mb-1">
                    <p className="w-[50px]">$Date </p>
                    <p>:{t('get_current_date')}</p>
                  </div>{' '}
                  <div className="text-[12px] flex items-center mb-1">
                    <p className="w-[50px]">$Text</p>
                    <p>:{t('get_random_code')}</p>
                  </div>{' '}
                  <div className="text-[12px] flex items-center mb-1">
                    <p className="w-[50px]">$Smile</p>
                    <p>:{t('get_random_icon')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full flex justify-center items-center p-3 bg-white border-t">
            <Button className="bg-blue-500  " type="submit">
              {t('Lưu nội dung')}{' '}
            </Button>
          </div>
        </form>
      </Modal.Body>{' '}
      <ModalRenderAI isShow={isShowAI} setIsShow={setIsShowAI} />
      <ToastContainer />
    </Modal>
  )
}

export default ModalAddPost
