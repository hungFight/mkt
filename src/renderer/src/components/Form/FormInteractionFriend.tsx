import { Link } from 'react-router-dom'
import CheckboxField from '../CustomField/CheckboxField'
import InputNumberDistanceField from '../CustomField/InputNumberDistanceField'

const FormInteractionFriend = (): JSX.Element => {
  const handleSubmit = (): void => {
    console.log(123)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center">
        <CheckboxField
          title="Tương tác theo UID (Áp dụng với: Thích bài viết, Bình luận bài viết và nhắn tin)"
          name="read"
          classLabel="block mb-0 h-[38px] mt-[16px] text-sm font-medium text-gray-900 whitespace-nowrap"
          classInputContainer="w-1/2"
        />
        <Link to="#" className=" block underline text-[#0004f4]">
          Vui lòng nhập UID tương tác tại đây! Nhập mỗi nội dung 1 dòng...
        </Link>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <InputNumberDistanceField
            checkbox
            clsTitle="w-[200px]"
            name="newfeed"
            title="Thích bài viết bạn bè"
            classInputContainer="flex mt-4 items-center gap-2"
            classInput="!w-[100px] border outline-none  px-5 py-[3px] text-[#505050] rounded-md"
            span="Bài viết"
            classSpan="w-[40px] whitespace-nowrap"
          />
          <InputNumberDistanceField
            checkbox
            clsTitle="w-[200px]"
            name="story"
            title="Kết bạn theo gợi ý"
            classInputContainer="flex mt-4 items-center gap-2"
            classInput="!w-[100px] border outline-none  px-5 py-[3px] text-[#505050] rounded-md"
            span="Bạn bè"
            classSpan="w-[40px] whitespace-nowrap"
          />
          <InputNumberDistanceField
            checkbox
            clsTitle="w-[200px]"
            name="like"
            title="Đồng ý lời mời kết bạn"
            classInputContainer="flex mt-4 items-center gap-2"
            classInput="!w-[100px] border outline-none  px-5 py-[3px] text-[#505050] rounded-md"
            span="Bạn bè"
            classSpan="w-[40px] whitespace-nowrap"
          />

          <InputNumberDistanceField
            checkbox
            clsTitle="w-[200px]"
            name="comment"
            title="Hủy bạn bè đã kết bạn"
            classInputContainer="flex mt-4 items-center gap-2"
            classInput="!w-[100px] border outline-none  px-5 py-[3px] text-[#505050] rounded-md"
            span="Bạn bè"
            classSpan="w-[40px] whitespace-nowrap"
          />
          <InputNumberDistanceField
            checkbox
            clsTitle="w-[200px]"
            name="sharePost"
            title="Kết bạn với bạn của bạn bè"
            classInputContainer="flex mt-4 items-center gap-2"
            classInput="!w-[100px] border outline-none  px-5 py-[3px] text-[#505050] rounded-md"
            span="Bạn bè"
            classSpan="w-[40px] whitespace-nowrap"
          />
        </div>
        <div className="w-1/2">
          <InputNumberDistanceField
            clsTitle="w-[220px]"
            name="video"
            title="Bình luận bài viết bạn bè"
            classInputContainer="flex mt-4 items-center gap-2"
            classInput="!w-[100px] border outline-none  px-5 py-[3px] text-[#505050] rounded-md"
            span="Bài viết"
            classSpan="w-[40px] whitespace-nowrap"
          />
          <InputNumberDistanceField
            clsTitle="w-[220px]"
            name="message"
            title="Nhắn tin ngẫu nhiên cho bạn bè"
            classInputContainer="flex mt-4 items-center gap-2"
            classInput="!w-[100px] border outline-none  px-5 py-[3px] text-[#505050] rounded-md"
            span="Bạn bè"
            classSpan="w-[40px] whitespace-nowrap"
          />
          <Link to="#" className=" block h-[38px] mt-[16px] underline text-[#0004f4]">
            Vui lòng nhập NỘI DUNG NHẮN TIN tại đây! Nhập mỗi nội dung 1 dòng...
          </Link>
          <InputNumberDistanceField
            checkbox
            clsTitle="w-[220px]"
            name="videoWatch"
            title="Chúc mừng sinh nhật bạn bè"
            classInputContainer="flex mt-4 items-center gap-2"
            classInput="!w-[100px] border outline-none  px-5 py-[3px] text-[#505050] rounded-md"
            span="Bạn bè"
            classSpan="w-[40px] whitespace-nowrap"
          />
          <Link to="#" className=" block h-[38px] mt-[16px] underline text-[#0004f4]">
            Vui lòng nhập NỘI DUNG CHÚC MỪNG SINH NHẬT tại đây! Nhập mỗi nội dung 1 dòng...
          </Link>
        </div>
      </div>
    </form>
  )
}

export default FormInteractionFriend
