import React, {
  Dispatch,
  FC,
  HTMLAttributes,
  ReactElement,
  SetStateAction,
  useId,
  useRef,
  useState
} from 'react'
import { FcOpenedFolder } from 'react-icons/fc'
import ButtonFlowbite from '../ButtonFlowbite'
import ButtonC from './ButtonC'
import { useTranslation } from 'react-i18next'

export type paramsChangeFile = {
  files: File[] | []
}

export interface FileListProps {
  url: string
  isDel?: boolean
  originFileObj?: File
}

interface UploadFileFieldProps {
  name?: string
  changeFile?: Dispatch<SetStateAction<paramsChangeFile>>
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
  isShowImage?: boolean
  beforeInput?: boolean
  afterInput?: boolean
  clsContainer
  moreTag?: ReactElement
  clsLabelRoot?: string
  clsLabel?: string
  clsButtons?: string
  setError: Dispatch<SetStateAction<boolean>>
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
  clsLabelRoot,
  clsLabel,
  clsButtons,
  isShowImage,
  setError
}): JSX.Element => {
  const { t } = useTranslation()
  const idInput = useId()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [filePaths, setFilePaths] = useState<string[]>([])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const files = event.target.files
    if (files) {
      setError(false)
      const newFilePaths = Array.from(files).map((file) => file.webkitRelativePath || file.name)
      setFilePaths(newFilePaths)
      if (changeFile) changeFile({ files: Array.from(files) })
    }
  }
  const handleProxyClick = (): void => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }
  return (
    <div className={`flex cursor-pointer items-center  ${clsContainer}`}>
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
        // {...({ webkitdirectory: '' } as React.InputHTMLAttributes<HTMLInputElement>)}
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
        <div className="flex items-center w-max">
          <label htmlFor={isShowImage ? idInput : ''} className={clsLabel}>
            <ButtonC
              className={`text-sm font-light  bg-blue-500 text-nowrap mr-1 p-2 ${clsButtons}`}
              title={t('add_image')}
            />
          </label>

          <ButtonC
            className={`text-sm font-light  bg-red-500 text-nowrap p-2 ${clsButtons}`}
            onClick={(e) => {
              e.stopPropagation()
              if (changeFile) changeFile({ files: [] })
            }}
            title={t('delete_all')}
          />
        </div>
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
