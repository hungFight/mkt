import { Button, Modal } from 'flowbite-react'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'
import TextAreaField from '../CustomField/TextAreaField'
import SelectField from '../CustomField/SelectField'
import ButtonC from '../CustomField/ButtonC'
import { useForm } from 'react-hook-form'

const ModalRenderAI: FC<{
  isShow: boolean
  setIsShow?: Dispatch<SetStateAction<boolean>>
}> = ({ isShow, setIsShow }) => {
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
          <p className="text-báe"> {t('Cấu hình Render bằng AI')}</p>
        </div>
      </Modal.Header>
      <Modal.Body className="">
        <form className="font-light" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="w-full text-center bg-[rgb(116,116,116)] p-1 mt-[-20px] text-white rounded-[5px]">
            Tạo bài viết
          </h2>
          <div className="mt-5">
            <div className="mb-2">
              <TextAreaField
                isRequire
                title={t('title')}
                placeholder="Nhập tiêu đề vào đây"
                register={{ ...register('ai_title', { required: true }) }}
                name="ai_title"
                clsTextArea="text-[15px] p-5  "
              />
              {errors.ai_title && (
                <p className="text-[13px] mt-[-3px] text-red-500 ">This field is required</p>
              )}
            </div>
            <div className="mb-2">
              <TextAreaField
                isRequire
                title={t('keyword')}
                placeholder="Nhập từ khoá vào đây mỗi từ khoá cách nhau bằng dấu ,"
                name="ai_keyword"
                register={{ ...register('ai_keyword', { required: true }) }}
                clsTextArea="text-[15px] p-5"
              />
              {errors.ai_keyword && (
                <p className="text-[13px] mt-[-3px] text-red-500 ">This field is required</p>
              )}
            </div>
            <div className="mt-5">
              {' '}
              <div className="flex mb-2 items-center">
                <h2 className="mr-3 w-[150px]">Ngôn ngữ</h2>
                <SelectField
                  name="ai_language"
                  options={[{ label: 'Tiếng Anh', value: 'en' }]}
                  parenSelect="w-full"
                />
              </div>
              <div className="flex mb-2 items-center">
                <h2 className="mr-3 w-[150px]">Mức sáng tạo</h2>
                <SelectField name="ai_language" parenSelect="w-full" />
              </div>
              <div className="flex mb-2 items-center">
                <h2 className="mr-3 w-[150px]">Giọng điệu</h2>
                <SelectField name="ai_language" parenSelect="w-full" />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-4 pt-4 border-t-2">
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
