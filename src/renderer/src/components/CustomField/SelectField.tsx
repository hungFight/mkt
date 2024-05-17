/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, FC, HTMLAttributes, SetStateAction, useState } from 'react'
import { UseFormClearErrors, UseFormGetValues, UseFormSetValue } from 'react-hook-form'
import Select from 'react-select'
import { useDebounce } from 'rooks'

export interface optionType {
  value?: number | string
  label?: string | number
}

export interface SelectDefault {
  value?: string | number
  label?: string | number
}

export interface SelectFieldProps {
  name: string
  options?: SelectDefault[] | []
  parenSelect?: HTMLAttributes<HTMLElement>['className']
  isMultiple?: boolean
  setValue?: UseFormSetValue<any>
  getValue?: UseFormGetValues<any>
  clearErrors?: UseFormClearErrors<any>
  changeSelected?: (value: any) => void
  setValueSearch?: Dispatch<SetStateAction<string>>
  timeDelay?: number
  height?: string | number
  errors?: any
  title?: string
  isRequire?: boolean
  placeholder?: string
  backgroundColor?: string
  className?: string
  maxLimit?: number
  isShadow?: boolean
  styleControl?: { [key: string]: string | number }
  rest?: {
    [key: string]: number | string | SelectDefault[] | SelectDefault | []
  }
}

const filterMultipleSeletor = (options?: SelectDefault[], value?: any[]): SelectDefault[] => {
  let newOptions: SelectDefault[] = []

  if (options && value) {
    value.forEach((item) => {
      const findItem = options?.find((opt) => opt.value === item)
      if (findItem) {
        newOptions = [...newOptions, findItem]
      }
    })
  }

  return newOptions
}

const SelectField: FC<SelectFieldProps> = (prop) => {
  const {
    name,
    options,
    parenSelect,
    isMultiple,
    setValue,
    getValue,
    clearErrors,
    changeSelected,
    height,
    setValueSearch,
    timeDelay,
    errors,
    title,
    isRequire,
    placeholder,
    backgroundColor,
    maxLimit,
    isShadow = true,
    styleControl,
    rest,
    className
  } = prop
  // const [valueSearch, setValueSearch] = useState("");
  const setValueDebounced = useDebounce<Dispatch<SetStateAction<string>>>(
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    setValueSearch ?? (() => {}),
    timeDelay ?? 800
  )
  const [, setRender] = useState(false)
  const value = typeof getValue === 'function' ? getValue(name) : []

  const ValueSelectd =
    value && Array.isArray(value)
      ? filterMultipleSeletor(options, value)
      : options?.filter((item: optionType) => item.value === value)

  const customStyles = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: (base: any) => ({
      ...base,
      backgroundColor: backgroundColor ?? 'transparent',
      // Overwrittes the different states of border
      borderColor: 'rgb(226 232 240 / 1)',
      textAlign: 'left',

      boxShadow: isShadow ? '0 0 5px 1px rgba(23, 23, 58, 0.05)' : '',

      // // Removes weird border around container
      // boxShadow: state.isFocused ? null : null,
      height: height ?? '42px',
      '&:hover': {
        // Overwrittes the different states of border
        borderColor: 'rgb(226 232 240 / 1)',

        backgroundColor: 'transparent'
      },
      '&:focus': {
        // Overwrittes the different states of border
        color: '#495057',
        backgroundColor: 'transparent',
        borderColor: '#80bdff',
        outline: 0,
        boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 25%)'
      },
      ...styleControl
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    valueContainer: (provided: any) => ({
      ...provided,
      paddingLeft: '20px'
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    container: (base: any) => ({
      ...base,
      width: '100%'
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    IndicatorsContainer2: (base: any) => ({
      ...base,
      borderColor: 'transparent'
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    indicatorSeparator: (base: any) => ({
      ...base,
      width: 0
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    menuPortal: (provided: any) => ({ ...provided, zIndex: 9999 }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    menu: (provided: any) => ({ ...provided, zIndex: 9999 })
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const customFilter = (option: optionType, inputValue: string) => {
    const labelConvert = option?.label?.toString() || ''
    const inputValueConvert = inputValue.trim()

    const serching = labelConvert.includes(inputValueConvert)

    const searching = options?.filter((item) => {
      const label = item?.label?.toString() || ''
      const inputVl = inputValue

      return label.includes(inputVl.replace(/^\s+|\s+$/gm, ''))
    })

    if (searching && searching?.length <= 0) {
      setValueDebounced((inputValueConvert && inputValueConvert.replace(/^\s+|\s+$/gm, '')) || '')
    }
    return serching
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectedOptionChange = (selectedOption: any): void => {
    if (!Array.isArray(selectedOption)) {
      const id = selectedOption?.value
      if (errors?.[name]?.message) {
        typeof clearErrors === 'function' && clearErrors(name)
      }
      typeof setValue === 'function' && setValue(name, id)
      typeof changeSelected === 'function' && changeSelected(selectedOption)
      setRender((prev) => !prev)
    } else {
      const ids = selectedOption?.map((item: optionType) => item?.value)

      if (errors?.[name]?.message) {
        typeof clearErrors === 'function' && clearErrors(name)
      }
      typeof setValue === 'function' && setValue(name, ids)
      typeof changeSelected === 'function' && changeSelected(selectedOption)
      setRender((prev) => !prev)
    }
  }

  return (
    <div className={parenSelect}>
      {title && (
        <label className="block mb-2 text-base font-semibold text-gray-900 " htmlFor={name}>
          {title} {isRequire && <span className="text-red-500">*</span>}
        </label>
      )}

      <Select
        id={name}
        name={name}
        value={ValueSelectd && ValueSelectd?.length > 0 ? ValueSelectd : []}
        className={className}
        onChange={handleSelectedOptionChange}
        menuPortalTarget={document.body}
        filterOption={customFilter}
        styles={customStyles}
        options={options}
        isMulti={isMultiple}
        placeholder={placeholder}
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        isOptionDisabled={() =>
          (maxLimit && ValueSelectd && ValueSelectd?.length >= maxLimit) || false
        }
        {...rest}
      />

      {errors?.[name]?.message && (
        <span className="mt-2 block text-sm text-red-600 dark:text-red-500">
          {errors?.[name]?.message}
        </span>
      )}
    </div>
  )
}

export default SelectField
