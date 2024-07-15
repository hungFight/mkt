import { Button, Modal } from 'flowbite-react'
import React, { Dispatch, FC, ReactElement, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'
import TextAreaField from '../CustomField/TextAreaField'
import SelectField from '../CustomField/SelectField'
import ButtonC from '../CustomField/ButtonC'
import { useForm } from 'react-hook-form'

const ModalRenderAI: FC<{
  isShow: boolean
  setIsShow?: Dispatch<SetStateAction<boolean>>
  title: string
  Tags?: ReactElement
  moreBox?: boolean
}> = ({ isShow, setIsShow, title, moreBox, Tags }) => {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const handleClose = (): void => setIsShow && setIsShow(false)
  const onSubmit = (data): void => {
    console.log(data, 'data')
  }
  return (
    <Modal show={isShow} onClose={handleClose} className="modal-AI modal">
      <Modal.Header className="px-5 py-3">
        <div className="flex items-center">
          <div className="w-[25px] h-[25px] mr-2">
            <img src="/src/assets/images/MKT-care/care3.png" />
          </div>
          <p className="text-xl font-medium"> {t('render_ai')}</p>
        </div>
      </Modal.Header>
      <Modal.Body className="">
        <form className="font-light" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full py-1 border-b">
            <h2 className="w-fit text-center  p-[2px] text-sm mt-[-20px]  rounded-[5px] border-b border-blue-500">
              {title}
            </h2>
          </div>
          <div className="mt-6">
            {moreBox && (
              <>
                <div className="mb-2">
                  <TextAreaField
                    isRequire
                    title={t('title')}
                    placeholder="Nhập tiêu đề vào đây"
                    register={{ ...register('ai_title', { required: true }) }}
                    name="ai_title"
                    clsTextArea="text-[15px] p-5  "
                    clsTextLabel="!text-sm"
                  />
                  {errors.ai_title && (
                    <p className="text-[13px] mt-[-3px] text-red-500 ">{t('require')}</p>
                  )}
                </div>
                <div className="mb-2">
                  <TextAreaField
                    isRequire
                    isShadow
                    title={t('keyword')}
                    placeholder="Nhập từ khoá vào đây mỗi từ khoá cách nhau bằng dấu ,"
                    name="ai_keyword"
                    register={{ ...register('ai_keyword', { required: true }) }}
                    clsTextArea="text-[15px] p-5 !shadow-blue-500 "
                    clsTextLabel="!text-sm"
                  />
                  {errors.ai_keyword && (
                    <p className="text-[13px] mt-[-3px] text-red-500 ">This field is required</p>
                  )}
                </div>
              </>
            )}

            <div className="mt-5">
              {' '}
              <div className="flex mb-2 items-center">
                <h2 className="mr-3 w-[150px] text-sm font-medium">Ngôn ngữ</h2>
                <SelectField
                  name="ai_language"
                  options={[{ label: 'Tiếng Anh', value: 'en' }]}
                  parenSelect="w-[200px] border rounded-[5px] border-blue-500"
                />
              </div>
              <div className="flex mb-2 items-center">
                <h2 className="mr-3 w-[150px] text-sm font-medium">Mức sáng tạo</h2>
                <SelectField
                  name="ai_language"
                  parenSelect="w-[200px] border rounded-[5px] border-blue-500"
                />
              </div>
              <div className="flex mb-2 items-center">
                <h2 className="mr-3 w-[150px] text-sm font-medium">Giọng điệu</h2>
                <SelectField
                  name="ai_language"
                  parenSelect="w-[200px] border rounded-[5px] border-blue-500"
                />
              </div>
              {Tags}
            </div>
          </div>
          <div className="w-full flex justify-center mt-5 pt-4 border-t-2">
            {' '}
            <Button className="bg-blue-500 font-light w-fit  " type="submit">
              Lưu
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  )
}

export default ModalRenderAI
