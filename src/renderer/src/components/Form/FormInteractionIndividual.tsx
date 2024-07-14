import { Link } from 'react-router-dom'
import CheckboxField from '../CustomField/CheckboxField'
import InputField from '../CustomField/InputField'
import InputNumberDistanceField from '../CustomField/InputNumberDistanceField'
import InputNumberField from '../CustomField/InputNumberField'
import ToggleSwitch from '../ToggleSwitch'
import { LiaHandPointer } from 'react-icons/lia'
import { Dispatch, FC, SetStateAction } from 'react'
import { PropsInNumber, PropsSwitchScript } from '../Modal/ModalAddScript'
import { useTranslation } from 'react-i18next'

const FormInteractionIndividual: FC<{
  inNumber: PropsInNumber
  setInNumber: Dispatch<SetStateAction<PropsInNumber>>
  switchScript: PropsSwitchScript
  setSwitchScript: Dispatch<SetStateAction<PropsSwitchScript>>
}> = ({ inNumber, setInNumber, switchScript, setSwitchScript }): JSX.Element => {
  const { t } = useTranslation()
  const handleSubmit = (): void => {
    console.log(123)
  }
  return (
    <form className="relative left-0 " style={{ animation: 'move_choiceList_left 0.3s linear' }}>
      <div className="flex items-start ">
        <h3 className="text-blue-500 font-medium mr-4">Lựa chọn tương tác theo nhóm</h3>
        <div className="flex items-center mt-[2px]">
          <fieldset className="">
            <ToggleSwitch
              id="group"
              spanText={t('Nhóm của tài khoản')}
              checked={switchScript.add}
              circle
              name="by_group"
              clsLabel="!m-0 !mr-4"
              onChange={(e) => setSwitchScript((pre) => ({ ...pre, add: e.target.checked }))}
            />
            <ToggleSwitch
              id="id"
              spanText={t('Theo ID nhóm')}
              checked={switchScript.add}
              circle
              clsLabel="!m-0"
              name="by_group"
              onChange={(e) => setSwitchScript((pre) => ({ ...pre, add: e.target.checked }))}
            />
          </fieldset>
        </div>
      </div>
      <a
        href="#"
        className="font-medium text-sm flex items-center mt-[7px] mb-3 text-blue-500 hover:underline"
      >
        <div className="rotate-[85deg] text-[20px] mr-1">
          <LiaHandPointer />
        </div>{' '}
        Vui lòng nhập ID tại đây
      </a>
      <div className="py-3 border-t flex items-center justify-between">
        <div className="w-fit">
          <div className="flex items-center">
            <CheckboxField
              name="not_same"
              title="Tham gia nhóm"
              classInputContainer="w-[280px]"
              classLabel=" text-sm"
            />
            <InputNumberField
              min={1}
              name="stream"
              max={100}
              onChange={(e: any) => setInNumber((pre) => ({ ...pre, joinG: e.target.value }))}
              value={inNumber.joinG}
              classInput="ml-2 !w-[70px] !px-2 !py-1"
              span="Nhóm"
              clsLabel="whitespace-pre-wrap"
              classInputContainer=" flex items-center justify-start"
            />{' '}
          </div>
          <div className="flex items-center my-2">
            <CheckboxField
              name="not_same"
              title="Rời nhóm"
              classLabel=" text-sm"
              classInputContainer="w-[280px]"
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    outG: { ...pre.outG, one: e.target.value }
                  }))
                }
                value={inNumber.outG.one}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                clsLabel="whitespace-pre-wrap"
                classInputContainer=" flex items-center justify-start"
              />{' '}
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    outG: { ...pre.outG, two: e.target.value }
                  }))
                }
                value={inNumber.outG.two}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span="Nhóm"
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start"
              />
            </div>
          </div>
          <div className="flex items-center">
            <CheckboxField
              name="not_same"
              title="Rời các nhóm yêu cầu chờ duyệt"
              classLabel=" text-sm"
              classInputContainer="w-[280px]"
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    outGW: { ...pre.outGW, one: e.target.value }
                  }))
                }
                value={inNumber.outGW.one}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                clsLabel="whitespace-pre-wrap"
                classInputContainer=" flex items-center justify-start"
              />{' '}
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    outGW: { ...pre.outGW, two: e.target.value }
                  }))
                }
                value={inNumber.outGW.two}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span="Nhóm"
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start"
              />
            </div>
          </div>{' '}
        </div>
        <div className="w-[0.5px] border-r h-[145px]"></div>
        <div className="w-[50%] flex flex-wrap">
          <div className="flex items-center ">
            <CheckboxField
              name="not_same"
              title="Trả lời bình luân bài viết trong nhóm"
              classLabel=" text-sm"
              classInputContainer="w-[280px]"
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    answerPG: { ...pre.answerPG, one: e.target.value }
                  }))
                }
                value={inNumber.answerPG.one}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                clsLabel="whitespace-pre-wrap"
                classInputContainer=" flex items-center justify-start"
              />{' '}
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    answerPG: { ...pre.answerPG, two: e.target.value }
                  }))
                }
                value={inNumber.answerPG.two}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span="Bài viết"
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start"
              />
            </div>
          </div>
          <div className="flex items-center my-2">
            <CheckboxField
              name="not_same"
              title="Thích bình luận bài viết trong nhóm"
              classLabel=" text-sm"
              classInputContainer="w-[280px]"
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    likePG: { ...pre.likePG, one: e.target.value }
                  }))
                }
                value={inNumber.likePG.one}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                clsLabel="whitespace-pre-wrap"
                classInputContainer=" flex items-center justify-start"
              />{' '}
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    likePG: { ...pre.likePG, two: e.target.value }
                  }))
                }
                value={inNumber.likePG.two}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span="Bài viết"
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start"
              />
            </div>
          </div>
          <div className="flex items-center">
            <CheckboxField
              name="not_same"
              title="Thích bài viết trong nhóm"
              classLabel=" text-sm"
              classInputContainer="w-[280px]"
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    likeP: { ...pre.likeP, one: e.target.value }
                  }))
                }
                value={inNumber.likeP.one}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                clsLabel="whitespace-pre-wrap"
                classInputContainer=" flex items-center justify-start"
              />{' '}
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    likeP: { ...pre.likeP, two: e.target.value }
                  }))
                }
                value={inNumber.likeP.two}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span="Nhóm"
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start"
              />
            </div>
          </div>
        </div>
      </div>{' '}
      <div className="pt-5 border-t flex items-center justify-between">
        <div className="w-full">
          <div className="flex items-center">
            <CheckboxField
              name="not_same"
              title="Bình luận bài viết trong nhóm"
              classInputContainer="w-[280px]"
              classLabel=" text-sm"
            />
            <InputNumberField
              min={1}
              name="stream"
              max={100}
              onChange={(e: any) => setInNumber((pre) => ({ ...pre, commentPG: e.target.value }))}
              value={inNumber.commentPG}
              classInput="ml-2 !w-[70px] !px-2 !py-1"
              span="Bài viết"
              clsLabel="whitespace-pre-wrap"
              classInputContainer=" flex items-center justify-start"
            />{' '}
            <a
              href=""
              className="font-medium text-sm flex items-center ml-3 text-blue-500 hover:underline"
            >
              <div className="rotate-[85deg] text-[20px] mr-1 text-red-500">
                <LiaHandPointer />
              </div>{' '}
              Vui lòng nhập nội dung bình luân nhóm tại đây. Mỗi nội dung 1
            </a>
          </div>
          <div className="flex items-center my-2">
            <CheckboxField
              name="not_same"
              title="Kết bạn với thành viên trong nhóm"
              classInputContainer="w-[280px]"
              classLabel="text-sm"
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    friendG: { ...pre.friendG, one: e.target.value }
                  }))
                }
                value={inNumber.friendG.one}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                clsLabel="whitespace-pre-wrap"
                classInputContainer=" flex items-center justify-start"
              />{' '}
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    friendG: { ...pre.friendG, two: e.target.value }
                  }))
                }
                value={inNumber.friendG.two}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span="Nhóm"
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start"
              />
            </div>
            <div className="flex items-center ml-5">
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                title="Mỗi nhóm"
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    friendG: { ...pre.friendG, three: e.target.value }
                  }))
                }
                value={inNumber.friendG.three}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                clsLabel=""
                classInputContainer="w-fit   flex items-center justify-start"
              />{' '}
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    friendG: { ...pre.friendG, four: e.target.value }
                  }))
                }
                value={inNumber.friendG.four}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span="Thành viên"
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start"
              />
            </div>
          </div>
          <div className="flex items-center  w-full">
            <CheckboxField
              name="not_same"
              title="Mời bạn bè vào trong nhóm"
              classLabel=" text-sm"
              classInputContainer="w-[280px]"
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    inviteG: { ...pre.inviteG, one: e.target.value }
                  }))
                }
                value={inNumber.inviteG.one}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                clsLabel="whitespace-pre-wrap"
                classInputContainer=" flex items-center justify-start"
              />{' '}
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    inviteG: { ...pre.inviteG, two: e.target.value }
                  }))
                }
                value={inNumber.inviteG.two}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span="Nhóm"
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start"
              />
            </div>
            <div className="flex items-center ml-5">
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                title="Mỗi nhóm"
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    inviteG: { ...pre.inviteG, three: e.target.value }
                  }))
                }
                value={inNumber.inviteG.three}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                clsLabel=""
                classInputContainer="w-fit   flex items-center justify-start"
              />{' '}
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    inviteG: { ...pre.inviteG, four: e.target.value }
                  }))
                }
                value={inNumber.inviteG.four}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span="Bạn bè"
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default FormInteractionIndividual
