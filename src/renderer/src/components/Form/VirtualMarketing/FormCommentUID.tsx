import ButtonC from '@renderer/components/CustomField/ButtonC'
import CheckboxField from '@renderer/components/CustomField/CheckboxField'
import InputNumberField from '@renderer/components/CustomField/InputNumberField'
import TextAreaField from '@renderer/components/CustomField/TextAreaField'
import ToggleSwitch from '@renderer/components/ToggleSwitch'
import ToolTips from '@renderer/components/Tooltips'
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
  return (
    <div className="mb-2">
      <div className=" border-b mb-2">
        <div className="w-full flex items-center my-2 border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-2">
          <h2 className="text-sm font-medium mr-2  w-[56%] flex items-center">
            {t('concurrent_stream')}
            <ToolTips content={t('open_at_the_same')}>
              <BsFillQuestionOctagonFill className="text-[#434343] ml-2" />
            </ToolTips>
          </h2>
          <InputNumberField
            min={1}
            name="concurrent_stream"
            max={100}
            register={{ ...register('concurrent_stream') }}
            classInput="ml-2 !w-[70px] !px-2 !py-1 "
            span={t('stream')}
            onChange={(e: any) =>
              setFormDT((pre) => ({ ...pre, concurrent_stream: e.target.value }))
            }
            value={formDT.concurrent_stream}
            clsLabel="whitespace-pre-wrap"
            classInputContainer=" flex items-center justify-start  "
          />
        </div>{' '}
        <div className="border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-[7px]">
          <div className="w-full flex items-center mb-1">
            <h2 className="text-sm font-medium mr-2 ">{t('move_profile_if_error')}</h2>
            <ToolTips content={t('stop_and_change_other_profiles')}>
              <BsFillQuestionOctagonFill className="text-[#434343]" />
            </ToolTips>
          </div>
          <InputNumberField
            min={1}
            register={{ ...register('move_profile_if_error') }}
            name="move_profile_if_error"
            max={100}
            span={t('times')}
            classInput="!w-[70px] !px-2 !py-1 border"
            clsLabel="whitespace-pre-wrap"
            classInputContainer=" flex items-center justify-start "
            onChange={(e: any) =>
              setFormDT((pre) => ({ ...pre, move_profile_error: e.target.value }))
            }
            value={formDT.move_profile_error}
          />{' '}
        </div>
        <div className="w-full border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-[7px] my-2">
          <h2 className="text-sm font-medium mb-1">{t('each_pageProfile')}</h2>
          <div className="flex items-center  justify-start">
            {' '}
            <InputNumberField
              min={1}
              register={{ ...register('each_pageProfile_from') }}
              name="each_pageProfile_from"
              max={100}
              classInput="!w-[70px] !px-2 !py-1 "
              clsLabel="whitespace-pre-wrap"
              onChange={(e: any) =>
                setFormDT((pre) => ({
                  ...pre,
                  each_profile: { ...pre.each_profile, from: e.target.value }
                }))
              }
              value={formDT.each_profile.from}
            />
            <InputNumberField
              min={1}
              register={{ ...register('each_pageProfile_to') }}
              name="each_pageProfile_to"
              span={t('UID')}
              max={100}
              classInput="ml-2 !w-[70px] !px-2 !py-1 "
              clsLabel="whitespace-pre-wrap"
              classInputContainer=" flex items-center justify-start  "
              onChange={(e: any) =>
                setFormDT((pre) => ({
                  ...pre,
                  each_profile: { ...pre.each_profile, to: e.target.value }
                }))
              }
              value={formDT.each_profile.to}
            />{' '}
          </div>
        </div>
        <div className=" w-full border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-[7px]">
          <h2 className="text-sm font-medium  mb-1">{t('every_uid_limited_comment')}</h2>
          <div className="flex items-center">
            <InputNumberField
              min={1}
              register={{ ...register('every_uid_limited_comment_from') }}
              name="every_uid_limited_comment_from"
              max={100}
              classInput="!w-[70px] !px-2 !py-1 "
              clsLabel="whitespace-pre-wrap"
              onChange={(e: any) =>
                setFormDT((pre) => ({
                  ...pre,
                  every_uid_limited_comment: {
                    ...pre.every_uid_limited_comment,
                    from: e.target.value
                  }
                }))
              }
              value={formDT.every_uid_limited_comment.from}
            />
            <InputNumberField
              min={1}
              register={{ ...register('every_uid_limited_comment_to') }}
              name="every_uid_limited_comment_to"
              span={t('post')}
              max={100}
              classInput="ml-2 !w-[70px] !px-2 !py-1 "
              clsLabel="whitespace-pre-wrap"
              classInputContainer=" flex items-center justify-start "
              onChange={(e: any) =>
                setFormDT((pre) => ({
                  ...pre,
                  every_uid_limited_comment: {
                    ...pre.every_uid_limited_comment,
                    to: e.target.value
                  }
                }))
              }
              value={formDT.every_uid_limited_comment.to}
            />{' '}
          </div>
        </div>{' '}
        <div className=" w-full border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-[7px] my-2">
          <h2 className="text-sm font-medium mb-1">{t('space_two_times_post')}</h2>
          <div className="flex items-center">
            <InputNumberField
              min={1}
              register={{ ...register('space_two_times_post_from') }}
              name="space_two_times_post_from"
              max={100}
              classInput=" !w-[70px] !px-2 !py-1 "
              clsLabel="whitespace-pre-wrap"
              onChange={(e: any) =>
                setFormDT((pre) => ({
                  ...pre,
                  space_two_times_post: { ...pre.space_two_times_post, from: e.target.value }
                }))
              }
              value={formDT.space_two_times_post.from}
            />
            <InputNumberField
              min={1}
              register={{ ...register('space_two_times_post_to') }}
              name="space_two_times_post_to"
              span={t('second')}
              max={100}
              classInput="ml-2 !w-[70px] !px-2 !py-1 "
              clsLabel="whitespace-pre-wrap"
              onChange={(e: any) =>
                setFormDT((pre) => ({
                  ...pre,
                  space_two_times_post: { ...pre.space_two_times_post, to: e.target.value }
                }))
              }
              value={formDT.space_two_times_post.to}
            />{' '}
          </div>
        </div>{' '}
        <div className=" w-full border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-[7px] my-2">
          <div className="flex w-full items-center justify-center py-1 pb-2 border-b border-[#c1c1c1]">
            <ToggleSwitch
              spanText={t('choice_random')}
              circle
              name="choice_random"
              clsLabel="mr-4 !mb-0"
            />
            <ToggleSwitch spanText={t('ordinal')} circle name="ordinal" clsLabel=" !mb-0" />
            {t('time_wait_load')}
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
