import ButtonC from '@renderer/components/CustomField/ButtonC'
import FormPostReelsFB from '@renderer/components/Form/VirtualMarketing/FormPostReelsFB'
import VirtualMKTFrame from '@renderer/components/Frames/VirtualMKTFrame'
import MantineTableCustom from '@renderer/components/MantineTableCustom'
import ModalConfigVirtual from '@renderer/components/Modal/ModalVirtualMKT/ModalConfigVirtual'
import ModalConfig from '@renderer/components/Modal/ModalVirtualMKT/ModalConfigVirtual'
import StartStopSelect from '@renderer/components/VirtualMarketing.tsx/StartStopSelect'
import {
  configTableInteractionScanViralOne,
  configTableInteractionPostReelsFBTwo
} from '@renderer/config/configTable'
import { setPageTitle } from '@renderer/store/themeConfigSlice'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'

export interface PropsFormDT {
  concurrent_stream?: number
  turn_back?: number
  stop_turning_back?: number
  space_two_times_post?: { from: number; to: number }
  each_pageProfile_post?: { from: number; to: number }
  move_profile_if_error?: { from: number; to: number }
  times_waiting_load_video?: { from: number; to: number }
}
export interface PropCheckBoxDT {
  allow_duplicate: boolean
  like: boolean
  comment: boolean
  turn_back: boolean
}
const PostReelsFacebook = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [isShowModalConfigVirtual, setIsShowModalConfigVirtual] = useState<boolean>(false)
  const [isShowModalConfig, setIsShowModalConfig] = useState<boolean>(false)
  const [files, setFiles] = useState<{ files: File[] }>({ files: [] })
  const [contentVideo, setContentVideo] = useState<string>('')
  const [formDT, setFormDT] = useState<PropsFormDT>({
    concurrent_stream: 1,
    turn_back: 1,
    stop_turning_back: 1,
    space_two_times_post: { from: 1, to: 1 },
    each_pageProfile_post: { from: 1, to: 1 },
    move_profile_if_error: { from: 1, to: 1 },
    times_waiting_load_video: { from: 1, to: 1 }
  })
  const [checkBoxData, setCheckBoxData] = useState<PropCheckBoxDT>({
    allow_duplicate: false,
    like: false,
    comment: false,
    turn_back: false
  })
  useEffect(() => {
    dispatch(setPageTitle(t('post_reels_facebook')))
  })
  const onSubmit = (data) => {
    console.table(formDT)
    console.table(checkBoxData)
    console.log(files.files, 'files')
    console.log(contentVideo, 'contentVideo')
    console.log(data, 'data')
  }

  return (
    <>
      <VirtualMKTFrame
        titleLeft={t('account_management')}
        titleRight={t('config_comment_pageProfile_by_uid')}
        handleSubmit={handleSubmit(onSubmit)}
        childrenHeader={
          <StartStopSelect
            options={[{ label: 'Hung', value: 'h' }]}
            changeSelected={(v) => console.log(v, 'new')}
          />
        }
        childrenLeft={
          <div className=" overflow-auto px-2">
            <MantineTableCustom
              column={configTableInteractionScanViralOne.map((r) => ({
                ...r,
                title: t(r.accessor)
              }))}
              data={[]}
              clsTable="!h-[34.5vh] mb-2  border rounded-[15px]"
            />{' '}
            <MantineTableCustom
              column={configTableInteractionPostReelsFBTwo.map((r) => ({
                ...r,
                title: t(r.accessor)
              }))}
              data={[]}
              clsTable="!h-[34.5vh]  border rounded-[15px]"
            />
          </div>
        }
        childrenRight={
          <FormPostReelsFB
            register={register}
            files={files}
            setFiles={setFiles}
            formDT={formDT}
            setFormDT={setFormDT}
            checkBoxData={checkBoxData}
            setCheckBoxData={setCheckBoxData}
          />
        }
      />

      {isShowModalConfigVirtual && (
        <ModalConfigVirtual
          isShow={isShowModalConfigVirtual}
          setIsShow={setIsShowModalConfigVirtual}
        />
      )}
      {isShowModalConfig && (
        <ModalConfig isShow={isShowModalConfig} setIsShow={setIsShowModalConfig} />
      )}
      <ToastContainer />
    </>
  )
}

export default PostReelsFacebook
