import { FC, InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

export interface InputNumberFieldPops extends InputHTMLAttributes<HTMLElement> {
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
  checkbox?: boolean
}

const InputNumberField: FC<InputNumberFieldPops> = ({
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
  ...rest
}) => {
  const { t } = useTranslation()

  return (
    <div className={` ${classInputContainer ?? ''}`}>
      <div className="flex gap-2 items-center">
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
          {...rest}
        />
        {span && <span className={`${classSpan}`}>{span}</span>}
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
