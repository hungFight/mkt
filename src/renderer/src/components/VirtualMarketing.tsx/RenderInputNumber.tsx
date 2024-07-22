import React, { ChangeEvent } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import InputNumberField from '../CustomField/InputNumberField'
import { PropsFormDT } from '@renderer/pages/Pages/ViralMarketing/PostReelsFacebook'
import { PropsScanProfile } from '@renderer/pages/Pages/ViralMarketing/ScanProfile'

export const RenderInputNumber = (data: {
  register: UseFormRegister<FieldValues>
  setFormDT: React.Dispatch<React.SetStateAction<any>> // PropsScanProfile | PropsFormDT
  formDT: PropsScanProfile | PropsFormDT
  name: string
  key: string // key represent for key: value
  span?: string
  type?: string // type represent for {from or to} like {[type]: value}
  title?: string
  classInputContainer?: string
}) => {
  const { register, formDT, setFormDT, name, key, span, type, title, classInputContainer } = data
  return (
    <InputNumberField
      min={1}
      name={name}
      title={title}
      clsTitle={title ? 'w-[58%]' : ''}
      register={{ ...register(name) }}
      classInput={`!w-[70px] !px-2 !py-1 ${type && span ? 'ml-2' : ''}`}
      span={span}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setFormDT((pre) =>
          pre[key]?.from && type
            ? { ...pre, [key]: { ...pre[key], [type]: Number(e.target.value) } }
            : { ...pre, [key]: Number(e.target.value) }
        )
      }
      value={type && formDT[key]?.[type] ? formDT[key]?.[type] : formDT[key]}
      clsLabel="whitespace-pre-wrap"
      classInputContainer={` flex items-center justify-start ${classInputContainer}`}
    />
  )
}
