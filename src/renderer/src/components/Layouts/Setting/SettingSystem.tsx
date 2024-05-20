/* eslint-disable @typescript-eslint/explicit-function-return-type */

import ButtonFlowbite from '@renderer/components/ButtonFlowbite'
import CheckboxField from '@renderer/components/CustomField/CheckboxField'
import InputNumberField from '@renderer/components/CustomField/InputNumberField'
import SelectField from '@renderer/components/CustomField/SelectField'
import UploadFileField from '@renderer/components/CustomField/UploadFileField'
import GroupTitle from '@renderer/components/GroupTitle'
import { Radio } from 'flowbite-react'
import { t } from 'i18next'
import { Database } from 'lucide-react'
import { useState } from 'react'
import { AiOutlineCluster } from 'react-icons/ai'
import { CiStreamOn } from 'react-icons/ci'

const SettingSystem = () => {
  const [selectedOption, setSelectedOption] = useState('false')
  const handleOptionChange = (): void => {
    setSelectedOption((prevOption) => (prevOption === 'true' ? 'false' : 'true'))
  }

  return (
    <>
      <GroupTitle title={t('Cài đặt số luồng ')} icon={<CiStreamOn />} />
      <div className="px-6 my-2">
        <InputNumberField
          name="luong"
          title="Số luồng mở đồng thời khi đăng nhặp Facebook"
          classInputContainer="flex gap-2"
          span="Luồng"
          clsTitle="w-[40%] justify-end"
          classInput="w-[150px]"
        />
        <InputNumberField
          name="luong"
          title="Số luồng chạy đồng thời "
          classInputContainer="flex gap-2 my-3"
          span="Luồng"
          clsTitle="w-[40%]  justify-end"
          classInput="w-[150px]"
        />
      </div>
      <hr className="my-3" />
      <GroupTitle title={t('Cài đặt dữ liệu')} icon={<Database />} />
      <div className="px-6 my-2">
        <div className="my-4 flex items-center justify-center gap-3">
          <label className="block text-gray-700 !pb-0 !mb-0 text-sm text-right whitespace-nowrap font-medium w-[30%]">
            {t('Đường dẫn thư mục Profile:')}
          </label>
          <div className="flex items-center w-[70%]">
            <UploadFileField
              afterInput
              beforeInput
              buttonText="Chọn"
              clsBtn="text-[#000] rounded-[0]"
              clsInput="w-full h-[38px]"
              clsContainer="w-full"
            />
          </div>
        </div>
        <div className="my-4 flex items-center justify-center gap-3">
          <label className="block text-gray-700 !pb-0 !mb-0 text-sm text-right whitespace-nowrap font-medium w-[30%] test">
            {t('Sao lưu Cơ sở dữ liệu:')}
          </label>
          <div className="flex items-center gap-2 w-[70%]">
            <ButtonFlowbite className="text-[#fff] rounded-none bg-[#18937B] px-4" size="sm">
              {t('Sao lưu')}
            </ButtonFlowbite>
            <i className="text-slate-400 italic font-normal">
              {t('Thời gian sao lưu gần nhất. Cơ sở dữ liệu chưa bao giờ được sao lưu')}
            </i>
          </div>
        </div>
        <div className="my-4 flex items-center justify-center gap-3">
          <label className="block text-gray-700 !pb-0 !mb-0 text-sm text-right whitespace-nowrap font-medium w-[30%]">
            {t('Khôi phục Cơ sở dữ liệu:')}
          </label>
          <div className="flex items-center gap-2 w-[70%]">
            <ButtonFlowbite className="text-[#000] rounded-none px-4" size="sm">
              {t('Khôi phục')}
            </ButtonFlowbite>
            <i className="text-slate-400 italic font-normal">
              {t('Cơ sở dữ liệu chưa bao giờ được khôi phục')}
            </i>
          </div>
        </div>
      </div>
      <hr className="my-3" />
      <GroupTitle title={t('Cài đặt tác vụ hệ thống')} icon={<AiOutlineCluster />} />
      <div className="px-6 my-2 flex flex-col gap-3">
        <div className="flex items-center">
          <CheckboxField
            title="Tắt hình ảnh trình duyệt"
            name="hethong"
            classInputContainer="w-1/2"
          />
          <InputNumberField
            checkbox
            title="Số chrome hiển thị trên 1 hàng"
            name="chrome"
            classInputContainer="w-1/2 flex items-center gap-2"
            classInput="w-[150px]"
            clsLabel="text-[16px]"
          />
        </div>
        <div className="flex items-center">
          <CheckboxField
            title="Sử dụng giao diện App Facebook"
            name="app-fb"
            classInputContainer="w-1/2"
          />
          <CheckboxField title="Delay khi mở chrome" name="delay" classInputContainer="w-1/2" />
        </div>
        <div className="flex items-center my-2">
          <CheckboxField
            title="Login bằng Cookie tài khoản"
            name="login"
            classInputContainer="w-1/2"
          />
          <CheckboxField
            title="Delay khi đóng chrome"
            name="delay-close"
            classInputContainer="w-1/2"
          />
        </div>

        <div className="flex items-center my-2">
          <CheckboxField
            title="Tự động lấy Cookies tài khoản"
            name="auto-cookies"
            classInputContainer="w-1/2"
          />
          <CheckboxField
            title="Tự động điều chỉnh tốc độ nhập liệu"
            name="auto"
            classInputContainer="w-1/2"
          />
        </div>
        {/* <RangeSlider /> */}

        <div className="flex items-center mb-2">
          <CheckboxField
            title="Sử dụng Extensions Proxy tự động khi dùng IP tĩnh"
            name="extensions"
            classInputContainer="w-1/2"
          />
          <CheckboxField
            title="Tự động lấy token tài khoản"
            name="auto"
            classInputContainer="w-1/4"
          />
          <SelectField name="eaag" parenSelect="w-1/4" className="!w-[150px]" />
        </div>

        <div className="flex items-center mb-2 gap-5">
          <CheckboxField
            title={`Chọn giao diện mở khi "Đăng nhập Facebook" trong quản lý tài khoản`}
            name="extensions"
            classInputContainer="w-max"
          />
          <div className="flex items-center gap-3">
            <Radio
              id="www"
              name="www.facebook.com"
              value={'false'}
              checked={selectedOption === 'false'}
              onChange={handleOptionChange}
            />
            <label
              htmlFor="www"
              className="cursor-pointer select-none block mb-0 text-sm font-medium text-gray-900 whitespace-nowrap"
            >
              www.facebook.com
            </label>
          </div>
          <div className="flex items-center gap-3">
            <Radio
              id="mbasic"
              name="mbasic.facebook.com"
              value={'true'}
              checked={selectedOption === 'true'}
              onChange={handleOptionChange}
            />
            <label
              htmlFor="mbasic"
              className="cursor-pointer select-none block mb-0 text-sm font-medium text-gray-900 whitespace-nowrap"
            >
              mbasic.facebook.com
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default SettingSystem
