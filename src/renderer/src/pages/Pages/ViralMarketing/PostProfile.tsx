import ButtonC from '@renderer/components/CustomField/ButtonC'
import CheckboxField from '@renderer/components/CustomField/CheckboxField'
import InputNumberField from '@renderer/components/CustomField/InputNumberField'
import SelectField from '@renderer/components/CustomField/SelectField'
import MantineTableCustom from '@renderer/components/MantineTableCustom'
import ToggleSwitch from '@renderer/components/ToggleSwitch'
import ToolTips from '@renderer/components/Tooltips'
import {
  configTableInteractionScanViralOne,
  configTableInteractionScanViralTwo
} from '@renderer/config/configTable'
import { data } from '@renderer/pages/data/postProfileData'
import { Button } from 'flowbite-react'
import { CirclePlay, CircleX } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { BsFillQuestionOctagonFill } from 'react-icons/bs'
import { LiaHandPointer } from 'react-icons/lia'
import { ToastContainer, toast } from 'react-toastify'

const PostProfile = () => {
  const { t } = useTranslation()
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {}

  const dataTwo = [
    {
      id: 1,
      uid: '1',
      status: 'firstLast',
      pageId: 'Hello',
      pageName: 'Hung',
      group: '1'
    },
    {
      id: 2,
      uid: '1',
      status: 'firstLast',
      pageId: 'Hello',
      pageName: 'Hung',
      group: '1'
    },
    {
      id: 3,
      uid: '1',
      status: 'firstLast',
      pageId: 'Hello',
      pageName: 'Hung',
      group: '1'
    },
    {
      id: 4,
      uid: '1',
      status: 'firstLast',
      pageId: 'Hello',
      pageName: 'Hung',
      group: '1'
    },
    {
      id: 5,
      uid: '1',
      status: 'firstLast',
      pageId: 'Hello',
      pageName: 'Hung',
      group: '1'
    },
    {
      id: 6,
      uid: '1',
      status: 'firstLast',
      pageId: 'Hello',
      pageName: 'Hung',
      group: '1'
    },
    {
      id: 7,
      uid: '1',
      status: 'firstLast',
      pageId: 'Hello',
      pageName: 'Hung',
      group: '1'
    }
  ]

  return (
    <form className="flex gap-3 justify-center " onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full  px-2 pb-2 pt-0">
        <div className="w-full flex items-center justify-between px-[2px] pl-1 rounded-[10px] "></div>
        <div className="flex items-center justify-between mt-5   ">
          <div className="w-[62%] min-[1438px]:w-[64%] h-[80vh] border border-[rgb(214_214_214)] rounded-[10px] bg-[rgb(255_255_255)] relative">
            <h2 className="w-fit text-base relative top-[-16px] left-3 px-3 py-1 z-10">
              <p className="z-10 relative">{t('account_management')}</p>
              <div className="w-full absolute top-[15px] left-[1px] h-[1px] bg-white "></div>
            </h2>
            <div className=" px-2">
              <div className="flex items-center justify-start pb-2">
                <SelectField
                  name="script"
                  placeholder="Chọn danh mục"
                  parenSelect="w-[200px]"
                  borderColor="#91bff0"
                  boxShadow="0 0 1px"
                  height="25px"
                />
                <div className="gap-2 flex h-fit items-center justify-between ml-2 ">
                  {/* <SelectField name="group" placeholder="Danh mục" className="w-[50%] py-0" /> */}
                  <Button
                    className="bg-green-700 rounded-[10px] h-max btn-start py-[2px]"
                    size="sm"
                    // onClick={handleStart}
                    type="submit"
                  >
                    <CirclePlay size={20} className="mr-2" />
                    Start
                  </Button>
                  <Button className="bg-red-700 rounded-[10px] h-max py-[2px]" size="sm">
                    <CircleX size={20} className="mr-2" />
                    Stop
                  </Button>
                </div>
              </div>{' '}
              <div className="mt-2 overflow-auto">
                <MantineTableCustom
                  column={configTableInteractionScanViralOne.map((r) => ({
                    ...r,
                    title: t(r.accessor)
                  }))}
                  data={data}
                  clsTable="!h-[33vh] mb-2  border  rounded-[15px]"
                />{' '}
                <MantineTableCustom
                  column={configTableInteractionScanViralTwo.map((r) => ({
                    ...r,
                    title: t(r.accessor)
                  }))}
                  data={dataTwo}
                  clsTable="!h-[33vh]  border  rounded-[15px]"
                />
              </div>
            </div>
          </div>
          <div className="w-[37%] min-[1438px]:w-[35%] h-[80vh] border border-[rgb(214_214_214)] rounded-[10px] relative bg-[rgb(255_255_255)]">
            <h2 className="w-fit text-base relative top-[-16px] left-3 px-3 py-1 z-10">
              <p className="z-10 relative"> {t('config_scan_pageProfile')}</p>
              <div className="w-full absolute top-[15px] left-[1px] h-[1px] bg-white "></div>
            </h2>
            <div className="w-full bg-white overflow-hidden px-2 mt-2 relative top-[-20px]">
              <div className="mb-2">
                <div className="p-2 rounded-[5px] border border-[#bcbaba] bg-[#f9f9f95e] mb-2">
                  <InputNumberField
                    min={1}
                    name="stream_concurrency"
                    max={100}
                    register={{ ...register('stream_concurrency') }}
                    title={t('stream_concurrency')}
                    classInput="ml-2 !w-[70px] !px-2 !py-1 "
                    span={t('stream')}
                    clsTitle="w-[58%]"
                    clsLabel="whitespace-pre-wrap"
                    classInputContainer="w-full flex items-center justify-start  mb-1 py-1"
                  />{' '}
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
                  />{' '}
                </div>
                <div className="p-2 rounded-[5px] border border-[#bcbaba] bg-[#f9f9f95e]">
                  <div className="mb-2">
                    <div className="w-full flex items-center mb-1">
                      <h2 className="text-sm font-medium mr-2 ">{t('move_profile_if_error')}</h2>
                      <ToolTips content={t('stop_and_change_other_profiles')}>
                        <BsFillQuestionOctagonFill className="text-[#f03365]" />
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
                    />{' '}
                  </div>
                  <div className="w-full ">
                    <div className="w-full flex items-center mb-1">
                      <h2 className="text-sm font-medium mr-2">{t('space_2_times_consecutive')}</h2>
                      <ToolTips
                        content={t('stop_and_change_other_profiles')}
                        className="text-[#f03365]"
                      >
                        <BsFillQuestionOctagonFill className="text-[#f03365]" />
                      </ToolTips>
                    </div>
                    <InputNumberField
                      min={1}
                      register={{ ...register('space_2_times_consecutive_1') }}
                      name="move_profile_if_error"
                      max={100}
                      span={t('second')}
                      classInput="!w-[70px] !px-2 !py-1 "
                      clsLabel="whitespace-pre-wrap"
                      classInputContainer="w-fit flex items-center justify-start "
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
                />
                <ToggleSwitch
                  spanText="Đăng theo thứ tự"
                  circle
                  name="random_post"
                  clsLabel=" !mb-0"
                />
              </div>
              <div className="p-2 rounded-[5px] border border-[#bcbaba] bg-[#f9f9f95e]">
                <div className="flex items-center mb-2">
                  <CheckboxField
                    name="thread"
                    title={t('times_waiting_for_images')}
                    register={{ ...register('times_waiting_for_images') }}
                    classLabel="text-sm"
                    classInputContainer="w-[58%]"
                  />{' '}
                  <InputNumberField
                    min={1}
                    register={{ ...register('space_2_times_consecutive_1') }}
                    name="move_profile_if_error"
                    max={100}
                    span={t('post')}
                    classInput="ml-2 !w-[70px] !px-2 !py-1 "
                    clsLabel="whitespace-pre-wrap"
                    classInputContainer="w-fit flex items-center justify-start "
                  />
                </div>
                <CheckboxField
                  name="get_groupList_pageProfile"
                  title={t('Cho phép đang bài trùng bài viết giữa các Page Profile')}
                  classLabel="text-sm whitespace-break-spaces"
                  register={{ ...register('get_groupList_pageProfile') }}
                  classInputContainer="mb-2 flex items-center "
                />{' '}
                <div className="flex items-center w-full">
                  <CheckboxField
                    name="get_groupList_pageProfile"
                    title={t('Quay vòng sau')}
                    classLabel="text-sm whitespace-break-spaces"
                    register={{ ...register('get_groupList_pageProfile') }}
                    classInputContainer=" flex items-center w-[58%]"
                  />
                  <InputNumberField
                    min={1}
                    register={{ ...register('space_2_times_consecutive_1') }}
                    name="move_profile_if_error"
                    max={100}
                    span={t('second')}
                    classInput="ml-2 !w-[70px] !px-2 !py-1 "
                    clsLabel="whitespace-pre-wrap"
                    classInputContainer="w-fit flex items-center justify-start "
                  />
                </div>
                <InputNumberField
                  min={1}
                  register={{ ...register('space_2_times_consecutive_1') }}
                  name="move_profile_if_error"
                  max={100}
                  title="Dừng quay vòng sau"
                  span={t('times')}
                  classInput="ml-2 !w-[70px] !px-2 !py-1 "
                  clsLabel="whitespace-pre-wrap "
                  clsTitle="w-[58%]"
                  classInputContainer=" flex items-center justify-start mt-2 "
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
      <ToastContainer />
    </form>
  )
}

export default PostProfile
