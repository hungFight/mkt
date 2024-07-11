import React, { FC, ReactElement } from 'react'

const ButtonC: FC<{
  onClick?: (e: any) => void
  icon?: ReactElement
  title: string
  className?: string
  type?: string
  classNameIcon?: string
}> = ({ onClick, icon, title, className, classNameIcon, type }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center text-sm p-1 cursor-pointer text-white rounded-[5px] px-3 ${className}`}
    >
      {icon && <div className={`mr-2 ${classNameIcon} `}>{icon}</div>}
      {title}
    </div>
  )
}

export default ButtonC
