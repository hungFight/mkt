import { Radio } from 'flowbite-react'
import { FC } from 'react'

interface ToggleSwitchProps {
  checked?: boolean
  onChange?: (e: any) => void
  spanText?: string
  focusRingColor?: string
  darkFocusRingColor?: string
  spanClass?: string
  circle?: boolean
  name?: string
  clsLabel?: string
  value?: string
  id?: string
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({
  checked = false,
  onChange,
  spanText = 'Toggle Switch',
  focusRingColor = 'blue-300',
  darkFocusRingColor = 'blue-800',
  spanClass = 'ms-3 text-sm font-medium text-gray-900 dark:text-gray-300',
  circle,
  name,
  clsLabel,
  value,
  id
}) => {
  return (
    <label className={`inline-flex items-center cursor-pointer ${clsLabel}`}>
      {circle ? (
        <Radio id={id} name={name} value={value} />
      ) : (
        <>
          <input
            type="checkbox"
            value=""
            name={name}
            className="sr-only peer"
            checked={checked}
            onChange={onChange}
          />
          <div
            className={`relative w-11 h-6 ${
              checked ? 'bg-[#2196f3]' : 'bg-gray-200'
            } rounded-full  dark:peer-focus:ring-${darkFocusRingColor} dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600`}
          ></div>
        </>
      )}

      <span className={`${spanClass}`}>{spanText}</span>
    </label>
  )
}

export default ToggleSwitch
