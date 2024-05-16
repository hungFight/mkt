/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { IconType } from 'react-icons/lib'

export type configContextMenuType = {
  Icon: IconType
  action: string
}

interface RenderContextMenuProps {
  renderData: configContextMenuType[]
  valueClickItem?: any
  expandValue?: any
}

const RenderContextMenu: FC<RenderContextMenuProps> = ({ renderData }): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div className="bg-white px-[0] py-[10px] shadow-menu rounded-[5px] relative custom-before">
      {renderData?.map((menuAction, index) => {
        const Icon = menuAction.Icon
        return (
          <div
            className="cursor-pointer p-2 flex items-center space-x-2 hover:bg-[#DDEDF6] hover:text-[#181d1f] relative"
            key={index}
          >
            <Icon />
            <span className="text-xs">{t(`${menuAction.action}`)}</span>
          </div>
        )
      })}
    </div>
  )
}

export default RenderContextMenu
