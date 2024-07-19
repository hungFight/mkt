import CheckboxField from '@renderer/components/CustomField/CheckboxField'
import InputNumberField from '@renderer/components/CustomField/InputNumberField'
import SelectField from '@renderer/components/CustomField/SelectField'
import MantineTableCustom from '@renderer/components/MantineTableCustom'
import {
  configTableInteractionScanViralOne,
  configTableInteractionScanViralTwo
} from '@renderer/config/configTable'
import { setPageTitle } from '@renderer/store/themeConfigSlice'
import { Button } from 'flowbite-react'
import { CirclePlay, CircleX } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { LiaHandPointer } from 'react-icons/lia'
import { useDispatch } from 'react-redux'

const ScanProfile = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [formDT, setFormDT] = useState<{}>()
  const onSubmit = (data) => {}
  useEffect(() => {
    dispatch(setPageTitle(t('scan_pageProfile')))
  })

  return (
    <form className="flex gap-3 justify-center " onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full  px-2 pb-2 pt-0">
        <div className="w-full flex items-center justify-between px-[2px] pl-1 rounded-[10px] "></div>
        <div className="flex items-center justify-between mt-5   ">
          <div className="w-[63%] min-[1438px]:w-[64%] h-[80vh] border border-[rgb(214_214_214)] rounded-[10px] bg-[rgb(255_255_255)] relative">
            <h2 className="w-fit text-base relative top-[-16px] left-3 px-3 py-1 z-10">
              <p className="z-10 relative">{t('account_management')}</p>
              <div className="w-full absolute top-[15px] left-[1px] h-[1px] bg-white "></div>
            </h2>
            <div className=" px-2">
              <div className="flex items-center justify-start pb-2">
                <SelectField
                  name="script"
                  placeholder={t('choice_index')}
                  parenSelect="w-[200px]"
                  borderColorFocus="#2795d8bf"
                  options={[{ label: 'Viet Nam', value: 'vi' }]}
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
                    {t('start')}
                  </Button>
                  <Button className="bg-red-700 rounded-[10px] h-max py-[2px]" size="sm">
                    <CircleX size={20} className="mr-2" />
                    {t('stop')}
                  </Button>
                </div>
              </div>{' '}
              <div className="mt-2">
                <MantineTableCustom
                  column={configTableInteractionScanViralOne.map((r) => ({
                    ...r,
                    title: t(r.accessor)
                  }))}
                  data={[]}
                  clsTable="!h-[33vh] mb-2  border  rounded-[15px]"
                />{' '}
                <MantineTableCustom
                  column={configTableInteractionScanViralTwo.map((r) => ({
                    ...r,
                    title: t(r.accessor)
                  }))}
                  data={[]}
                  clsTable="!h-[33vh]  border  rounded-[15px]"
                />
              </div>
            </div>
          </div>
          <div className="w-[36%] min-[1438px]:w-[35%] h-[80vh] border border-[rgb(214_214_214)] rounded-[10px] relative bg-[rgb(255_255_255)] pt-5">
            <h2 className="w-fit text-base relative top-[-36px] left-3 px-3 py-1 z-10">
              <p className="z-10 relative"> {t('config_scan_pageProfile')}</p>
              <div className="w-full absolute top-[15px] left-[1px] h-[1px] bg-white "></div>
            </h2>
            <div className="w-full bg-white overflow-hidden pl-2 mt-2">
              <div className="py-2 border-b border-t mb-3">
                <InputNumberField
                  min={1}
                  name="stream_concurrency"
                  max={100}
                  register={{ ...register('stream_concurrency') }}
                  title={t('stream_concurrency')}
                  classInput="ml-2 !w-[70px] !px-2 !py-1"
                  span={t('stream')}
                  clsTitle="w-[58%]"
                  clsLabel="whitespace-pre-wrap"
                  classInputContainer="w-full flex items-center justify-start  mb-1 py-1"
                />{' '}
                <div className="flex items-baseline pt-2 border-t">
                  <p className="text-sm font-medium whitespace-pre-wrap w-[58%]">
                    {t('space_stop')}
                  </p>
                  <div>
                    {' '}
                    <InputNumberField
                      min={1}
                      name="space_stop_1"
                      max={100}
                      classInput="ml-2 !w-[70px] !px-2 !py-1"
                      clsLabel="whitespace-pre-wrap"
                      classInputContainer="w-full flex items-center justify-start  mb-2 "
                    />
                    <InputNumberField
                      min={1}
                      register={{ ...register('space_stop_2') }}
                      name="stream"
                      max={100}
                      span={t('times')}
                      classInput="ml-2 !w-[70px] !px-2 !py-1"
                      clsLabel="whitespace-pre-wrap"
                      classInputContainer="w-full flex items-center justify-start  mb-2 "
                    />
                  </div>
                </div>
              </div>
              <div>
                <CheckboxField
                  name="thread"
                  title={t('get_info_pageProfile')}
                  register={{ ...register('get_info_pageProfile') }}
                  classLabel="text-sm"
                  classInputContainer="mb-2  pb-3 border-b"
                />{' '}
                <div className="mb-2 flex items-center">
                  <CheckboxField
                    name="get_groupList_pageProfile"
                    title={t('get_groupList_pageProfile')}
                    classLabel="text-sm "
                    register={{ ...register('get_groupList_pageProfile') }}
                  />
                </div>
              </div>
              <div className="text-center flex items-center justify-center mt-3 py-2 border-t">
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
    </form>
  )
}

export default ScanProfile
