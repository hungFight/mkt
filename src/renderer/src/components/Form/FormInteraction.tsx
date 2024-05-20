import CheckboxField from '../CustomField/CheckboxField'
import InputNumberField from '../CustomField/InputNumberField'

const FormInteraction = (): JSX.Element => {
  const handleSubmit = (): void => {
    console.log(123)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <InputNumberField
          name="transfer"
          title="Chuyển tài khoản nếu lỗi liên tiếp"
          classInputContainer="flex items-center justify-between p-[7px] px-[10px] pr-0 rounded bg-[#EBEBEB]"
          classInput="!w-[100px] border outline-none  px-5 py-[0px] text-[#505050] rounded-md border-[#C7CDD4]"
          span="Lần"
          classSpan="w-[40px]"
        />
        <CheckboxField
          title={'Tự động lấy danh sách bạn bè hiện tại của tài khoản'}
          name={'friend'}
          classInputContainer="w-1/4 mt-[15px]"
          classLabel="text-sm font-medium"
        />
        <CheckboxField
          title={'Tự động lấy danh sách nhóm hiện tại của tài khoản'}
          name={'groupAuto'}
          classInputContainer="w-1/4 mt-[15px]"
          classLabel="text-sm font-medium"
        />
        <InputNumberField
          checkbox
          name="again"
          title="Chạy lại từ đầu"
          classInputContainer="flex mt-2 items-center justify-between"
          classInput="!w-[100px] border outline-none  px-5 py-[8px] text-[#505050] rounded-md"
          span="Lần"
          classSpan="w-[40px]"
        />
        <InputNumberField
          name="stop"
          title="Mỗi lần dừng"
          classInputContainer="flex items-center justify-between p-[7px] px-[10px] pr-0 mt-3 rounded bg-[#EBEBEB]"
          classInput="!w-[100px] border outline-none  px-5 py-[0px] text-[#505050] rounded-md border-[#C7CDD4]"
          span="Phút"
          classSpan="w-[40px]"
        />
      </div>
    </form>
  )
}

export default FormInteraction
