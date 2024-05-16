import { FC, InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

export interface CheckboxFieldProps extends InputHTMLAttributes<HTMLElement> {
  title?: string
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  classInputContainer?: string
  isRequire?: boolean
}

const CheckboxField: FC<CheckboxFieldProps> = ({
  title,
  name,
  register,
  classInputContainer,
  ...rest
}) => {
  const { t } = useTranslation()

  return (
    <div className={` ${classInputContainer ?? ''}`}>
      <div className="flex items-center">
        <input
          className="form-checkbox h-5 w-5 text-blue-600"
          id={name}
          {...register?.(name)}
          type="checkbox"
          {...rest}
        />
        {title && (
          <label className="ml-2 mb-0 text-base font-medium text-gray-900" htmlFor={name}>
            {t(title)}
          </label>
        )}
      </div>
    </div>
  )
}

export default CheckboxField
