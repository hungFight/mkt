import { FC } from 'react'
import { IoCopyOutline } from 'react-icons/io5'
import Copy, { CopyProps } from '../CopyComponents'
import InputField, { InputFieldPops } from './InputField'

interface InputCopyProps extends CopyProps, InputFieldPops {
  classWapperCopy?: string
}

const InputCopy: FC<InputCopyProps> = ({
  text,
  name,
  title,
  isRequire,
  classContainer,
  children,
  classWapperCopy,
  msgCopy,
  ...rest
}): JSX.Element => {
  return (
    <div className={classWapperCopy ?? ''}>
      {title && (
        <label className="block mb-2 text-base font-semibold text-gray-900 " htmlFor={name}>
          {title} {isRequire && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        <InputField name={name} disabled readOnly {...rest} classInputContainer="[&>input]:pr-8" />
        <Copy
          text={text}
          classContainer={`w-fit top-1 translate-y-1/2 right-2 [&>*]:cursor-pointer !absolute ${classContainer}`}
          msgCopy={msgCopy}
        >
          <IoCopyOutline size={18} className="cursor-pointer" />
          {children}
        </Copy>
      </div>
    </div>
  )
}

export default InputCopy
