import { ChangeEvent, FC, InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

export interface TextAreaFieldPops extends InputHTMLAttributes<HTMLElement> {
  title?: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors?: any
  classInputContainer?: string
  isRequire?: boolean
  isShadow?: boolean
  round?: string
  clsTextArea?: string
  clsTextLabel?: string
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextAreaField: FC<TextAreaFieldPops> = ({
  title,
  name,
  register,
  errors,
  classInputContainer,
  isRequire,
  isShadow,
  round,
  clsTextArea,
  clsTextLabel,
  onChange,
  ...rest
}) => {
  const { t } = useTranslation()

  return (
    <div className={` ${classInputContainer ?? ''}`}>
      {title && (
        <label
          className={`label_area block mb-1 text-base font-light text-gray-900 ${clsTextLabel}`}
          htmlFor={name}
        >
          {t(title)} {isRequire && <span className="text-red-500">*</span>}
        </label>
      )}
      <textarea
        className={`border outline-none  overflow-hidden placeholder:font-medium placeholder:text-sm  px-5 py-[10px] text-[#505050] ${
          round ? round : 'rounded-md'
        } ${clsTextArea} w-full bg-transparent border  border-[#367ff5] focus:!shadow-[0_0_3px_#367ff5] `}
        autoComplete="off"
        style={{ boxShadow: isShadow ? '0 0 5px 1px rgba(23, 23, 58, 0.05)' : '' }}
        id={name}
        onChange={onChange}
        {...register}
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

export default TextAreaField
