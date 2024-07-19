import { FC, InputHTMLAttributes } from 'react'
import {
  FieldValues,
  RegisterOptions,
  UseFormRegister,
  UseFormRegisterReturn
} from 'react-hook-form'
import { useTranslation } from 'react-i18next'

export interface CheckboxFieldProps extends InputHTMLAttributes<HTMLElement> {
  title?: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegisterReturn<any> | any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classInputContainer?: string
  isRequire?: boolean
  classLabel?: string
  classInput?: string
}

const CheckboxField: FC<CheckboxFieldProps> = ({
  title,
  name,
  register,
  classInputContainer,
  classLabel,
  classInput,
  ...rest
}) => {
  const { t } = useTranslation()

  return (
    <div className={` ${classInputContainer ?? ''}`}>
      <div className="flex items-center">
        <input
          className={`form-checkbox h-5 w-5 text-blue-600 border border-[rgb(174_174_174)] active:!shadow-[0_0_3px] shadow-blue-500 ${classInput}`}
          id={name}
          {...register}
          type="checkbox"
          {...rest}
        />
        {title && (
          <label
            className={`ml-2 mb-0 text-sm whitespace-nowrap font-medium text-gray-900 cursor-pointer ${classLabel}`}
            htmlFor={name}
          >
            {t(title)}
          </label>
        )}
      </div>
    </div>
  )
}

export default CheckboxField
