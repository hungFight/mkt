import ButtonC from '@renderer/components/CustomField/ButtonC'
import CheckboxField from '@renderer/components/CustomField/CheckboxField'
import InputNumberField from '@renderer/components/CustomField/InputNumberField'
import ToggleSwitch from '@renderer/components/ToggleSwitch'
import ToolTips from '@renderer/components/Tooltips'
import { PropsFormDTPageProfile } from '@renderer/pages/Pages/ViralMarketing/PostProfile'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { BsFillQuestionOctagonFill } from 'react-icons/bs'

const FormPostPageProfile: FC<{
  register: UseFormRegister<FieldValues>
  setFormDT: Dispatch<SetStateAction<PropsFormDTPageProfile>>
  formDT: PropsFormDTPageProfile
  setToggled: Dispatch<SetStateAction<boolean>>
  toggled: boolean
  onClickGeneralConfig: () => void
}> = ({ register, formDT, setFormDT, setToggled, toggled, onClickGeneralConfig }) => {
  const { t } = useTranslation()
  return (
    <>
      <div className="mb-2 ">
        <div className=" border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-[7px]">
          <div className="w-full flex items-center mb-1">
            <h2 className="text-sm font-medium  w-[58%] flex items-center relative">
              {t('concurrent_stream')}
              <ToolTips content={t('open_at_the_same')} className="absolute top-0 right-0">
                <BsFillQuestionOctagonFill className="text-[#434343] ml-2" />
              </ToolTips>
            </h2>

            <InputNumberField
              min={1}
              name="concurrent_stream"
              max={100}
              register={{ ...register('concurrent_stream') }}
              classInput="!w-[70px] !px-2 !py-1 "
              span={t('stream')}
              onChange={(e: any) =>
                setFormDT((pre) => ({ ...pre, concurrent_stream: e.target.value }))
              }
              value={formDT.concurrent_stream}
              clsLabel="whitespace-pre-wrap"
              classInputContainer=" flex items-center justify-start  py-1"
            />
          </div>{' '}
          <InputNumberField
            min={1}
            register={{ ...register('limit_post_of_each_pageProfile') }}
            name="limit_post_of_each_pageProfile"
            title={t('limit_post_of_each_pageProfile')}
            clsTitle="w-[58%]"
            max={100}
            span={t('post')}
            classInput=" !w-[70px] !px-2 !py-1 "
            clsLabel="whitespace-pre-wrap"
            classInputContainer="w-full flex items-center justify-start  mb-2 "
            onChange={(e: any) => setFormDT((pre) => ({ ...pre, limit_profile: e.target.value }))}
            value={formDT.limit_profile}
          />
          <InputNumberField
            min={1}
            title={t('limit_post_of_each_account')}
            register={{ ...register('limit_post_of_each_account') }}
            name="limit_post_of_each_account"
            clsTitle="w-[58%]"
            span={t('post')}
            max={100}
            classInput="!w-[70px] !px-2 !py-1 "
            clsLabel="whitespace-pre-wrap"
            classInputContainer="w-full flex items-center justify-start  mb-2 "
            onChange={(e: any) => setFormDT((pre) => ({ ...pre, limit_account: e.target.value }))}
            value={formDT.limit_account}
          />{' '}
        </div>
        <div className=" border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-[7px] my-2">
          <div className="mb-2 min-[1628px]:flex items-center">
            <div className="flex items-center mb-1  min-[1628px]:w-[58%]">
              <h2 className="text-sm font-medium mr-2  ">{t('move_profile_if_error')}</h2>
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
              classInputContainer="w-fit flex items-center justify-start "
              onChange={(e: any) =>
                setFormDT((pre) => ({ ...pre, move_profile_error: e.target.value }))
              }
              value={formDT.move_profile_error}
            />{' '}
          </div>
          <div className="min-[1628px]:flex items-center ">
            <div className=" min-[1628px]:w-[58%] flex items-center mb-1">
              <h2 className="text-sm font-medium mr-2">{t('space_2_times_consecutive')}</h2>
              <ToolTips content={t('times_waiting_for_next_step')} className="text-[#f03365]">
                <BsFillQuestionOctagonFill className="text-[#434343]" />
              </ToolTips>
            </div>
            <InputNumberField
              min={1}
              register={{ ...register('space_2_times_consecutive_1') }}
              name="space_2_times_consecutive_1"
              max={100}
              span={t('second')}
              classInput="!w-[70px] !px-2 !py-1 "
              clsLabel="whitespace-pre-wrap"
              classInputContainer="w-fit flex items-center justify-start "
              value={formDT.ordinal_two_times}
              onChange={(e: any) =>
                setFormDT((pre) => ({
                  ...pre,
                  ordinal_two_times: e.target.value
                }))
              }
            />{' '}
          </div>
        </div>
      </div>
      <div className="flex w-full items-center my-3 ">
        <ToggleSwitch
          spanText={t('post_random_post')}
          circle
          name="random_post"
          clsLabel="mr-4 !mb-0"
          checked={formDT.toggle}
        />
        <ToggleSwitch
          spanText={t('post_by_ordinal')}
          circle
          name="random_post"
          clsLabel=" !mb-0"
          checked={!formDT.toggle}
        />
      </div>
      <div className="mb-2 pb-2">
        <div className="flex items-center mb-2">
          <CheckboxField
            name="times_waiting_for_images"
            title={t('times_waiting_for_images')}
            register={{ ...register('times_waiting_for_images') }}
            classLabel="text-sm"
            classInputContainer="w-[58%]"
            checked={formDT.times_load_image.checked}
            onChange={(e: any) =>
              setFormDT((pre) => ({
                ...pre,
                times_load_image: { ...pre.times_load_image, checked: e.target.checked }
              }))
            }
          />{' '}
          <InputNumberField
            min={1}
            register={{ ...register('times_waiting_for_images_1') }}
            name="times_waiting_for_images_1"
            max={100}
            span={t('second')}
            classInput="ml-2 !w-[70px] !px-2 !py-1 "
            clsLabel="whitespace-pre-wrap"
            classInputContainer="w-fit flex items-center justify-start "
            value={formDT.times_load_image.number}
            onChange={(e: any) =>
              setFormDT((pre) => ({
                ...pre,
                times_load_image: { ...pre.times_load_image, number: e.target.value }
              }))
            }
          />
        </div>
        <div className="flex items-center w-full">
          <CheckboxField
            name={t('turn_back')}
            title={t('turn_back')}
            classLabel="text-sm whitespace-break-spaces"
            register={{ ...register('get_groupList_pageProfile') }}
            classInputContainer=" flex items-center w-[58%]"
            checked={formDT.turn_back.checked}
            onChange={(e: any) =>
              setFormDT((pre) => ({
                ...pre,
                turn_back: { ...pre.turn_back, checked: e.target.checked }
              }))
            }
          />
          <InputNumberField
            min={1}
            register={{ ...register('turn_back_1') }}
            name="turn_back_1"
            max={100}
            span={t('second')}
            classInput="ml-2 !w-[70px] !px-2 !py-1 "
            clsLabel="whitespace-pre-wrap"
            classInputContainer="w-fit flex items-center justify-start "
            value={formDT.turn_back.from}
            onChange={(e: any) =>
              setFormDT((pre) => ({
                ...pre,
                turn_back: { ...pre.turn_back, from: e.target.value }
              }))
            }
          />
        </div>
        <InputNumberField
          min={1}
          register={{ ...register('stop_turning_back') }}
          name="stop_turning_back"
          max={100}
          title={t('stop_turning_back')}
          span={t('times')}
          classInput="ml-2 !w-[70px] !px-2 !py-1 "
          clsLabel="whitespace-pre-wrap "
          clsTitle="w-[58%]"
          classInputContainer=" flex items-center justify-start mt-2 "
          value={formDT.turn_back.to}
          onChange={(e: any) =>
            setFormDT((pre) => ({
              ...pre,
              turn_back: { ...pre.turn_back, to: e.target.value }
            }))
          }
        />
        <CheckboxField
          name={t('allow_post_duplicate_between_pageProfile')}
          title={t('allow_post_duplicate_between_pageProfile')}
          classLabel="text-sm whitespace-break-spaces"
          register={{
            ...register('allow_post_duplicate_between_pageProfile')
          }}
          classInputContainer="my-2 flex items-center border-y py-2"
          checked={formDT.allow_post_duplicate}
          onChange={(e: any) =>
            setFormDT((pre) => ({
              ...pre,
              allow_post_duplicate: e.target.checked
            }))
          }
        />{' '}
      </div>
      <div className="mt-2 w-full ">
        <ToggleSwitch
          spanText={t('config_post_pageProfile')}
          name="config_post_pageProfile"
          checked={toggled}
          onChange={(e: any) => setToggled(e.target.checked)}
        />
        <ButtonC
          title={t('middle_config')}
          className={`bg-blue-500 ${toggled ? '' : 'pointer-events-none opacity-60'}`}
          onClick={onClickGeneralConfig}
        />
      </div>
    </>
  )
}

export default FormPostPageProfile
