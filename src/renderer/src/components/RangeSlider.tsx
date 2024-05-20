import { FC, ReactNode, useEffect, useRef, useState } from 'react'

interface RangeSliderProps {
  className?: string
  percentageComparison?: ReactNode
}

const RangeSlider: FC<RangeSliderProps> = ({ percentageComparison }) => {
  const elementRange = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(50) // Initial width as 50%

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent): void => {
      if (elementRange.current) {
        const rect = elementRange.current.getBoundingClientRect()
        let newWidth = ((event.clientX - rect.left) / rect.width) * 100
        newWidth = Math.min(Math.max(newWidth, 0), 100) // Clamp between 0 and 100
        setWidth(newWidth)
      }
    }

    const handleMouseUp = (): void => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    const handleMouseDown = (): void => {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    const sliderThumb = elementRange.current?.querySelector('.slider-thumb')
    sliderThumb?.addEventListener('mousedown', handleMouseDown)

    return () => {
      sliderThumb?.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <div>
      <div className="flex justify-between dark:text-white-light">
        <div className="rounded-full p-1 h-fit icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="17px" height="17px">
            <path
              d="M32 32c17.7 0 32 14.3 32 32V400c0 8.8 7.2 16 16 16H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-44.2 0-80-35.8-80-80V64C0 46.3 14.3 32 32 32zM160 224c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm128-64V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V160c0-17.7 14.3-32 32-32s32 14.3 32 32zm64 32c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V224c0-17.7 14.3-32 32-32zM480 96V320c0 17.7-14.3 32-32 32s-32-14.3-32-32V96c0-17.7 14.3-32 32-32s32 14.3 32 32z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>

      <div className="relative mt-4">
        <div
          className="h-4 w-full absolute bottom-0 left-0 right-0 cursor-pointer"
          style={{ width: `${width}%` }}
        ></div>

        <div
          ref={elementRange}
          className="bg-[#e9ebee] h-[7px] rounded-full relative pointer-events-none"
        >
          <div className="bg-current h-[7px] relative rounded-full" style={{ width: `${width}%` }}>
            <div className="slider-thumb absolute top-[50%] translate-x-2/4 -translate-y-2/4 right-[0px] bg-current w-[15px] h-[15px] block rounded-full cursor-pointer"></div>
          </div>
        </div>
      </div>

      <div className="text-xl font-normal mt-2 mb-2 flex gap-3">
        <span className="text-[#151D48] text-[24px] font-semibold"></span>
        <div>
          <span className="text-[#222] font-semibold text-[18px]">{percentageComparison}</span>
        </div>
      </div>
    </div>
  )
}

export default RangeSlider
