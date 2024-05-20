import { Link } from 'react-router-dom'
import CheckboxField from '../CustomField/CheckboxField'
import InputField from '../CustomField/InputField'
import InputNumberDistanceField from '../CustomField/InputNumberDistanceField'
import InputNumberField from '../CustomField/InputNumberField'

const FormInteractionIndividual = (): JSX.Element => {
  const handleSubmit = (): void => {
    console.log(123)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <div className="w-1/2">
          <CheckboxField
            title="Đọc thông báo"
            name="read"
            classLabel="block mb-0 h-[38px] mt-[16px] text-sm font-medium text-gray-900 whitespace-nowrap"
          />
          <InputNumberDistanceField
            checkbox
            clsTitle="w-[200px]"
            name="newfeed"
            title="Lướt bảng tin"
            classInputContainer="flex mt-4 items-center gap-2"
            classInput="!w-[100px] border outline-none  px-5 py-[3px] text-[#505050] rounded-md"
            span="Giây"
            classSpan="w-[40px] whitespace-nowrap"
          />
          <InputNumberDistanceField
            checkbox
            clsTitle="w-[200px]"
            name="story"
            title="Lướt story"
            classInputContainer="flex mt-4 items-center gap-2"
            classInput="!w-[100px] border outline-none  px-5 py-[3px] text-[#505050] rounded-md"
            span="story"
            classSpan="w-[40px] whitespace-nowrap"
          />
          <InputNumberDistanceField
            checkbox
            clsTitle="w-[200px]"
            name="like"
            title="Thích bài viết bảng tin"
            classInputContainer="flex mt-4 items-center gap-2"
            classInput="!w-[100px] border outline-none  px-5 py-[3px] text-[#505050] rounded-md"
            span="Bài viết"
            classSpan="w-[40px] whitespace-nowrap"
          />

          <InputNumberDistanceField
            checkbox
            clsTitle="w-[200px]"
            name="comment"
            title="Bình luân bài viết bảng tin"
            classInputContainer="flex mt-4 items-center gap-2"
            classInput="!w-[100px] border outline-none  px-5 py-[3px] text-[#505050] rounded-md"
            span="Bài viết"
            classSpan="w-[40px] whitespace-nowrap"
          />
          <InputNumberField
            checkbox
            clsTitle="w-[308px]"
            name="sharePost"
            title="Chia sẻ bài viết ngẫu nhiên về tường"
            classInputContainer="flex mt-4 items-center gap-2"
            classInput="!w-[100px] border outline-none  px-5 py-[3px] text-[#505050] rounded-md"
            span="Bài viết"
            classSpan="w-[40px] whitespace-nowrap"
          />
        </div>
        <div className="w-1/2">
          <InputNumberDistanceField
            clsTitle="w-[200px]"
            name="video"
            title="Mỗi video xem"
            classInputContainer="flex mt-4 items-center gap-2"
            classInput="!w-[100px] border outline-none  px-5 py-[3px] text-[#505050] rounded-md"
            span="Giây"
            classSpan="w-[40px] whitespace-nowrap"
          />
          <div className="flex items-center gap-7 mt-[16px]">
            <CheckboxField
              title="Tìm video theo từ khóa"
              name="searchKey"
              classLabel="block mb-0 text-sm font-medium text-gray-900 whitespace-nowrap"
            />
            <InputField
              name="keyVideo"
              classInputContainer="w-[255px]"
              placeholder="Nhập từ khóa vào đây"
            />
          </div>
          <InputNumberField
            checkbox
            clsTitle="w-[200px]"
            name="videoWatch"
            title="Lướt video trên watch"
            classInputContainer="flex mt-4 items-center gap-2"
            classInput="!w-[100px] border outline-none  px-5 py-[3px] text-[#505050] rounded-md"
            span="Video"
            classSpan="w-[40px] whitespace-nowrap"
          />
          <InputNumberDistanceField
            checkbox
            clsTitle="w-[200px]"
            name="likeVideo"
            title="Like video trên watch"
            classInputContainer="flex mt-4 items-center gap-2"
            classInput="!w-[100px] border outline-none  px-5 py-[3px] text-[#505050] rounded-md"
            span="Video"
            classSpan="w-[40px] whitespace-nowrap"
          />

          <InputNumberField
            checkbox
            clsTitle="w-[308px]"
            name="follow"
            title="Theo dõi ngẫu nhiên chủ đăng video"
            classInputContainer="flex mt-4 items-center gap-2"
            classInput="!w-[100px] border outline-none  px-5 py-[3px] text-[#505050] rounded-md"
            span="Video"
            classSpan="w-[40px] whitespace-nowrap"
          />
          <InputNumberField
            checkbox
            clsTitle="w-[308px]"
            name="share"
            title="Chia sẻ ngẫu nhiên về tường"
            classInputContainer="flex mt-4 items-center gap-2"
            classInput="!w-[100px] border outline-none  px-5 py-[3px] text-[#505050] rounded-md"
            span="Video"
            classSpan="w-[40px] whitespace-nowrap"
          />
        </div>
      </div>
      <Link to="#" className="!mt-4 block underline text-[#0004f4]">
        Vui lòng nhập Nội dung bình luận bài viết tại đây! Nhập mỗi nội dung 1 dòng...
      </Link>
    </form>
  )
}

export default FormInteractionIndividual
