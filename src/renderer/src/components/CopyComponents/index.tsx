// import { sliceString } from '@/common/functions';
import { FC, HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

export interface CopyProps {
  text: string | number
  classContainer?: HTMLAttributes<HTMLDivElement>['className']
  children?: ReactNode
  msgCopy?: string
}

const Copy: FC<CopyProps> = ({ text, children, classContainer, msgCopy = 'Copied.' }) => {
  const [isCopy, setIsCopy] = useState(false)
  const timeOut = useRef<NodeJS.Timeout>()

  useEffect(() => {
    if (isCopy) {
      timeOut.current = setTimeout(() => {
        setIsCopy(false)
      }, 500)
    }

    return () => {
      clearTimeout(timeOut.current)
    }
  }, [isCopy])

  return (
    <CopyToClipboard
      text={text?.toString() || ''}
      onCopy={(): void => {
        setIsCopy(true)
      }}
      options={{ message: 'copy thành công' }}
    >
      <div className={`relative select-none ${classContainer ?? ''}`}>
        {children}

        {isCopy && (
          <span className="absolute bg-slate-400 text-white -top-8 p-1 rounded-full left-1/2 -translate-x-1/2">
            {msgCopy}
          </span>
        )}
      </div>
    </CopyToClipboard>
  )
}

export default Copy
