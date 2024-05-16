import bg from '@renderer/assets/images/banner-load.png'
import { Mic, Search } from 'lucide-react'
import { ReactNode } from 'react'
import Typewriter from 'typewriter-effect'

const LayoutAuth = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className="flex min-h-screen">
      <div className="!w-[60%] p-4 pt-8 text-white bg-white">
        <div>
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="relative w-[50%] m-auto border rounded-[10px] border-[#dedede] p-[5px]">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search color="#7E8490" size={18} />
            </div>
            <p className="text-black text-center">
              <Typewriter
                options={{
                  strings: ['www.phanmemmkt.vn'],
                  autoStart: true,
                  loop: true,
                  cursorClassName: 'cursor'
                }}
              />
            </p>

            <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
              <Mic color="#7E8490" size={18} />
            </button>
          </div>
        </div>
        <div
          className="w-full h-[90vh]"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundBlendMode: 'multiply'
          }}
        ></div>
      </div>
      <div className="flex items-center justify-center p-4 w-[40%] bg-white">{children}</div>
    </div>
  )
}

export default LayoutAuth
