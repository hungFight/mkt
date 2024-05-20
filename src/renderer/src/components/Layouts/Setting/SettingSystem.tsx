/* eslint-disable @typescript-eslint/explicit-function-return-type */

import ButtonFlowbite from '@renderer/components/ButtonFlowbite'
import InputNumberField from '@renderer/components/CustomField/InputNumberField'
import UploadFileField from '@renderer/components/CustomField/UploadFileField'
import GroupTitle from '@renderer/components/GroupTitle'
import TableSettingSystem from '@renderer/components/Table/TableSetting'
import { t } from 'i18next'
import { CircleFadingPlus, Database } from 'lucide-react'
import { AiOutlineCluster } from 'react-icons/ai'

const SettingSystem = () => {
  return (
    <>
      <GroupTitle title={t('Cài đặt số luồng ')} icon={<Database />} />
      <div className="px-6 my-2">
        <InputNumberField name="luong" title="Số luồng mở đồng thời khi đăng nhặp Facebook" />
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
      <div className="px-6 my-2">
        <InputNumberField
          name="limit"
          title={t('Số luồng chạy khi Scan thông tin tài khoản Facebook:')}
          classInput="!w-[150px] "
          classInputContainer="flex gap-3"
          span="Threads"
        />
        <div className="flex justify-between items-center my-3">
          <p>
            {t('Danh sách tải Scan')}{' '}
            <i className="text-slate-400 italic font-normal">
              {t('(Các tài khoản này sẽ được sử dụng để quét thông tin tài khoản Facebook)')}
            </i>
          </p>
          <ButtonFlowbite className="text-[#000] flex items-center gap-2">
            <CircleFadingPlus size={20} className="mr-2" />
            Thêm tài khoản
          </ButtonFlowbite>
        </div>
        <TableSettingSystem />
      </div>
    </>
  )
}

export default SettingSystem
