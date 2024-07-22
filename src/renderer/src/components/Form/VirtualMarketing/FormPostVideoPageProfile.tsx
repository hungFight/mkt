import CheckboxField from '@renderer/components/CustomField/CheckboxField'
import TextAreaField from '@renderer/components/CustomField/TextAreaField'
import UploadFileField from '@renderer/components/CustomField/UploadFileField'
import ToolTips from '@renderer/components/Tooltips'
import { RenderInputNumber } from '@renderer/components/VirtualMarketing.tsx/RenderInputNumber'
import { PropCheckBoxDT, PropsFormDT } from '@renderer/pages/Pages/ViralMarketing/PostReelsFacebook'
import { renderBoxInputReelsAndVideo } from '@renderer/pages/data/dataContentForm'
import React, { FC, useState } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { BsFillQuestionOctagonFill } from 'react-icons/bs'

const FormPostVideoPageProfile: FC<{
  register: UseFormRegister<FieldValues>
  setFormDT: React.Dispatch<React.SetStateAction<PropsFormDT>>
  formDT: PropsFormDT
  files: {
    files: File[]
  }
  setFiles: React.Dispatch<
    React.SetStateAction<{
      files: File[]
    }>
  >
}> = ({ register, formDT, setFormDT, files, setFiles }) => {
  const { t } = useTranslation()
  const [toggled, setToggled] = useState<boolean>(false)

  return (
    <div className="mb-2">
      <div className=" border-b ">
        {renderBoxInputReelsAndVideo.map((r) => (
          <div
            key={r.id}
            className="w-full mb-2 border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-2 
                min-[1640px]:flex items-center
              "
          >
            <h2 className="text-sm font-medium mr-2 min-[1640px]:w-[56%] w-full flex items-center">
              {t(r.name)}
              {r?.note && (
                <ToolTips content={t(r.note)}>
                  <BsFillQuestionOctagonFill className="text-[#434343] ml-2" />
                </ToolTips>
              )}
            </h2>
            <div className={`min-w-[200px] ${r.spanTwo ? 'flex items-center ' : ' '}`}>
              {RenderInputNumber({
                register,
                formDT,
                setFormDT,
                name: r.name,
                key: r.name,
                span: r.spanTwo ? '' : r.span,
                type: r.spanTwo ? 'from' : ''
              })}
              {r.spanTwo &&
                RenderInputNumber({
                  register,
                  formDT,
                  setFormDT,
                  name: r.name,
                  key: r.name,
                  span: r.spanTwo,
                  type: 'to'
                })}
            </div>
          </div>
        ))}
        <CheckboxField
          title={t('allow_post_video_duplicate')}
          name={t('allow_post_video_duplicate')}
          classLabel="whitespace-pre-wrap"
          checked={toggled}
          onChange={(e) => setToggled(e.target.checked)}
        />
        <div className="mt-2">
          <TextAreaField
            isRequire
            placeholder={t('please_enter_video_describe')}
            register={{
              ...register('please_enter_video_describe', { required: true })
            }}
            name="please_enter_video_describe"
            clsTextArea="text-[15px] p-5  "
            clsTextLabel="!text-sm font-medium "
          />
        </div>
        <p className="py-1 flex items-center">
          {t('totall_video_to_increase_reels')}:{' '}
          <span className="border rounded-[5px] flex w-[20px]  items-center justify-center ml-2">
            {files.files.length}
          </span>
        </p>{' '}
        <TextAreaField
          register={{ ...register('video', { required: files.files.length ? false : true }) }}
          name="video"
          value={files.files.map((f) => f.path).join(', ')}
          placeholder={t('list_video')}
          clsTextArea=" h-[120px] !max-h-auto !p-1 text-[13px] !overflow-auto "
          clsTextLabel="!text-sm font-medium "
          classInputContainer="w-full"
        />
        <UploadFileField
          name="file"
          isShowImage
          clsContainer=""
          buttonText="get file"
          accept=""
          titleButtonLeft="select_video"
          changeFile={setFiles}
          clsInput="hidden"
          clsLabel="w-fit !mb-0"
          clsLabelRoot={`w-fit`}
        />
      </div>
      <div className="border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-[7px] my-2">
        <div className="flex items-center w-full mb-2">
          <CheckboxField
            name="turn_back"
            title={t('turn_back')}
            classLabel="text-sm whitespace-break-spaces"
            register={{ ...register('get_groupList_pageProfile') }}
            classInputContainer=" flex items-center w-[58%]"
          />
          {RenderInputNumber({
            register,
            formDT,
            setFormDT,
            name: 'turn_back',
            key: 'turn_back',
            span: t('second')
          })}
        </div>
        {RenderInputNumber({
          register,
          formDT,
          setFormDT,
          name: 'stop_turning_back',
          key: 'stop_turning_back',
          span: t('times'),
          title: t('stop_turning_back')
        })}
      </div>
    </div>
  )
}

export default FormPostVideoPageProfile
