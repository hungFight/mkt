import FormPostVideoPageProfile from '@renderer/components/Form/VirtualMarketing/FormPostVideoPageProfile'
import VirtualMKTFrame from '@renderer/components/Frames/VirtualMKTFrame'
import StartStopSelect from '@renderer/components/VirtualMarketing.tsx/StartStopSelect'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { PropsFormDT } from './PostReelsFacebook'
import MantineTableCustom from '@renderer/components/MantineTableCustom'
import {
  configTableInteractionPostVideoTwo,
  configTableInteractionScanViralOne,
  configTableInteractionScanViralTwo
} from '@renderer/config/configTable'
import { setPageTitle } from '@renderer/store/themeConfigSlice'
import { useDispatch } from 'react-redux'

const PostVideoPageProfile = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const { t } = useTranslation()
  const [files, setFiles] = useState<{ files: File[] }>({ files: [] })

  const [formDT, setFormDT] = useState<PropsFormDT>({
    concurrent_stream: 1,
    turn_back: 1,
    stop_turning_back: 1,
    space_two_times_post: { from: 1, to: 1 },
    each_pageProfile_post: { from: 1, to: 1 },
    move_profile_if_error: { from: 1, to: 1 },
    times_waiting_load_video: { from: 1, to: 1 }
  })
  useEffect(() => {
    dispatch(setPageTitle(t('post_vide_pageProfile')))
  })
  const onSubmit = (data) => {
    console.table(formDT)
    console.log(data, 'data')
  }
  return (
    <VirtualMKTFrame
      handleSubmit={handleSubmit(onSubmit)}
      titleLeft={t('config_post_video_pageProfile')}
      titleRight={t('account_management')}
      childrenHeader={<StartStopSelect options={[]} />}
      childrenLeft={
        <div className=" overflow-auto px-2">
          <MantineTableCustom
            column={configTableInteractionScanViralOne.map((r) => ({
              ...r,
              title: t(r.accessor)
            }))}
            data={[]}
            clsTable="!h-[34.5vh] mb-2  border  rounded-[15px]"
          />{' '}
          <MantineTableCustom
            column={configTableInteractionPostVideoTwo.map((r) => ({
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
          <FormPostVideoPageProfile
            formDT={formDT}
            setFormDT={setFormDT}
            register={register}
            files={files}
            setFiles={setFiles}
          />
        </>
      }
    />
  )
}
export default PostVideoPageProfile
