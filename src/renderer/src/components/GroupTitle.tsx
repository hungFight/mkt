import React, { memo } from 'react'

export interface GroupTitleProps {
  title: string
  icon?: React.ReactNode
}

const GroupTitle: React.FC<GroupTitleProps> = (props) => {
  const { title, icon } = props
  return (
    <div className={`font-bold text-lg flex items-center`}>
      {icon}
      <span className="ml-2">{title}</span>
    </div>
  )
}

GroupTitle.displayName = 'GroupTitle'

export default memo<GroupTitleProps>(GroupTitle)
