import CheckboxField from '@renderer/components/CustomField/CheckboxField'
import InputNumberField from '@renderer/components/CustomField/InputNumberField'
import { RenderInputNumberSanProfile } from '@renderer/components/VirtualMarketing.tsx/RenderInputNumber'
import { PropsScanProfile } from '@renderer/pages/Pages/ViralMarketing/ScanProfile'
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

const FormScanProfile: FC<{
  register: UseFormRegister<FieldValues>
  setFormDT: Dispatch<SetStateAction<PropsScanProfile>>
  formDT: PropsScanProfile
}> = ({ register, setFormDT, formDT }) => {
  const { t } = useTranslation()
  const generalClass =
    'w-full my-2 border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-2 flex items-center '
  return (
    <>
      <div className="py-2  ">
        <div className={generalClass}>
          {RenderInputNumberSanProfile({
            register,
            setFormDT,
            formDT,
            name: 'concurrent_stream',
            key: 'concurrent_stream',
            span: t('stream'),
            title: t('concurrent_stream')
          })}
        </div>
        <div className={generalClass}>
          <p className="text-sm font-medium mr-2 w-[56%] flex items-center">{t('space_stop')}</p>
          <div className="w-fit flex items-center">
            {RenderInputNumberSanProfile({
              register,
              setFormDT,
              formDT,
              name: 'space_stop',
              key: 'space_stop',
              type: 'from'
            })}
            {RenderInputNumberSanProfile({
              register,
              setFormDT,
              formDT,
              name: 'space_stop',
              key: 'space_stop',
              type: 'to',
              span: t('times'),
              classInputContainer: '!w-fit'
            })}
          </div>
        </div>
      </div>
      <div>
        <CheckboxField
          name="thread"
          title={t('get_info_pageProfile')}
          register={{ ...register('get_info_pageProfile') }}
          classLabel="text-sm"
          classInputContainer="mb-2 pb-3"
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
    </>
  )
}

export default FormScanProfile
