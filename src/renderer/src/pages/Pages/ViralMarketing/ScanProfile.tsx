import MantineTableCustom from '@renderer/components/MantineTableCustom'
import {
  configTableInteractionScanViralOne,
  configTableInteractionScanViralTwo
} from '@renderer/config/configTable'
import { setPageTitle } from '@renderer/store/themeConfigSlice'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { LiaHandPointer } from 'react-icons/lia'
import { useDispatch } from 'react-redux'
import FormScanProfile from '@renderer/components/Form/VirtualMarketing/FormScanProfile'
import StartStopSelect from '@renderer/components/VirtualMarketing.tsx/StartStopSelect'
import VirtualMKTFrame from '@renderer/components/Frames/VirtualMKTFrame'
export interface PropsScanProfile {
  concurrent_stream: 1
  space_stop: { from: 1; to: 1 }
}
const ScanProfile = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  useEffect(() => {
    dispatch(setPageTitle(t('scan_pageProfile')))
  })
  const [formDT, setFormDT] = useState<PropsScanProfile>({
    concurrent_stream: 1,
    space_stop: { from: 1, to: 1 }
  })

  const onSubmit = (data) => {
    console.table(formDT)
    console.log(data, 'data here')
  }

  return (
    <>
      <VirtualMKTFrame
        titleLeft={t('account_management')}
        titleRight={t('config_scan_pageProfile')}
        childrenHeader={<StartStopSelect options={[]} />}
        childrenLeft={
          <div className=" px-2">
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
        }
        childrenRight={
          <div className="w-full bg-white overflow-hidden px-2 ">
            <FormScanProfile setFormDT={setFormDT} formDT={formDT} register={register} />
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
        }
        handleSubmit={handleSubmit(onSubmit)}
      />
    </>
  )
}

export default ScanProfile
