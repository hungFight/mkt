import React, { ChangeEvent, ReactElement } from 'react'
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
  classTitle?: string
  inputClassName?: string
  classInputParent?: string
  clsLabel?: string
  childrenLabelLeft?: ReactElement
  childrenLabelRight?: ReactElement
}) => {
  const {
    register,
    formDT,
    setFormDT,
    name,
    key,
    span,
    type,
    title,
    classInputContainer,
    classTitle,
    inputClassName,
    classInputParent,
    childrenLabelLeft,
    childrenLabelRight,
    clsLabel
  } = data
  return (
    <InputNumberField
      min={1}
      name={name}
      title={title}
      clsTitle={title ? 'w-[58%] ' : '' + classTitle}
      register={{ ...register(name) }}
      classInput={`!w-[70px] !px-2 !py-1 ${type && span ? 'ml-2' : ''} ` + inputClassName}
      span={span}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setFormDT((pre) =>
          pre[key]?.from && type
            ? { ...pre, [key]: { ...pre[key], [type]: Number(e.target.value) } }
            : { ...pre, [key]: Number(e.target.value) }
        )
      }
      classInputParent={classInputParent}
      value={type && formDT[key]?.[type] ? formDT[key]?.[type] : formDT[key]}
      clsLabel={clsLabel}
      childrenLabelLeft={childrenLabelLeft}
      childrenLabelRight={childrenLabelRight}
      classInputContainer={` flex items-center justify-start ${classInputContainer}`}
    />
  )
}
