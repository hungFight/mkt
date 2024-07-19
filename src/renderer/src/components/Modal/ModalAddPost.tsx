import logo from '@renderer/assets/images/Table-Logo.png'
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
import TextareaURL from '../TextareaURL'
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
      className="modal-progress modal max-h-full overflow-auto "
    >
      <div className="bg-[#d6d6d6] rounded-tr-[6px] rounded-tl-[6px] ">
        <Modal.Header className="px-5 py-2 items-center ">
          <div className="flex items-center  font-bold text-base">
            <img src={logo} alt="MKT systems" className="w-8 h-8 mr-1" />
            {t('add_post')}
          </div>
        </Modal.Header>
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
              title={t('render_ai')}
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
                  name={t('content_image')}
                  title={t('content_image')}
                  onChange={(e: any) => setIsShowImage(e.target.checked)}
                />
              </div>
              <div className="w-full">
                <div className="flex items-center ">
                  <div className="w-fit flex items-center p-1">
                    <InputNumberField
                      name="limit"
                      clsLabel="mr-1 "
                      title={t('with_image')}
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
                  {/* <TextareaURL files={files.files} setFiles={setFiles} /> */}
                  <TextAreaField
                    register={{ ...register('images', { required: true }) }}
                    name="images"
                    value={files.files.map((f) => f.path).join(', ')}
                    placeholder={t('list_image')}
                    clsTextArea=" h-[150px] !max-h-auto !p-1 text-[13px] !overflow-auto"
                    classInputContainer="w-[70%]"
                  />
                  <UploadFileField
                    name="file"
                    setError={setError}
                    clsContainer=""
                    buttonText="get file"
                    accept=""
                    changeFile={setFiles}
                    clsInput="hidden"
                    clsLabel="w-fit !mb-0"
                    isShowImage={isShowImage}
                    clsButtons={` ${isShowImage ? '' : 'opacity-50 !cursor-no-drop'}`}
                    clsLabelRoot={`w-fit`}
                  />
                </div>
              </div>
            </div>
            <div className="w-full text-blue-500 relative ">
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
              {t('save_content')}{' '}
            </Button>
          </div>
        </form>
      </Modal.Body>{' '}
      <ModalRenderAI isShow={isShowAI} setIsShow={setIsShowAI} title={t('create_post')} moreBox />
      <ToastContainer />
    </Modal>
  )
}

export default ModalAddPost
