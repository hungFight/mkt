import ButtonC from '@renderer/components/CustomField/ButtonC'
import FormPostReelsFB from '@renderer/components/Form/VirtualMarketing/FormPostReelsFB'
import MantineTableCustom from '@renderer/components/MantineTableCustom'
import ModalConfigVirtual from '@renderer/components/Modal/ModalVirtualMKT/ModalConfigVirtual'
import ModalConfig from '@renderer/components/Modal/ModalVirtualMKT/ModalConfigVirtual'
import StartStopSelect from '@renderer/components/VirtualMarketing.tsx/StartStopSelect'
import {
  configTableInteractionScanViralOne,
  configTableInteractionScanViralTwo
} from '@renderer/config/configTable'
import { setPageTitle } from '@renderer/store/themeConfigSlice'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'

export interface PropsFormDT {
  concurrent_stream: number
  turn_back: number
  stop_turning_back: number
  space_two_times_post: { from: number; to: number }
  each_pageProfile_post: { from: number; to: number }
  move_profile_if_error: { from: number; to: number }
  times_waiting_load_video: { from: number; to: number }
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
    <form className="flex gap-3 justify-center " onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full  px-2 pb-2 pt-0">
        <div className="px-[2px] pl-1 rounded-[10px] ">
          <div className="flex items-center justify-between pb-2">
            <StartStopSelect
              options={[{ label: 'Hung', value: 'h' }]}
              changeSelected={(v) => console.log(v, 'new')}
            />
            <div className="flex items-center">
              <h2 className="mr-4">
                {t('total_content_to_comment')}{' '}
                <span className="text-sm rounded-[5px] border-b-[2px] border-red-500 px-3 ml-1">
                  5
                </span>
              </h2>
              <ButtonC
                title={t('choice_content')}
                className="bg-blue-500 p-2"
                onClick={() => setIsShowModalConfigVirtual(true)}
              />
            </div>
          </div>{' '}
        </div>
        <div className="flex items-center justify-between mt-5   ">
          <div className="w-[62.1%] min-[1438px]:w-[64.1%] h-[75vh] border border-[rgb(214_214_214)] rounded-[10px] bg-[rgb(255_255_255)] relative">
            <h2 className="w-fit text-base relative top-[-16px] left-3 px-3 py-1 z-10">
              <p className="z-10 relative">{t('account_management')}</p>
              <div className="w-full absolute top-[15px] left-[1px] h-[1px] bg-white "></div>
            </h2>
            <div className=" px-2 mt-[-2px]">
              <div className=" overflow-auto">
                <MantineTableCustom
                  column={configTableInteractionScanViralOne.map((r) => ({
                    ...r,
                    title: t(r.accessor)
                  }))}
                  data={[]}
                  clsTable="!h-[35vh] mb-2  border  rounded-[15px]"
                />{' '}
                <MantineTableCustom
                  column={configTableInteractionScanViralTwo.map((r) => ({
                    ...r,
                    title: t(r.accessor)
                  }))}
                  data={[]}
                  clsTable="!h-[35vh]  border  rounded-[15px]"
                />
              </div>
            </div>
          </div>
          <div className="w-[37.1%] min-[1438px]:w-[35.1%]  h-[75.5vh] border border-[rgb(214_214_214)] rounded-[10px] relative bg-[rgb(255_255_255)]">
            <h2 className="w-fit text-base relative top-[-16px] left-3 px-3 py-1 z-10">
              <p className="z-10 relative"> {t('config_comment_pageProfile_by_uid')}</p>
              <div className="w-full absolute top-[15px] left-[1px] h-[1px] bg-white "></div>
            </h2>
            <div className="w-full bg-white h-[85%] overflow-auto overflow-x-hidden px-2 mt-[-15px] relative ">
              <FormPostReelsFB
                register={register}
                files={files}
                setFiles={setFiles}
                formDT={formDT}
                setFormDT={setFormDT}
                checkBoxData={checkBoxData}
                setCheckBoxData={setCheckBoxData}
              />
            </div>
          </div>
        </div>
      </div>
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
    </form>
  )
}

export default PostReelsFacebook
