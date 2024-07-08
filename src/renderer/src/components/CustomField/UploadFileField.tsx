import React, { FC, HTMLAttributes, ReactElement, useId, useRef, useState } from 'react'
import { FcOpenedFolder } from 'react-icons/fc'
import ButtonFlowbite from '../ButtonFlowbite'

export type paramsChangeFile = {
  files: File[]
}

export interface FileListProps {
  url: string
  isDel?: boolean
  originFileObj?: File
}

interface UploadFileFieldProps {
  name?: string
  changeFile?: (obj: paramsChangeFile) => void
  inputAttribute?: HTMLAttributes<HTMLInputElement>
  maxFile?: number
  multiple?: boolean
  currentCount?: number
  fileList?: FileListProps[]
  handleRemove?: (obj: { originListFile: FileListProps[]; newListFile: FileListProps[] }) => void
  accept?: string
  buttonText?: string
  clsBtn?: string
  clsInput?: string
  beforeInput?: boolean
  afterInput?: boolean
  clsContainer
  moreTag?: ReactElement
  max: number
  clsLabelRoot?: string
  clsLabel?: string
}

const UploadFileField: FC<UploadFileFieldProps> = ({
  inputAttribute,
  name,
  multiple = true,
  accept = 'image/*',
  changeFile,
  buttonText,
  clsBtn,
  beforeInput,
  afterInput,
  clsInput,
  clsContainer,
  moreTag,
  max,
  clsLabelRoot,
  clsLabel
}): JSX.Element => {
  const idInput = useId()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [filePaths, setFilePaths] = useState<string[]>([])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const files = event.target.files
    if (files) {
      if (files.length <= max) {
        const newFilePaths = Array.from(files).map((file) => file.webkitRelativePath || file.name)
        console.log(newFilePaths, 'file55!!')
        setFilePaths(newFilePaths)
        if (changeFile) {
          changeFile({ files: Array.from(files) })
        }
      } else {
      }
    }
  }
  const handleProxyClick = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }
  return (
    <div className={`flex cursor-pointer items-center ${clsContainer}`}>
      <input
        id={idInput}
        ref={fileInputRef}
        type="file"
        className="hidden"
        name={name}
        multiple={multiple}
        {...inputAttribute}
        accept={accept}
        onChange={handleFileChange}
      />
      <div className={clsLabelRoot}>
        {afterInput && (
          <label
            htmlFor={idInput}
            className="cursor-pointer mb-0 border border-[#dedede] border-r-0 py-[6px] px-[8px] "
          >
            <FcOpenedFolder size={24} />
          </label>
        )}
        {moreTag && (
          <label htmlFor={idInput} className={clsLabel}>
            {moreTag}
          </label>
        )}
      </div>
      <div onClick={handleProxyClick} className="cursor-pointer w-full">
        <input
          type="text"
          value={filePaths.join(', ')}
          className={`border w-full h-7 cursor-pointer ${clsInput}`}
          disabled
        />
      </div>
      {beforeInput && (
        <ButtonFlowbite className={`border-l-0 ${clsBtn}`} onClick={handleProxyClick}>
          {buttonText}
        </ButtonFlowbite>
      )}
    </div>
  )
}

export default UploadFileField
