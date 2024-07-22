import React, { FC, ReactElement } from 'react'

const VirtualMKTFrame: FC<{
  titleLeft: string
  titleRight: string
  handleSubmit: (data: any) => void
  childrenLeft: ReactElement
  childrenRight: ReactElement
  childrenHeader: ReactElement
}> = ({ handleSubmit, titleLeft, titleRight, childrenLeft, childrenRight, childrenHeader }) => {
  return (
    <form className="flex gap-3 justify-center " onSubmit={handleSubmit}>
      <div className="w-full  px-2 pb-2 pt-0">
        {childrenHeader}
        <div className="flex items-center justify-between mt-5   ">
          <div className="w-[63%] min-[1438px]:w-[64%] h-[75.5vh] border border-[rgb(214_214_214)]  rounded-[10px] bg-[rgb(255_255_255)] relative">
            <h2 className="w-fit text-base absolute top-[-16px] left-3 px-3 py-1 z-10">
              <p className="z-10 relative">{titleLeft}</p>
              <div className="w-full absolute top-[15px] left-[1px] h-[1px] bg-white "></div>
            </h2>
            <div className="mt-7"> {childrenLeft}</div>
          </div>
          <div className="w-[36%] min-[1438px]:w-[35%] h-[75.5vh] border border-[rgb(214_214_214)] rounded-[10px] relative bg-[rgb(255_255_255)]">
            <h2 className="w-fit text-base absolute top-[-16px] left-3 px-3 py-1 z-10">
              <p className="z-10 relative"> {titleRight}</p>
              <div className="w-full absolute top-[15px] left-[1px] h-[1px] bg-white "></div>
            </h2>
            <div className="w-full bg-white px-2 h-[90%] overflow-auto overflow-x-hidden  relative mt-7">
              {childrenRight}
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default VirtualMKTFrame
