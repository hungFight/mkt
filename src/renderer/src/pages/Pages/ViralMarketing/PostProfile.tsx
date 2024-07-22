import ButtonC from '@renderer/components/CustomField/ButtonC'
import FormPostPageProfile from '@renderer/components/Form/VirtualMarketing/FormPostPageProfile'
import VirtualMKTFrame from '@renderer/components/Frames/VirtualMKTFrame'
import MantineTableCustom from '@renderer/components/MantineTableCustom'
import ModalConfigVirtual from '@renderer/components/Modal/ModalVirtualMKT/ModalConfigVirtual'
import StartStopSelect from '@renderer/components/VirtualMarketing.tsx/StartStopSelect'
import {
  configTableInteractionScanViralOne,
  configTableInteractionPostPageProfileTwo
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
export interface PropsFormDTPageProfile {
  concurrent_stream: number
  limit_profile: number
  limit_account: number
  move_profile_error: number
  toggle: boolean
  ordinal_two_times: number
  times_load_image: { checked: boolean; number: number }
  allow_post_duplicate: boolean
  turn_back: { checked: boolean; from: number; to: number }
}
const PostProfile = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [toggled, setToggled] = useState<boolean>(false)
  const [isShowModalConfig, setIsShowModalConfig] = useState<boolean>(false)
  const [formDT, setFormDT] = useState<PropsFormDTPageProfile>({
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
  const onSubmit = (data) => {
    console.table(formDT)
    console.log(data, 'data')
  }

  return (
    <>
      <VirtualMKTFrame
        titleLeft={t('account_management')}
        titleRight={t('config_scan_pageProfile')}
        handleSubmit={handleSubmit(onSubmit)}
        childrenHeader={
          <div className="w-full flex items-center justify-between px-[2px] pl-1 rounded-[10px] ">
            <StartStopSelect options={[]} />
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
        }
        childrenLeft={
          <div className="overflow-auto px-2">
            <MantineTableCustom
              column={configTableInteractionScanViralOne.map((r) => ({
                ...r,
                title: t(r.accessor)
              }))}
              data={[]}
              clsTable="!h-[34.5vh] mb-2  border  rounded-[15px]"
            />{' '}
            <MantineTableCustom
              column={configTableInteractionPostPageProfileTwo.map((r) => ({
                ...r,
                title: t(r.accessor)
              }))}
              data={[]}
              clsTable="!h-[34.5vh]  border  rounded-[15px]"
            />
          </div>
        }
        childrenRight={
          <>
            <FormPostPageProfile
              formDT={formDT}
              setFormDT={setFormDT}
              onClickGeneralConfig={() => toggled && setIsShowModalConfig(true)}
              register={register}
              setToggled={setToggled}
              toggled={toggled}
            />
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
        }
      />
      {isShowModalConfig && (
        <ModalConfigVirtual isShow={isShowModalConfig} setIsShow={setIsShowModalConfig} />
      )}
      <ToastContainer />
    </>
  )
}

export default PostProfile
