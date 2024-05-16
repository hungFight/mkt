import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi'
import InputField, { InputFieldPops } from './InputField'

interface InputPasswordProps extends InputFieldPops {
  isShowDefault?: boolean
}

const InputPassword: FC<InputPasswordProps> = ({
  title,
  isRequire,
  name,
  isShowDefault = false,
  ...rest
}): JSX.Element => {
  const [isShow, setIsShow] = useState(isShowDefault)
  const { t } = useTranslation()

  return (
    <div>
      {title && (
        <label className="block mb-2 text-base font-semibold text-gray-900 " htmlFor={name}>
          {t(title)} {isRequire && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        <InputField
          name={name}
          {...rest}
          type={`${isShow ? 'text' : 'password'}`}
          classInputContainer="[&>input]:pr-8"
        />
        <div
          className="absolute top-0 translate-y-full right-2 [&>*]:cursor-pointer select-none"
          onClick={(): void => {
            setIsShow((prev) => !prev)
          }}
        >
          {!isShow && <PiEyeBold />}
          {isShow && <PiEyeClosedBold />}
        </div>
      </div>
    </div>
  )
}

export default InputPassword
