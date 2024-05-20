/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Radio } from 'flowbite-react'
import { useState } from 'react'
import ButtonFlowbite from '../ButtonFlowbite'
import CheckboxField from '../CustomField/CheckboxField'
import InputField from '../CustomField/InputField'
import InputNumberDistanceField from '../CustomField/InputNumberDistanceField'
import InputNumberField from '../CustomField/InputNumberField'
import SelectField from '../CustomField/SelectField'

const FormConfigInteraction = (): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState('false')

  const handleSubmit = (): void => {
    console.log(selectedOption)
  }

  const handleOptionChange = (): void => {
    setSelectedOption((prevOption) => (prevOption === 'true' ? 'false' : 'true'))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-3">
        <div className="flex gap-3 2xl:w-[15%] w-[175px]">
          <Radio
            id="addScript"
            name="secure"
            value={'false'}
            checked={selectedOption === 'false'}
            onChange={handleOptionChange}
          />
          <label
            htmlFor="addScript"
            className="cursor-pointer select-none block mb-0 text-sm font-medium text-gray-900 whitespace-nowrap"
          >
            Thêm kịch bản mới
          </label>
        </div>
        <InputField
          name="name"
          classInputContainer="[&>*]:h-[38px]"
          inputClassName="font-normal text-sm "
          placeholder="Tên kịch bản"
        />
        <ButtonFlowbite className="bg-[#F9C047] whitespace-nowrap w-[145px]">
          Thêm kịch bản
        </ButtonFlowbite>
        <InputNumberField
          name="total"
          title="Tổng số hành động tương tác"
          classInputContainer="flex mt-2 items-center gap-5 justify-between"
          classInput="!w-[100px] border outline-none  px-5 py-[3px] text-[#505050] rounded-md"
          span="Hành động"
          classSpan="w-[40px] whitespace-nowrap"
        />
      </div>
      <div className="flex items-center gap-3 mt-3">
        <div className="flex gap-3 2xl:w-[15%] w-[175px]">
          <Radio
            id="editScript"
            name="secure"
            value={'true'}
            checked={selectedOption === 'true'}
            onChange={handleOptionChange}
          />
          <label
            className="cursor-pointer select-none block mb-0 text-sm font-medium text-gray-900 whitespace-nowrap"
            htmlFor="editScript"
          >
            Sửa kịch bản hiện tại
          </label>
        </div>
        <SelectField name="script" className="!w-[237px]" />
        <ButtonFlowbite className="bg-[#C8293D] whitespace-nowrap w-[145px]">
          Xóa kịch bản
        </ButtonFlowbite>
        <InputNumberDistanceField
          name="total"
          title="Khoảng cách 2 lần tương tác"
          classInputContainer="flex mt-2 items-center gap-6"
          classInput="!w-[100px] border outline-none  px-5 py-[3px] text-[#505050] rounded-md"
          span="Giây"
          classSpan="w-[40px] whitespace-nowrap"
        />
      </div>
      <CheckboxField
        title={'Không tương tác trùng hành động'}
        name="use"
        classInputContainer="my-3"
        classLabel="block mb-0 text-sm font-medium text-gray-900 whitespace-nowrap"
      />
      <CheckboxField
        title={'Chọn/Bỏ tất cả hành động'}
        name="act"
        classLabel="block mb-0 text-sm font-medium text-gray-900 whitespace-nowrap"
      />
    </form>
  )
}

export default FormConfigInteraction
