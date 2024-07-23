import { FC, InputHTMLAttributes, ReactElement } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

export interface InputNumberFieldProps extends InputHTMLAttributes<HTMLElement> {
  title?: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any> | any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any
  classInputContainer?: string
  isRequire?: boolean
  isShadow?: boolean
  round?: string
  classInput?: string
  span?: string
  classSpan?: string
  clsTitle?: string
  clsLabel?: string
  checkbox?: boolean
  childrenLabelLeft?: ReactElement
  childrenLabelRight?: ReactElement
  classInputParent?: string
}

const InputNumberField: FC<InputNumberFieldProps> = ({
  title,
  name,
  register,
  errors,
  classInputContainer,
  classInput,
  isRequire,
  isShadow,
  round,
  classSpan,
  span,
  checkbox,
  clsTitle,
  value,
  clsLabel,
  classInputParent,
  childrenLabelLeft,
  childrenLabelRight,
  ...rest
}) => {
  const { t } = useTranslation()

  return (
    <div className={` ${classInputContainer ?? ''}`}>
      <div className={`flex gap-2 items-center ${clsTitle}`}>
        {checkbox && (
          <input
            className="form-checkbox h-5 w-5 text-blue-600 "
            id={name}
            {...register}
            type="checkbox"
            {...rest}
          />
        )}
        {title && (
          <label
            className={`block mb-0 text-sm font-medium text-gray-900  ${clsLabel}`}
            htmlFor={name}
          >
            {childrenLabelLeft} {t(title)} {isRequire && <span className="text-red-500">*</span>}{' '}
            {childrenLabelRight}
          </label>
        )}
      </div>
      <div className={`flex gap-2 items-center justify-center ${classInputParent}`}>
        <input
          className={`border outline-none px-5 py-[8px] text-[#505050]  border-[#6a6a6aa1] ${
            round ? round : 'rounded-md'
          } ${classInput} w-full bg-transparent`}
          autoComplete="off"
          style={{ boxShadow: isShadow ? '0 0 5px 1px rgba(23, 23, 58, 0.05)' : '' }}
          id={name}
          {...register}
          type="number"
          value={value === undefined || value === null ? 0 : value}
          {...rest}
        />
        {span && <span className={`${classSpan} text-sm font-medium text-gray-900`}>{span}</span>}
      </div>
      {errors?.[name]?.message && (
        <span className="mt-2 block text-sm text-red-600 dark:text-red-500">
          {t(errors?.[name]?.message)}
        </span>
      )}
    </div>
  )
}

export default InputNumberField
