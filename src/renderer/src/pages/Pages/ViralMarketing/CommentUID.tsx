import ButtonC from '@renderer/components/CustomField/ButtonC'
import CheckboxField from '@renderer/components/CustomField/CheckboxField'
import InputNumberField from '@renderer/components/CustomField/InputNumberField'
import SelectField from '@renderer/components/CustomField/SelectField'
import TextAreaField from '@renderer/components/CustomField/TextAreaField'
import FormCommentUID from '@renderer/components/Form/VirtualMarketing/FormCommentUID'
import VirtualMKTFrame from '@renderer/components/Frames/VirtualMKTFrame'
import MantineTableCustom from '@renderer/components/MantineTableCustom'
import ModalRenderAI from '@renderer/components/Modal/ModalRenderAI'
import ModalConfigVirtual from '@renderer/components/Modal/ModalVirtualMKT/ModalConfigVirtual'
import ModalConfig from '@renderer/components/Modal/ModalVirtualMKT/ModalConfigVirtual'
import ToggleSwitch from '@renderer/components/ToggleSwitch'
import ToolTips from '@renderer/components/Tooltips'
import {
  configTableInteractionScanViralOne,
  configTableInteractionScanViralTwo
} from '@renderer/config/configTable'
import { data, dataTwo } from '@renderer/pages/data/postProfileData'
import { setPageTitle } from '@renderer/store/themeConfigSlice'
import { Button, Checkbox } from 'flowbite-react'
import { CirclePlay, CircleX } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { LiaHandPointer } from 'react-icons/lia'
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'
export interface PropsFormDTCommentUID {
  concurrent_stream: number
  each_pageProfile: { from: number; to: number }
  turn_around: { from: number; to: number }
  time_wait_load: number
  move_profile_error: number
  every_uid_limited_comment: { from: number; to: number }
  space_two_times_post: { from: number; to: number }
}
const CommentUID = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [toggled, setToggled] = useState<boolean>(false)
  const [isShowModalConfigVirtual, setIsShowModalConfigVirtual] = useState<boolean>(false)
  const [isShowModalConfig, setIsShowModalConfig] = useState<boolean>(false)
  const [isShowModalRenderAI, setIsShowModalRenderAI] = useState<boolean>(false)
  const [formDT, setFormDT] = useState<PropsFormDTCommentUID>({
    concurrent_stream: 1,
    each_pageProfile: { from: 1, to: 1 },
    turn_around: { from: 1, to: 1 },
    every_uid_limited_comment: { from: 1, to: 1 },
    space_two_times_post: { from: 1, to: 1 },
    time_wait_load: 10,
    move_profile_error: 1
  })

  useEffect(() => {
    dispatch(setPageTitle(t('comment_by_uid')))
  })
  const onSubmit = (data) => {
    console.table(formDT)
    console.log(data, 'data')
  }

  return (
    <>
      <VirtualMKTFrame
        handleSubmit={handleSubmit(onSubmit)}
        titleLeft={t('account_management')}
        titleRight={t('config_comment_pageProfile_by_uid')}
        childrenHeader={
          <div className="flex items-center justify-between pb-2">
            <div className="gap-2 flex h-fit items-center justify-between ">
              <SelectField
                name="script"
                placeholder={t('choice_index')}
                parenSelect="w-[200px]"
                borderColorFocus="#2795d8bf"
                boxShadow="0 0 1px"
                height="25px"
              />
              <Button
                className="bg-green-700 rounded-[10px] h-max btn-start py-[2px]"
                size="sm"
                // onClick={handleStart}
                type="submit"
              >
                <CirclePlay size={20} className="mr-2" />
                {t('start')}
              </Button>
              <Button className="bg-red-700 rounded-[10px] h-max py-[2px]" size="sm">
                <CircleX size={20} className="mr-2" />
                {t('stop')}
              </Button>
            </div>
            <div className="flex items-center">
              <h2 className="mr-4">
                {t('total_content_to_comment')}
                <span className="text-sm rounded-[5px] border-b-[2px] border-red-500 px-3 ml-1">
                  5
                </span>
              </h2>
              <ButtonC
                title={t('choice_index')}
                className="bg-blue-500 p-2"
                onClick={() => setIsShowModalConfigVirtual(true)}
              />
            </div>
          </div>
        }
        childrenLeft={
          <div className=" overflow-auto px-2">
            <MantineTableCustom
              column={configTableInteractionScanViralOne.map((r) => ({
                ...r,
                title: t(r.accessor)
              }))}
              data={data}
              clsTable="!h-[34.5vh] mb-2  border  rounded-[15px]"
            />{' '}
            <MantineTableCustom
              column={configTableInteractionScanViralTwo.map((r) => ({
                ...r,
                title: t(r.accessor)
              }))}
              data={dataTwo}
              clsTable="!h-[34.5vh]  border  rounded-[15px]"
            />
          </div>
        }
        childrenRight={
          <>
            {' '}
            <p className="w-full text-sm font-medium text-red-500 p-2  ">
              {t('note_comment_random_one_image')}
            </p>
            <FormCommentUID
              formDT={formDT}
              setFormDT={setFormDT}
              onClickRenderAI={() => setIsShowModalRenderAI(true)}
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
      {isShowModalRenderAI && (
        <ModalRenderAI
          isShow={isShowModalRenderAI}
          setIsShow={setIsShowModalRenderAI}
          title={t('create_comment_for_post')}
          Tags={
            <div className="flex items-center">
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                title={t('quantity_created')}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                clsLabel="whitespace-pre-wrap"
                clsTitle="w-[155px]"
                classInputContainer="w-full flex items-center justify-start"
              />
            </div>
          }
        />
      )}
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

export default CommentUID
