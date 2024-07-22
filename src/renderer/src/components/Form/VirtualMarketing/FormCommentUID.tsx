import ButtonC from '@renderer/components/CustomField/ButtonC'
import CheckboxField from '@renderer/components/CustomField/CheckboxField'
import InputNumberField from '@renderer/components/CustomField/InputNumberField'
import TextAreaField from '@renderer/components/CustomField/TextAreaField'
import ToggleSwitch from '@renderer/components/ToggleSwitch'
import ToolTips from '@renderer/components/Tooltips'
import { RenderInputNumber } from '@renderer/components/VirtualMarketing.tsx/RenderInputNumber'
import { PropsFormDTCommentUID } from '@renderer/pages/Pages/ViralMarketing/CommentUID'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { BsFillQuestionOctagonFill } from 'react-icons/bs'

const FormCommentUID: FC<{
  register: UseFormRegister<FieldValues>
  setFormDT: Dispatch<SetStateAction<PropsFormDTCommentUID>>
  formDT: PropsFormDTCommentUID
  setToggled: Dispatch<SetStateAction<boolean>>
  toggled: boolean
  onClickRenderAI: () => void
}> = ({ register, setFormDT, formDT, setToggled, toggled, onClickRenderAI }) => {
  const { t } = useTranslation()
  const renderBoxInputCommentUID = [
    { id: 1, name: 'concurrent_stream', span: 'times' },
    { id: 2, name: 'move_profile_if_error', note: 'stop_and_change_other_profiles', span: 'times' },
    { id: 3, name: 'each_pageProfile', span: 'UID' },
    {
      id: 4,
      name: 'every_uid_limited_comment',
      spanTwo: 'post'
    },
    {
      id: 5,
      name: 'space_two_times_post',
      spanTwo: 'second'
    }
  ]
  return (
    <div className="mb-2">
      <div className=" border-b mb-2">
        {renderBoxInputCommentUID.map((r) => (
          <div
            key={r.id}
            className={`w-full mb-2 border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-2 
                 items-center ${r.spanTwo ? 'block' : 'flex'} min-[1550px]:flex`}
          >
            <h2 className="text-sm font-medium mr-2 min-[1550px]:w-[56%] w-full  flex items-center">
              {t(r.name)}
              {r?.note && (
                <ToolTips content={t(r.note)}>
                  <BsFillQuestionOctagonFill className="text-[#434343] ml-2" />
                </ToolTips>
              )}
            </h2>
            <div className={` ${r.spanTwo ? 'flex items-center ' : ' '}`}>
              {RenderInputNumber({
                register,
                formDT,
                setFormDT,
                name: r.name,
                key: r.name,
                span: r.spanTwo ? undefined : r.span,
                type: r.spanTwo ? 'from' : '',
                classInputContainer: `${r.id === 3 ? '!w-[113px]' : '!w-fit'} !m-0 justify-start`
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
        <div className=" w-full border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-[7px] my-2">
          <div className="flex w-full items-center justify-center py-1 pb-2 border-b border-[#c1c1c1]">
            <ToggleSwitch
              spanText={t('choice_random')}
              circle
              name="choice_random"
              clsLabel="mr-4 !mb-0"
            />
            <ToggleSwitch spanText={t('ordinal')} circle name="ordinal" clsLabel=" !mb-0" />
          </div>
          <ToggleSwitch
            spanText={t('comment_by_uid_list')}
            clsLabel="mt-2"
            name={'comment_by_uid_list'}
            checked={toggled}
            onChange={(e) => setToggled(e.target.checked)}
          />
          <div className={` ${toggled ? '' : 'pointer-events-none opacity-60'}`}>
            <TextAreaField
              isRequire
              title={t('please_enter_uid_here')}
              placeholder="..."
              register={{
                ...register('please_enter_uid_here', { required: toggled })
              }}
              name="please_enter_uid_here"
              clsTextArea="text-[15px] p-5  "
              clsTextLabel="!text-sm font-medium "
            />
          </div>
          <div className="mt-1 ">
            <CheckboxField
              title={t('allow_comment_duplicate')}
              name={'allow_comment_duplicate'}
              classLabel="whitespace-pre-wrap"
              checked={toggled}
            />
            <p className="text-[13px] text-blue-500 mt-[-3px] font-medium pl-8">
              ( {t('auto_delete_uid_commented')}! )
            </p>
          </div>
          <CheckboxField
            title={t('allow_get_content_commented')}
            name="allow_get_content_commented"
            checked={toggled}
            classInputContainer="my-1"
          />
          <div className="flex items-center">
            <CheckboxField title={t('time_wait_load')} name={'time_wait_load'} checked={toggled} />
            <InputNumberField
              min={1}
              register={{ ...register('time_wait_load') }}
              name="time_wait_load"
              span={t('second')}
              max={100}
              classInput="ml-5 !w-[70px] !px-2 !py-1 "
              clsLabel="whitespace-pre-wrap"
              onChange={(e: any) =>
                setFormDT((pre) => ({ ...pre, time_wait_load: e.target.value }))
              }
              value={formDT.time_wait_load}
            />{' '}
          </div>
        </div>
        <div className="border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-[7px] my-2">
          <div className="flex items-center w-full ">
            <CheckboxField
              name="turn_around"
              title={t('turn_around')}
              classLabel="text-sm whitespace-break-spaces"
              register={{ ...register('get_groupList_pageProfile') }}
              classInputContainer=" flex items-center w-[58%]"
            />
            <InputNumberField
              min={1}
              register={{ ...register('stop_turning_around') }}
              name="stop_turning_around"
              max={100}
              span={t('second')}
              classInput="ml-2 !w-[70px] !px-2 !py-1 "
              clsLabel="whitespace-pre-wrap"
              classInputContainer="w-fit flex items-center justify-start "
              value={formDT.turn_around.from}
              onChange={(e: any) =>
                setFormDT((pre) => ({
                  ...pre,
                  turn_around: { ...pre.turn_around, from: e.target.value }
                }))
              }
            />
          </div>
          <InputNumberField
            min={1}
            register={{ ...register('stop_turning_around') }}
            name="stop_turning_around"
            max={100}
            title="stop_turning_around"
            span={t('times')}
            classInput="ml-2 !w-[70px] !px-2 !py-1 "
            clsLabel="whitespace-pre-wrap "
            clsTitle="w-[58%]"
            classInputContainer=" flex items-center justify-start mt-2 "
            value={formDT.turn_around.to}
            onChange={(e: any) =>
              setFormDT((pre) => ({
                ...pre,
                turn_around: { ...pre.turn_around, to: e.target.value }
              }))
            }
          />
        </div>
        <CheckboxField
          name="Tự động tạo bình luận bằng ChatGPT"
          title={t('Tự động tạo bình luận bằng ChatGPT')}
          classLabel="text-sm whitespace-break-spaces"
          register={{ ...register('get_groupList_pageProfile') }}
          classInputContainer="py-2 pt-1"
        />
      </div>
      <ButtonC title={t('config')} className="bg-blue-600 !px-5" onClick={onClickRenderAI} />
    </div>
  )
}

export default FormCommentUID
