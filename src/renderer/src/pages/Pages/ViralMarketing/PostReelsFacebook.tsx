import ButtonC from '@renderer/components/CustomField/ButtonC'
import CheckboxField from '@renderer/components/CustomField/CheckboxField'
import InputNumberField from '@renderer/components/CustomField/InputNumberField'
import SelectField from '@renderer/components/CustomField/SelectField'
import TextAreaField from '@renderer/components/CustomField/TextAreaField'
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
import { BsFillQuestionOctagonFill } from 'react-icons/bs'
import { LiaHandPointer } from 'react-icons/lia'
import { useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'

const PostReelsFacebook = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [toggled, setToggled] = useState<boolean>(false)
  const [isShowModalConfigVirtual, setIsShowModalConfigVirtual] = useState<boolean>(false)
  const [isShowModalConfig, setIsShowModalConfig] = useState<boolean>(false)
  const [isShowModalRenderAI, setIsShowModalRenderAI] = useState<boolean>(false)
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
    dispatch(setPageTitle(t('comment_by_uid')))
  })
  const onSubmit = (data) => {}

  return (
    <form className="flex gap-3 justify-center " onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full  px-2 pb-2 pt-0">
        <div className="px-[2px] pl-1 rounded-[10px] ">
          <div className="flex items-center justify-between pb-2">
            <div className="gap-2 flex h-fit items-center justify-between ">
              <SelectField
                name="script"
                placeholder="Chọn danh mục"
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
                Start
              </Button>
              <Button className="bg-red-700 rounded-[10px] h-max py-[2px]" size="sm">
                <CircleX size={20} className="mr-2" />
                Stop
              </Button>
            </div>
            <div className="flex items-center">
              <h2 className="mr-4">
                Tổng số nội dung chọn để bình luận{' '}
                <span className="text-sm rounded-[5px] border-b-[2px] border-red-500 px-3 ml-1">
                  5
                </span>
              </h2>
              <ButtonC
                title="Chọn nội dung"
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
          <div className="w-[37.1%] min-[1438px]:w-[35.1%]  h-[75.5vh] border border-[rgb(214_214_214)] rounded-[10px] relative bg-[rgb(255_255_255)]">
            <h2 className="w-fit text-base relative top-[-16px] left-3 px-3 py-1 z-10">
              <p className="z-10 relative"> {t('config_comment_pageProfile_by_uid')}</p>
              <div className="w-full absolute top-[15px] left-[1px] h-[1px] bg-white "></div>
            </h2>
            <p className="w-full text-sm font-medium text-red-500 p-2  mt-[-13px]">
              Lưu ý: Nội dung bình luận sẽ chọn ngẫu nhiên 1 hình ảnh trong
            </p>
            <div className="w-full bg-white h-[80%] overflow-auto px-2 mt-2 relative ">
              <div className="mb-2">
                <div className=" border-b mb-2">
                  <div className="w-full flex items-center my-2 border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-2">
                    <h2 className="text-sm font-medium mr-2  w-[56%] flex items-center">
                      {t('stream_concurrency')}
                      <ToolTips content={t('open_at_the_same')}>
                        <BsFillQuestionOctagonFill className="text-[#f03365] ml-2" />
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
                      classInputContainer=" flex items-center justify-start  "
                    />
                  </div>{' '}
                  <div className="border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-[7px]">
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
                      classInputContainer=" flex items-center justify-start "
                      onChange={(e: any) =>
                        setFormDT((pre) => ({ ...pre, move_profile_error: e.target.value }))
                      }
                      value={formDT.move_profile_error}
                    />{' '}
                  </div>
                  <div className="w-full border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-[7px] my-2">
                    <h2 className="text-sm font-medium mb-1">Mỗi Page Profile hình</h2>
                    <div className="flex items-center  justify-start">
                      {' '}
                      <InputNumberField
                        min={1}
                        register={{ ...register('Mỗi Page Profile hình') }}
                        name="Mỗi Page Profile hình"
                        max={100}
                        classInput="!w-[70px] !px-2 !py-1 "
                        clsLabel="whitespace-pre-wrap"
                        onChange={(e: any) =>
                          setFormDT((pre) => ({ ...pre, limit_profile: e.target.value }))
                        }
                        value={formDT.limit_profile}
                      />
                      <InputNumberField
                        min={1}
                        register={{ ...register('Mỗi Page Profile hình') }}
                        name="Mỗi Page Profile hình"
                        span={t('UID')}
                        max={100}
                        classInput="ml-2 !w-[70px] !px-2 !py-1 "
                        clsLabel="whitespace-pre-wrap"
                        classInputContainer=" flex items-center justify-start  "
                        onChange={(e: any) =>
                          setFormDT((pre) => ({ ...pre, limit_account: e.target.value }))
                        }
                        value={formDT.limit_account}
                      />{' '}
                    </div>
                  </div>
                  <div className=" w-full border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-[7px]">
                    <h2 className="text-sm font-medium  mb-1">Mỗi UID bình luận tối thiểu</h2>
                    <div className="flex items-center">
                      <InputNumberField
                        min={1}
                        register={{ ...register('Mỗi UID bình luận tối thiểu') }}
                        name="Mỗi UID bình luận tối thiểu"
                        max={100}
                        classInput="!w-[70px] !px-2 !py-1 "
                        clsLabel="whitespace-pre-wrap"
                        onChange={(e: any) =>
                          setFormDT((pre) => ({ ...pre, limit_profile: e.target.value }))
                        }
                        value={formDT.limit_profile}
                      />
                      <InputNumberField
                        min={1}
                        register={{ ...register('Mỗi UID bình luận tối thiểu') }}
                        name="Mỗi UID bình luận tối thiểu"
                        span={t('post')}
                        max={100}
                        classInput="ml-2 !w-[70px] !px-2 !py-1 "
                        clsLabel="whitespace-pre-wrap"
                        classInputContainer=" flex items-center justify-start "
                        onChange={(e: any) =>
                          setFormDT((pre) => ({ ...pre, limit_account: e.target.value }))
                        }
                        value={formDT.limit_account}
                      />{' '}
                    </div>
                  </div>{' '}
                  <div className=" w-full border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-[7px] my-2">
                    <h2 className="text-sm font-medium mb-1">Khoảng cách 2 lần đăng bài</h2>
                    <div className="flex items-center">
                      {' '}
                      <InputNumberField
                        min={1}
                        register={{ ...register('Mỗi UID bình luận tối thiểu') }}
                        name="Mỗi UID bình luận tối thiểu"
                        max={100}
                        classInput=" !w-[70px] !px-2 !py-1 "
                        clsLabel="whitespace-pre-wrap"
                        onChange={(e: any) =>
                          setFormDT((pre) => ({ ...pre, limit_profile: e.target.value }))
                        }
                        value={formDT.limit_profile}
                      />
                      <InputNumberField
                        min={1}
                        register={{ ...register('Mỗi UID bình luận tối thiểu') }}
                        name="Mỗi UID bình luận tối thiểu"
                        span={t('second')}
                        max={100}
                        classInput="ml-2 !w-[70px] !px-2 !py-1 "
                        clsLabel="whitespace-pre-wrap"
                        onChange={(e: any) =>
                          setFormDT((pre) => ({ ...pre, limit_account: e.target.value }))
                        }
                        value={formDT.limit_account}
                      />{' '}
                    </div>
                  </div>{' '}
                  <div className=" w-full border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-[7px] my-2">
                    <div className="flex w-full items-center justify-center py-1 pb-2 border-b border-[#c1c1c1]">
                      <ToggleSwitch
                        spanText={t('Chọn ngẫu nhiên')}
                        circle
                        name="random_post"
                        clsLabel="mr-4 !mb-0"
                        checked={formDT.toggle}
                        onChange={(e: any) =>
                          setFormDT((pre) => ({ ...pre, toggle: e.target.checked }))
                        }
                      />
                      <ToggleSwitch
                        spanText={t('Theo thứ tự')}
                        circle
                        name="random_post"
                        clsLabel=" !mb-0"
                        checked={!formDT.toggle}
                        onChange={(e: any) =>
                          setFormDT((pre) => ({ ...pre, toggle: e.target.checked }))
                        }
                      />
                    </div>
                    <ToggleSwitch
                      spanText={t('comment_by_uid_list')}
                      clsLabel="mt-2"
                      name={t('comment_by_uid_list')}
                      checked={toggled}
                      onChange={(e) => setToggled(e.target.checked)}
                    />
                    <div className={` ${toggled ? '' : 'pointer-events-none opacity-60'}`}>
                      <TextAreaField
                        isRequire
                        title={t('please_enter_uid_here')}
                        placeholder="..."
                        register={{
                          ...register('please_enter_uid_here', { required: true })
                        }}
                        name="please_enter_uid_here"
                        clsTextArea="text-[15px] p-5  "
                        clsTextLabel="!text-sm font-medium "
                      />
                    </div>
                    <div className="mt-1 ">
                      <CheckboxField
                        title={t('allow_comment_duplicate')}
                        name={t('allow_comment_duplicate')}
                        classLabel="whitespace-pre-wrap"
                        checked={toggled}
                        onChange={(e: any) => setToggled(e.target.checked)}
                      />
                      <p className="text-[13px] text-blue-500 mt-[-3px] font-medium pl-8">
                        ( Tự động xoá UID đã bình luận trong file trên! )
                      </p>
                    </div>
                    <CheckboxField
                      title={t('Cho phép lấy lại nội dung đã bình luận')}
                      name={t('Cho phép lấy lại nội dung đã bình luận')}
                      checked={toggled}
                      onChange={(e: any) => setToggled(e.target.checked)}
                      classInputContainer="my-1"
                    />
                    <div className="flex items-center">
                      <CheckboxField
                        title={t('Thời gian chờ tải')}
                        name={t('Thời gian chờ tải')}
                        checked={toggled}
                        onChange={(e: any) => setToggled(e.target.checked)}
                      />
                      <InputNumberField
                        min={1}
                        register={{ ...register('Mỗi UID bình luận tối thiểu') }}
                        name="Mỗi UID bình luận tối thiểu"
                        span={t('second')}
                        max={100}
                        classInput="ml-5 !w-[70px] !px-2 !py-1 "
                        clsLabel="whitespace-pre-wrap"
                        onChange={(e: any) =>
                          setFormDT((pre) => ({ ...pre, limit_account: e.target.value }))
                        }
                        value={formDT.limit_account}
                      />{' '}
                    </div>
                  </div>
                  <div className="border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-[7px] my-2">
                    <div className="flex items-center w-full ">
                      <CheckboxField
                        name="Quay vòng"
                        title={t('Quay vòng')}
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
                        register={{ ...register('Quay vòng sau_1') }}
                        name="Quay vòng sau_1"
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
                      register={{ ...register('Dừng quay') }}
                      name="Dừng quay"
                      max={100}
                      title="Dừng quay"
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
                  </div>
                  <CheckboxField
                    name="Tự động tạo bình luận bằng ChatGPT"
                    title={t('Tự động tạo bình luận bằng ChatGPT')}
                    classLabel="text-sm whitespace-break-spaces"
                    register={{ ...register('get_groupList_pageProfile') }}
                    classInputContainer="py-2 pt-1"
                  />
                </div>
                <ButtonC
                  title={t('config')}
                  className="bg-blue-600 !px-5"
                  onClick={() => setIsShowModalRenderAI(true)}
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
    </form>
  )
}

export default PostReelsFacebook
