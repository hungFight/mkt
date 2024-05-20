import { FC, InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

export interface InputNumberDistanceFielddPops extends InputHTMLAttributes<HTMLElement> {
  title?: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>
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
  checkbox?: boolean
}

const InputNumberDistanceField: FC<InputNumberDistanceFielddPops> = ({
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
  value,
  clsTitle,
  ...rest
}) => {
  const { t } = useTranslation()

  return (
    <div className={` ${classInputContainer ?? ''}`}>
      <div className={`flex gap-2 items-center ${clsTitle}`}>
        {checkbox && (
          <input
            className="form-checkbox h-5 w-5 text-blue-600"
            id={name}
            {...register?.(name)}
            type="checkbox"
            {...rest}
          />
        )}
        {title && (
          <label
            className="block mb-0 text-sm font-medium text-gray-900 whitespace-nowrap"
            htmlFor={name}
          >
            {t(title)} {isRequire && <span className="text-red-500">*</span>}
          </label>
        )}
      </div>
      <div className="flex gap-2 items-center">
        <input
          className={`border outline-none  px-5 py-[8px] text-[#505050] ${
            round ? round : 'rounded-md'
          } ${classInput} w-full bg-transparent`}
          autoComplete="off"
          style={{ boxShadow: isShadow ? '0 0 5px 1px rgba(23, 23, 58, 0.05)' : '' }}
          id={name}
          {...register?.(name)}
          type="number"
          value={value === undefined || value === null ? 0 : value}
          {...rest}
        />
      </div>
      <div className="flex gap-2 items-center">
        <input
          className={`border outline-none  px-5 py-[8px] text-[#505050] ${
            round ? round : 'rounded-md'
          } ${classInput} w-full bg-transparent`}
          autoComplete="off"
          style={{ boxShadow: isShadow ? '0 0 5px 1px rgba(23, 23, 58, 0.05)' : '' }}
          id={name}
          {...register?.(name)}
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

export default InputNumberDistanceField
