import React, { Dispatch, FC, SetStateAction } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import logo from '@renderer/assets/images/Table-Logo.png'
import { useTranslation } from 'react-i18next'

const TextareaURL: FC<{
  files: File[]
  setFiles: Dispatch<
    SetStateAction<{
      files: File[]
    }>
  >
}> = ({ files, setFiles }) => {
  const { t } = useTranslation()
  return (
    <div className="w-full h-[200px] border border-blue-500 rounded-[10px] mb-2 p-4 overflow-auto relative">
      {files?.length ? (
        files.map((f, index) => (
          <div className="flex items-center justify-between hover:bg-black-light cursor-pointer px-2 py-1">
            <div className="flex items-center">
              <h2 className="w-5 mr-2">{index + 1}:</h2>
              <p className="text-[13px]">{f.path}</p>
            </div>
            <div className="flex items-center  hoverImage">
              <img
                src={URL.createObjectURL(f)}
                alt={f.path}
                className="w-6 h-6 rounded-[5px] mr-3"
              />
              <img
                src={URL.createObjectURL(f)}
                alt={f.path}
                className="hidden max-w-[150px] h-[150px] absolute top-3 right-[100px] rounded-[5px] mr-3 hoveredImage"
              />
              <div
                className="text-[25px] flex items-center justify-center rounded-[50%] hover:bg-white"
                onClick={() =>
                  setFiles((pre) => ({
                    files: pre.files.filter((_, indexF) => indexF !== index)
                  }))
                }
              >
                <IoCloseOutline />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-sm opacity-90 flex items-center">
            {t('empty')}
            <img src={logo} className="w-[30px]" />
          </p>
        </div>
      )}
    </div>
  )
}

export default TextareaURL
