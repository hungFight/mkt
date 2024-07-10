import { Modal } from 'flowbite-react'
import React, { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react'
import { GoDotFill } from 'react-icons/go'
import { IoCheckmark, IoCloseOutline } from 'react-icons/io5'
import ButtonC from '../CustomField/ButtonC'
const ModalProgress: FC<{ isShow: boolean; setIsShow?: Dispatch<SetStateAction<boolean>> }> = ({
  isShow,
  setIsShow
}) => {
  const totalQuantity = 2
  const [progress, setProgress] = useState(0)
  const progressCurrent = useRef(0)
  const handleClose = (): void => {
    setIsShow && setIsShow(false)
    setProgress(0)
  }
  useEffect(() => {
    let timeIn = setInterval(() => {
      setProgress((prev) => {
        if (prev > 1) {
          clearInterval(timeIn)
          return 0
        }
        return prev + 1
      })
    }, 1000)
    return () => clearInterval(timeIn)
  }, [])
  useEffect(() => {
    progressCurrent.current = (progress / totalQuantity) * 100
  }, [progress])
  //   console.log(progress, 'progress', isShow, Number(55 + '0'))

  const isDone = progressCurrent.current === 100
  return (
    <Modal show={isShow} className="modal-progress modal">
      <div className="w-full flex items-center justify-between px-3 py-2 ">
        <h3 className="text-base">Tiến trình đang chạy</h3>
        <div className="text-[25px] cursor-pointer" onClick={handleClose}>
          <IoCloseOutline />{' '}
        </div>
      </div>
      <Modal.Body>
        <div className="px-2 py-2   relative my-5 rounded-xl flex items-center justify-center flex-wrap">
          <div className="w-[220px] h-[220px] rounded-[50%] bg-[rgb(240_240_240)] flex items-center justify-center relative">
            <div
              className={`w-full h-full absolute top-0 left-0  rounded-[50%]  flex items-center justify-center `}
              style={{
                background: `conic-gradient( #3589f1 ${progressCurrent.current}%,lightgray 0)`
              }}
            ></div>
            {/* <progress max={100} value={50} className=" bg-blue-600" /> */}
            <div className="w-[90%] h-[90%] rounded-[50%] bg-white flex items-center justify-center z-10">
              {isDone ? (
                <div className="text-[rgb(67_163_242)] text-[50px]">
                  {' '}
                  <IoCheckmark />
                </div>
              ) : (
                <div>
                  <h2 className="text-[25px] text-[rgb(67_163_242)] font-bold w-[85px] text-center">
                    {progressCurrent.current}%
                  </h2>
                  <div className="flex items-center justify-center text-[rgb(67_163_242)] relative mt-5">
                    <div
                      className="text-[13px] dot_one absolute  left-[25px] bottom-0"
                      style={{ animation: 'dot_one 1s linear infinite' }}
                    >
                      <GoDotFill />
                    </div>
                    <div
                      className="text-[13px] dot_true absolute  left-[35px] bottom-0"
                      style={{ animation: 'dot_two 1s linear infinite' }}
                    >
                      <GoDotFill />
                    </div>
                    <div
                      className="text-[13px] dot_three absolute  left-[45px] bottom-0"
                      style={{ animation: 'dot_three 1s linear infinite' }}
                    >
                      <GoDotFill />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full text-center">
            <h2 className="text-base font-light mt-5 mb-6 flex items-center justify-center">
              <p className="">Đang quét dữ liệu</p>{' '}
              <div className="flex items-center justify-center  ml-1">
                <div
                  className="text-[18px]  text-[#858585] relative w-[17px] h-[17px] flex items-center justify-center opacity-100"
                  style={{
                    animation: `${isDone ? 'dot_n_one 0.8s' : 'dot_one 1s '} linear infinite`
                  }}
                >
                  <GoDotFill />
                </div>
                <div
                  className={`text-[${
                    isDone ? '18px' : '13px'
                  }] ml-[-2px] text-[#cbcbcb] relative w-[17px] h-[17px] flex items-center justify-center opacity-100`}
                  style={{
                    animation: `${isDone ? 'dot_n_two 0.8s' : 'dot_two 1s'}  linear infinite`
                  }}
                >
                  <GoDotFill />
                </div>
                <div
                  className="text-[18px] ml-[-2px] text-[#858585] relative w-[17px] h-[17px] flex items-center justify-center opacity-100"
                  style={{
                    animation: `${isDone ? 'dot_n_three 0.8s' : 'dot_three 1s'}  linear infinite`
                  }}
                >
                  <GoDotFill />
                </div>
              </div>
            </h2>
            {isDone ? (
              <ButtonC
                title="Thành công"
                className="bg-green-500 py-2 w-fit px-8 m-auto"
                onClick={() => {
                  if (setIsShow) setIsShow(false)
                }}
              />
            ) : (
              <ButtonC title="Kết thúc" className="bg-red-500 py-2 w-fit px-8 m-auto" />
            )}
          </div>
        </div>
      </Modal.Body>{' '}
    </Modal>
  )
}

export default ModalProgress
