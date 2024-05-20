import { FC, InputHTMLAttributes, useEffect, useState } from 'react'
import { IoClose, IoSearch } from 'react-icons/io5'
import ButtonFlowbite from '../ButtonFlowbite'
import InputField from './InputField'

interface InputFilterProps extends InputHTMLAttributes<HTMLElement> {
  onChangeValue?: (value: string) => void
  button?: boolean
}

const InputFilter: FC<InputFilterProps> = ({ onChangeValue, button, ...spread }) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    const submitedForm = (e: KeyboardEvent): void => {
      if (e.key === 'Enter') {
        onChangeValue && onChangeValue((value ?? '').trim())
      } else if (e.key === 'Escape') {
        setValue('')
        onChangeValue && onChangeValue('')
      }
    }

    window.addEventListener('keydown', submitedForm)
    return () => {
      window.removeEventListener('keydown', submitedForm)
    }
  }, [value, onChangeValue])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  return (
    <div className="flex items-center gap-1 lg:w-[17.7rem]">
      <div className="flex-1 relative">
        <InputField
          value={value}
          name="filter"
          onChange={handleChange}
          classInputContainer="[&>*]:h-[32px]"
          placeholder="Tìm kiếm"
          {...spread}
        />
        {value && (
          <IoClose
            className="absolute top-1/2 -translate-y-1/2 right-1 cursor-pointer text-[#cccccc] select-none"
            onClick={(): void => {
              setValue('')
              onChangeValue && onChangeValue('')
            }}
            size={20}
          />
        )}
      </div>

      {button && (
        <ButtonFlowbite
          color="blue"
          className="p-1 [&>*]:p-0 h-full w-[38px]"
          onClick={(): void => onChangeValue && onChangeValue((value ?? '').trim())}
        >
          <IoSearch size={20} />
        </ButtonFlowbite>
      )}
    </div>
  )
}

export default InputFilter
