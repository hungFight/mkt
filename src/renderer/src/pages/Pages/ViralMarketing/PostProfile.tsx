import ButtonC from '@renderer/components/CustomField/ButtonC'
import CheckboxField from '@renderer/components/CustomField/CheckboxField'
import InputNumberField from '@renderer/components/CustomField/InputNumberField'
import SelectField from '@renderer/components/CustomField/SelectField'
import MantineTableCustom from '@renderer/components/MantineTableCustom'
import ModalConfigVirtual from '@renderer/components/Modal/ModalVirtualMKT/ModalConfigVirtual'
import ToggleSwitch from '@renderer/components/ToggleSwitch'
import ToolTips from '@renderer/components/Tooltips'
import StartStopSelect from '@renderer/components/VirtualMarketing.tsx/StartStopSelect'
import {
  configTableInteractionScanViralOne,
  configTableInteractionScanViralTwo
} from '@renderer/config/configTable'
import { data, dataTwo } from '@renderer/pages/data/postProfileData'
import { setPageTitle } from '@renderer/store/themeConfigSlice'
import { Button } from 'flowbite-react'
import { CirclePlay, CircleX } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { BsFillQuestionOctagonFill } from 'react-icons/bs'
import { LiaHandPointer } from 'react-icons/lia'
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'

const PostProfile = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [toggled, setToggled] = useState<boolean>(false)
  const [isShowModalConfig, setIsShowModalConfig] = useState<boolean>(false)
  const [formDT, setFormDT] = useState<{
    concurrent_stream: number
    limit_profile: number
    limit_account: number
    move_profile_error: number
    toggle: boolean
    ordinal_two_times: number
    times_load_image: { checked: boolean; number: number }
    allow_post_duplicate: boolean
    turn_back: { checked: boolean; from: number; to: number }
  }>({
    concurrent_stream: 1,
    limit_profile: 5,
    limit_account: 10,
    move_profile_error: 1,
    ordinal_two_times: 1,
    toggle: true,
    times_load_image: { checked: false, number: 1 },
    allow_post_duplicate: false,
    turn_back: { checked: false, from: 1, to: 10 }
  })

  useEffect(() => {
    dispatch(setPageTitle(t('post_PageProfile')))
  })
  const onSubmit = (data) => {}

  return (
    <form className="flex gap-3 justify-center " onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full  px-2 pb-2  pt-0">
        <div className="w-full flex items-center justify-between px-[2px] pl-1 rounded-[10px] ">
          <StartStopSelect />
          <div className="flex items-center">
            <h2 className="mr-4">
              Tổng số nội dung đăng cho tất cả Profile
              <span className="text-sm rounded-[5px] border-b-[2px] border-red-500 px-3 ml-1">
                5
              </span>
            </h2>
            <ButtonC title="Đặt Lịch" className="bg-yellow-500 p-2" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-5   ">
          <div className="w-[62%] min-[1438px]:w-[64%]  h-[77.5vh] border border-[rgb(214_214_214)] rounded-[10px] bg-[rgb(255_255_255)] relative">
            <h2 className="w-fit text-base relative top-[-16px] left-3 px-3 py-1 z-10">
              <p className="z-10 relative">{t('account_management')}</p>
              <div className="w-full absolute top-[15px] left-[1px] h-[1px] bg-white "></div>
            </h2>
            <div className=" px-2">
              <div className="overflow-auto mt-[-2px]">
                <MantineTableCustom
                  column={configTableInteractionScanViralOne.map((r) => ({
                    ...r,
                    title: t(r.accessor)
                  }))}
                  data={data}
                  clsTable="!h-[35vh] mb-2  border  rounded-[15px]"
                />{' '}
                <MantineTableCustom
                  column={configTableInteractionScanViralTwo.map((r) => ({
                    ...r,
                    title: t(r.accessor)
                  }))}
                  data={dataTwo}
                  clsTable="!h-[35vh]  border  rounded-[15px]"
                />
              </div>
            </div>
          </div>
          <div className="w-[37%] min-[1438px]:w-[35%]  h-[77.5vh] border border-[rgb(214_214_214)] rounded-[10px] relative bg-[rgb(255_255_255)]">
            <h2 className="w-fit text-base relative top-[-16px] left-3 px-3 py-1 z-10">
              <p className="z-10 relative"> {t('config_scan_pageProfile')}</p>
              <div className="w-full absolute top-[15px] left-[1px] h-[1px] bg-white "></div>
            </h2>
            <div className="w-full h-[94%] overflow-auto bg-white px-2 min-[1438px]:px-3 mt-2 relative top-[-20px]">
              <div className="mb-2 mt-[9px]">
                <div className=" border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-[7px]">
                  <div className="w-full flex items-center mb-1">
                    <h2 className="text-sm font-medium  w-[58%] flex items-center relative">
                      {t('stream_concurrency')}
                      <ToolTips content={t('open_at_the_same')} className="absolute top-0 right-0">
                        <BsFillQuestionOctagonFill className="text-[#434343] ml-2" />
                      </ToolTips>
                    </h2>

                    <InputNumberField
                      min={1}
                      name="stream_concurrency"
                      max={100}
                      register={{ ...register('stream_concurrency') }}
                      classInput="ml-2 !w-[70px] !px-2 !py-1 "
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
                    classInput="ml-2 !w-[70px] !px-2 !py-1 "
                    clsLabel="whitespace-pre-wrap"
                    classInputContainer="w-full flex items-center justify-start  mb-2 "
                    onChange={(e: any) =>
                      setFormDT((pre) => ({ ...pre, limit_profile: e.target.value }))
                    }
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
                    classInput="ml-2 !w-[70px] !px-2 !py-1 "
                    clsLabel="whitespace-pre-wrap"
                    classInputContainer="w-full flex items-center justify-start  mb-2 "
                    onChange={(e: any) =>
                      setFormDT((pre) => ({ ...pre, limit_account: e.target.value }))
                    }
                    value={formDT.limit_account}
                  />{' '}
                </div>
                <div className=" border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-[7px] my-2">
                  <div className="mb-2">
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
                      classInputContainer="w-fit flex items-center justify-start "
                      onChange={(e: any) =>
                        setFormDT((pre) => ({ ...pre, move_profile_error: e.target.value }))
                      }
                      value={formDT.move_profile_error}
                    />{' '}
                  </div>
                  <div className="w-full ">
                    <div className="w-full flex items-center mb-1">
                      <h2 className="text-sm font-medium mr-2">{t('space_2_times_consecutive')}</h2>
                      <ToolTips
                        content={t('times_waiting_for_next_step')}
                        className="text-[#f03365]"
                      >
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
                  onChange={(e: any) => setFormDT((pre) => ({ ...pre, toggle: e.target.checked }))}
                />
                <ToggleSwitch
                  spanText={t('post_by_ordinal')}
                  circle
                  name="random_post"
                  clsLabel=" !mb-0"
                  checked={!formDT.toggle}
                  onChange={(e: any) => setFormDT((pre) => ({ ...pre, toggle: e.target.checked }))}
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
                  onClick={() => toggled && setIsShowModalConfig(true)}
                />
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
            </div>
          </div>
        </div>
      </div>
      {isShowModalConfig && (
        <ModalConfigVirtual isShow={isShowModalConfig} setIsShow={setIsShowModalConfig} />
      )}
      <ToastContainer />
    </form>
  )
}

export default PostProfile
