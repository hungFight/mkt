import { FC, InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

export interface InputFieldPops extends InputHTMLAttributes<HTMLElement> {
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
  inputClassName?: string
}

const InputField: FC<InputFieldPops> = ({
  title,
  name,
  register,
  errors,
  classInputContainer,
  isRequire,
  isShadow,
  round,
  inputClassName,
  ...rest
}) => {
  const { t } = useTranslation()

  return (
    <div className={` ${classInputContainer ?? ''}`}>
      {title && (
        <label className="block mb-2 text-base font-semibold text-gray-900 " htmlFor={name}>
          {t(title)} {isRequire && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        className={`border outline-none  px-5 py-[8px] text-[#505050] ${
          round ? round : 'rounded-md'
        } ${inputClassName} w-full bg-transparent`}
        autoComplete="off"
        style={{ boxShadow: isShadow ? '0 0 5px 1px rgba(23, 23, 58, 0.05)' : '' }}
        id={name}
        {...register?.(name)}
        type="text"
        {...rest}
      />
      {errors?.[name]?.message && (
        <span className="mt-2 block text-sm text-red-600 dark:text-red-500">
          {t(errors?.[name]?.message)}
        </span>
      )}
    </div>
  )
}

export default InputField
