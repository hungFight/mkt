import React, { FC } from 'react'
import ButtonC from '../CustomField/ButtonC'
import { useTranslation } from 'react-i18next'

const NodalConfirm: FC<{
  title: string
  classRoot?: string
  classTitle?: string
  classBox?: string
  titleLeftB: string
  titleRightB: string
  onClick: (is: boolean) => void
}> = ({ title, classBox, classRoot, classTitle, titleLeftB, titleRightB, onClick }) => {
  const { t } = useTranslation()
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-[rgb(0_0_0_/_60%)]  z-50 flex items-center justify-center ${classRoot}`}
    >
      <div
        className={`w-[40%] h-[150px]  min-[1500px]:h-[200px] bg-white  rounded-[10px] ${classBox}`}
      >
        <h3
          className={`w-full text-start p-2 px-3 bg-[#cbcbcb] rounded-t-[10px] text-base min-[1500px]:p-5 min-[1500px]:text-[25px]`}
        >
          {t('confirm')}
        </h3>
        <h3
          className={`w-full flex justify-center py-6 text-sm min-[1500px]:text-[25px]  ${classTitle}`}
        >
          {title}
        </h3>
        <div className="flex items-center w-full justify-end pr-3">
          <ButtonC
            title={t(titleLeftB)}
            className="mr-2 bg-red-500 p-1  min-[1500px]:text-[22px]  min-[1500px]:p-4"
            onClick={() => onClick(true)}
          />
          <ButtonC
            title={t(titleRightB)}
            className="bg-blue-500 p-1  min-[1500px]:text-[22px]  min-[1500px]:p-4"
            onClick={() => onClick(false)}
          />
        </div>
      </div>
    </div>
  )
}

export default NodalConfirm
