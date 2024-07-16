import CheckboxField from '@renderer/components/CustomField/CheckboxField'
import InputNumberField from '@renderer/components/CustomField/InputNumberField'
import SelectField from '@renderer/components/CustomField/SelectField'
import MantineTableCustom from '@renderer/components/MantineTableCustom'
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
import { FixedSizeList as List } from 'react-window'

const generateData = (count) => {
  return Array.from({ length: count }, (v, k) => ({
    id: k,
    name: `Name ${k}`,
    age: 20 + (k % 30),
    city: `City ${k % 10}`
  }))
}

const dataFake = generateData(6000)

const Row = ({ index, style }) => (
  <div style={style}>
    {dataFake[index]?.id} - {dataFake[index]?.name} - {dataFake[index]?.age} -{' '}
    {dataFake[index]?.city}
  </div>
)

const VirtualizedList = () => (
  <List height={600} itemCount={data.length} itemSize={35} width={'100%'}>
    {Row}
  </List>
)

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
          <div className="w-[63%] min-[1438px]:w-[64%] h-[80vh] border border-[rgb(214_214_214)] rounded-[10px] bg-[rgb(255_255_255)] relative">
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
                {/* <MantineTableCustom
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
                /> */}
                {/* <VirtualizedTable data={dataFake} /> */}
                <VirtualizedList />
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
                <InputNumberField
                  min={1}
                  register={{ ...register('limit_post_of_each_pageProfile') }}
                  name="limit_post_of_each_pageProfile"
                  title={t('limit_post_of_each_pageProfile')}
                  clsTitle="w-[58%]"
                  max={100}
                  span={t('post')}
                  classInput="ml-2 !w-[70px] !px-2 !py-1"
                  clsLabel="whitespace-pre-wrap"
                  classInputContainer="w-full flex items-center justify-start  mb-2 "
                />
                <InputNumberField
                  min={1}
                  title={t('limit_post_of_each_account')}
                  register={{ ...register('limit_post_of_each_account') }}
                  name="limit_post_of_each_account"
                  clsTitle="w-[58%]"
                  max={100}
                  span={t('post')}
                  classInput="ml-2 !w-[70px] !px-2 !py-1"
                  clsLabel="whitespace-pre-wrap"
                  classInputContainer="w-full flex items-center justify-start  mb-2 "
                />{' '}
                <div className="flex items-center w-full">
                  <h2 className="w-[54%] text-sm font-medium">{t('move_profile_if_error')}</h2>
                  <div>
                    <BsFillQuestionOctagonFill />
                  </div>
                  <InputNumberField
                    min={1}
                    register={{ ...register('move_profile_if_error') }}
                    name="move_profile_if_error"
                    max={100}
                    span={t('post')}
                    classInput="ml-2 !w-[70px] !px-2 !py-1"
                    clsLabel="whitespace-pre-wrap"
                    classInputContainer="w-fit flex items-center justify-start "
                  />{' '}
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

export default PostProfile
