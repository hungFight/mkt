import React, { FC, ReactElement } from 'react'
import ButtonFlowbite from '../ButtonFlowbite'
import InputField from '../CustomField/InputField'

const ModalOneField: FC<{
  submit: () => void
  rootClick: () => void
  onChange: (e: any) => void
  value: string
  icon: ReactElement
  error?: string
  titleB: string
  title: string
}> = ({ submit, onChange, value, icon, error, rootClick, titleB, title }) => {
  return (
    <div
      className="fixed top-0 left-0 z-50 w-full h-full bg-[rgb(0_0_0_/_66%)] flex items-center justify-center"
      onClick={rootClick}
    >
      <div className="w-1/3 h-1/3 bg-white" onClick={(e) => e.stopPropagation()}>
        <div className="w-full  text-center">
          <h3 className="w-full p-2 bg-[#cdcdcd] flex items-center justify-center">
            <div className="mr-2">{icon}</div>
            {title}
          </h3>
          <InputField
            errors={{ name: { message: error } }}
            name="name"
            inputClassName={`border-2 !w-[90%] m-auto mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
              error ? 'border-red-500' : ' border-black'
            }`}
            placeholder="New value"
            value={value}
            onChange={onChange}
          />
        </div>
        <div className="flex w-full justify-center mt-10">
          {' '}
          <ButtonFlowbite className="bg-blue-600" onClick={submit}>
            {titleB}
          </ButtonFlowbite>
        </div>
      </div>
    </div>
  )
}

export default ModalOneField