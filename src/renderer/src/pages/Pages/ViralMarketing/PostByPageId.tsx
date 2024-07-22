import FormPostByPageId from '@renderer/components/Form/VirtualMarketing/FormPostByPageId'
import VirtualMKTFrame from '@renderer/components/Frames/VirtualMKTFrame'
import MantineTableCustom from '@renderer/components/MantineTableCustom'
import StartStopSelect from '@renderer/components/VirtualMarketing.tsx/StartStopSelect'
import {
  configTableInteractionPostByPageIDTwo,
  configTableInteractionPostByPageIDOne,
  configTableInteractionScanViralOne
} from '@renderer/config/configTable'
import { setPageTitle } from '@renderer/store/themeConfigSlice'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'

const PostByPageId = () => {
  const { register, handleSubmit } = useForm()
  const { t } = useTranslation()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageTitle(t('post_by_pageId')))
  })
  const [formDT, setFormDT] = useState<any>({
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
  const onSubmit = (data) => {}
  return (
    <VirtualMKTFrame
      handleSubmit={handleSubmit(onSubmit)}
      titleLeft={t('config_post_video_pageProfile')}
      titleRight={t('account_management')}
      childrenHeader={<StartStopSelect options={[]} />}
      childrenLeft={
        <div className=" overflow-auto px-2">
          <MantineTableCustom
            column={configTableInteractionPostByPageIDOne.map((r) => ({
              ...r,
              title: t(r.accessor)
            }))}
            data={[]}
            clsTable="!h-[34.5vh] mb-2  border  rounded-[15px]"
          />{' '}
          <MantineTableCustom
            column={configTableInteractionPostByPageIDTwo.map((r) => ({
              ...r,
              title: t(r.accessor)
            }))}
            data={[]}
            clsTable="!h-[34.5vh] border rounded-[15px]"
          />
        </div>
      }
      childrenRight={
        <>
          <FormPostByPageId formDT={formDT} setFormDT={setFormDT} register={register} />
        </>
      }
    />
  )
}

export default PostByPageId
