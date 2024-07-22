import CheckboxField from '@renderer/components/CustomField/CheckboxField'
import TextAreaField from '@renderer/components/CustomField/TextAreaField'
import UploadFileField from '@renderer/components/CustomField/UploadFileField'
import ToggleSwitch from '@renderer/components/ToggleSwitch'
import ToolTips from '@renderer/components/Tooltips'
import { RenderInputNumber } from '@renderer/components/VirtualMarketing.tsx/RenderInputNumber'
import { PropCheckBoxDT, PropsFormDT } from '@renderer/pages/Pages/ViralMarketing/PostReelsFacebook'
import { renderBoxInput } from '@renderer/pages/data/dataContentFormPostReels'
import React, { FC, useState } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { BsFillQuestionOctagonFill } from 'react-icons/bs'
import { LiaHandPointer } from 'react-icons/lia'

const FormPostReelsFB: FC<{
  register: UseFormRegister<FieldValues>
  setFormDT: React.Dispatch<React.SetStateAction<PropsFormDT>>
  formDT: PropsFormDT
  checkBoxData: PropCheckBoxDT
  setCheckBoxData: React.Dispatch<React.SetStateAction<PropCheckBoxDT>>
  files: {
    files: File[]
  }
  setFiles: React.Dispatch<
    React.SetStateAction<{
      files: File[]
    }>
  >
}> = ({ register, formDT, setFormDT, checkBoxData, setCheckBoxData, files, setFiles }) => {
  const { t } = useTranslation()
  const [toggled, setToggled] = useState<boolean>(false)

  return (
    <>
      <div className="mb-2">
        <div className=" border-b py-2">
          {renderBoxInput.map((r) => (
            <div
              key={r.id}
              className="w-full my-2 border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-2 
                flex items-center
              "
            >
              <h2 className="text-sm font-medium mr-2 w-[56%] flex items-center">
                {t(r.name)}
                {r?.note && (
                  <ToolTips content={t(r.note)}>
                    <BsFillQuestionOctagonFill className="text-[#434343] ml-2" />
                  </ToolTips>
                )}
              </h2>
              <div className={`min-w-[200px] ${r.isTwo ? 'flex items-center ' : ' '}`}>
                {RenderInputNumber(
                  register,
                  setFormDT,
                  formDT,
                  r.name,
                  r.name,
                  r.isTwo ? '' : t(r.span),
                  r.isTwo ? 'from' : ''
                )}
                {r.isTwo &&
                  RenderInputNumber(
                    register,
                    setFormDT,
                    formDT,
                    r.name + '_1',
                    r.name,
                    t(r.span),
                    'to'
                  )}
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
                ...register('please_enter_uid_here', { required: true })
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
          </p>
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
            changeFile={setFiles}
            clsInput="hidden"
            clsLabel="w-fit !mb-0"
            clsLabelRoot={`w-fit`}
          />
        </div>
        <ToggleSwitch
          name="seedingReels"
          spanText={t('seeding_reels_after_posting')}
          clsLabel="mt-3"
          checked={toggled}
          onChange={(e) => setToggled(e.target.checked)}
        />
        <div
          className={`p-2 rounded-[5px] border bg-[#f9f9f95c] border-[#c1c1c1] ${
            toggled ? '' : 'opacity-60 pointer-events-none'
          }`}
        >
          <CheckboxField
            title={t('like_video_reels_post_success')}
            name={t('like_video_reels_post_success')}
            classLabel="whitespace-pre-wrap"
            checked={checkBoxData.like}
            onChange={(e) => setCheckBoxData((pre) => ({ ...pre, like: e.target.checked }))}
          />{' '}
          <CheckboxField
            title={t('comment_video_reels_post_success')}
            name={t('comment_video_reels_post_success')}
            classLabel="whitespace-pre-wrap"
            checked={checkBoxData.comment}
            onChange={(e) => setCheckBoxData((pre) => ({ ...pre, comment: e.target.checked }))}
            classInputContainer="my-2"
          />
          <TextAreaField
            isRequire
            placeholder={t('enter_comments_into_here')}
            register={{
              ...register('enter_comments_into_here', { required: toggled })
            }}
            name="please_enter_uid_here"
            clsTextArea="text-[15px] p-5 "
            clsTextLabel="!text-sm font-medium "
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
              checked={checkBoxData.turn_back}
              onChange={(e) => setCheckBoxData((pre) => ({ ...pre, turn_back: e.target.checked }))}
            />
            {RenderInputNumber(
              register,
              setFormDT,
              formDT,
              t('turn_back'),
              'turn_back',
              t('second')
            )}
          </div>
          {RenderInputNumber(
            register,
            setFormDT,
            formDT,
            t('stop_turning_back'),
            'stop_turning_back',
            t('times'),
            undefined,
            t('stop_turning_back')
          )}
        </div>
      </div>
      <div className="text-center flex items-center justify-center mt-3 py-2 ">
        <div className="rotate-[85deg] text-[20px] mr-1">
          <LiaHandPointer />
        </div>
        <a
          onClick={() => window.open('https://phanmemmkt.vn/', '_blank')}
          className="text-blue-500 font-thin hover:underline"
        >
          {t('see_guide_here')}
        </a>
      </div>
    </>
  )
}

export default FormPostReelsFB
