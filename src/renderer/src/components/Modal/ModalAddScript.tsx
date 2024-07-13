import { configTableAddAccount } from '@renderer/config/configTable'
import { Modal } from 'flowbite-react'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { toast } from 'react-toastify'
import ButtonFlowbite from '../ButtonFlowbite'
import InputField from '../CustomField/InputField'
import SelectField from '../CustomField/SelectField'
import TextAreaField from '../CustomField/TextAreaField'
import MantineTableCustom from '../MantineTableCustom'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import ToggleSwitch from '../ToggleSwitch'
import ButtonC from '../CustomField/ButtonC'
import InputNumberField from '../CustomField/InputNumberField'
import CheckboxField from '../CustomField/CheckboxField'
import { LiaHandPointer } from 'react-icons/lia'

interface ModalTrashAccountProps {
  isShow: boolean
  setIsShow?: Dispatch<SetStateAction<boolean>>
}

const ModalAddScript: FC<ModalTrashAccountProps> = ({ isShow, setIsShow }) => {
  const { t } = useTranslation()
  const { register, handleSubmit } = useForm()
  const [switchScript, setSwitchScript] = useState({ add: false, edit: false })
  const [choiceList, setChoiceList] = useState<number>(1)
  const [inNumber, setInNumber] = useState({
    joinG: 1,
    outG: { one: 1, two: 1 },
    outGW: { one: 1, two: 1 },
    answerPG: { one: 1, two: 1 },
    likePG: { one: 1, two: 1 },
    likeP: { one: 1, two: 1 },
    commentPG: 1,
    friendG: { one: 1, two: 1, three: 1, four: 1 },
    inviteG: { one: 1, two: 1, three: 1, four: 1 }
  })
  const handleClose = (): void => setIsShow && setIsShow(false)
  const onSubmit = (data): void => {
    // setIsShow && setIsShow(false)
    // toast.success('Thêm tài khoản thành công')
  }
  const datList = [
    { id: 1, name: 'Tương tác cá nhân' },
    { id: 2, name: 'Tương tác bạn bè' },
    { id: 3, name: 'Tương tác nhóm' },
  ]
  return (
    <Modal show={isShow} onClose={handleClose} className="modal-interactive modal">
      <Modal.Header className="px-5 py-3">{t('interactive_config')}</Modal.Header>
      <Modal.Body>
        <form className="space-y-3 mb-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center pb-4 border-b ">
            <div className="mr-4">
              <ToggleSwitch
                spanText={t('add_new_script')}
                checked={switchScript.add}
                onChange={(e) => setSwitchScript((pre) => ({ ...pre, add: e.target.checked }))}
              />
              <div
                className={`flex items-center ${
                  !switchScript.add ? 'opacity-60 select-none pointer-events-none' : ''
                }`}
              >
                <InputField name="script" placeholder={t('name_script')} />
                <ButtonC title={t('add_script')} className="bg-blue-500 p-[11px] ml-2" />
              </div>
            </div>
            <div className={``}>
              <ToggleSwitch
                spanText={t('edit_current_script')}
                checked={switchScript.edit}
                onChange={(e) => setSwitchScript((pre) => ({ ...pre, edit: e.target.checked }))}
              />
              <div
                className={`flex items-center ${
                  !switchScript.edit ? 'opacity-60 select-none pointer-events-none' : ''
                }`}
              >
                <SelectField
                  name="script"
                  placeholder={t('script')}
                  parenSelect="w-[200px] rounded-[5px] border border-[#b1b1b1]"
                />
                <ButtonC title={t('delete_script')} className="bg-red-500 p-[11px] ml-2" />
              </div>
            </div>
          </div>
          <div className=" py-4 pt-[14px] border-b">
            <div className="flex items-center w-fit">
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                title="Tổng số hành động thao tác"
                // onChange={(e: any) => setInNumber(e.target.value)}
                // value={inNumber}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span="Hành động"
                clsTitle="w-[200px] "
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start mb-2"
              />{' '}
            </div>{' '}
            <div className="flex items-center justify-start w-fit">
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                title="Khoảng cách 2 lần tương tác"
                // onChange={(e: any) => setInNumber(e.target.value)}
                // value={inNumber}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                clsTitle="w-[200px] text-[15px]"
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start mb-2"
              />{' '}
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                // onChange={(e: any) => setInNumber(e.target.value)}
                // value={inNumber}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span="Giây"
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start mb-2"
              />{' '}
            </div>
          </div>
          <div className="mt-2 py-2">
            <div className=" w-fit">
              <CheckboxField
                name="not_same"
                title="Không tương tác trùng hành động"
                classInputContainer="mb-2"
                classLabel=" text-sm"
              />
              <CheckboxField
                name="not_same"
                title="Chọn/Bỏ tất cả hành đồng"
                classLabel=" text-sm"
              />
            </div>{' '}
          </div>
          <div className="w-full">
            <div className="border-b h-fit flex items-center">
              {datList.map((r) => (
                <p
                  key={r.id}
                  className={`text-sm p-3 mx-1 border-b-[2px] ${
                    choiceList === r.id ? 'border-blue-500 text-blue-500' : 'hover:text-[#4f5051]'
                  } pb-5 cursor-pointer font-normal`}
                  onClick={() => setChoiceList(r.id)}
                >
                  {r.name}
                </p>
              ))}
            </div>
            <div className="w-full p-2 px-3 rounded-[5px] bg-[rgb(249_249_249_/_34%)] border h-[400px] mt-4 overflow-hidden">
              {choiceList === 3 && (
                <div
                  className="relative left-0 "
                  style={{ animation: 'move_choiceList_left 0.3s linear' }}
                >
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
                          onChange={(e) =>
                            setSwitchScript((pre) => ({ ...pre, add: e.target.checked }))
                          }
                        />
                        <ToggleSwitch
                          id="id"
                          spanText={t('Theo ID nhóm')}
                          checked={switchScript.add}
                          circle
                          clsLabel="!m-0"
                          name="by_group"
                          onChange={(e) =>
                            setSwitchScript((pre) => ({ ...pre, add: e.target.checked }))
                          }
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
                          onChange={(e: any) =>
                            setInNumber((pre) => ({ ...pre, joinG: e.target.value }))
                          }
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
                          onChange={(e: any) =>
                            setInNumber((pre) => ({ ...pre, commentPG: e.target.value }))
                          }
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
                </div>
              )}
              {choiceList === 1 && (
                <div
                  className="relative right-0 "
                  style={{ animation: 'move_choiceList_right 0.3s linear' }}
                >
                  <div className="flex items-center border-b pb-3 pt-1">
                    <CheckboxField
                      name="not_same"
                      title="Đọc thông báo"
                      classInputContainer="w-[280px]"
                      classLabel=" text-sm"
                    />

                    <div className="flex items-center">
                      <InputNumberField
                        min={1}
                        name="stream"
                        max={100}
                        title="Mỗi video xem"
                        onChange={(e: any) =>
                          setInNumber((pre) => ({
                            ...pre,
                            outGW: { ...pre.outGW, one: e.target.value }
                          }))
                        }
                        value={inNumber.outGW.one}
                        classInput="ml-2 !w-[70px] !px-2 !py-1"
                        clsLabel="whitespace-pre-wrap"
                        clsTitle="w-max"
                        classInputContainer=" flex items-center justify-start ml-2"
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
                        span="Giây"
                        clsLabel="whitespace-pre-wrap"
                        classInputContainer="w-full flex items-center justify-start"
                      />
                    </div>
                  </div>
                  <div className="py-3 flex items-center justify-between">
                    <div className="w-fit">
                      <div className="flex items-center ">
                        <CheckboxField
                          name="not_same"
                          title="Lướt bảng tin"
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
                            span="Giây"
                            clsLabel="whitespace-pre-wrap"
                            classInputContainer="w-full flex items-center justify-start"
                          />
                        </div>
                      </div>{' '}
                      <div className="flex items-center my-2">
                        <CheckboxField
                          name="not_same"
                          title="Lướt story"
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
                            span="Story"
                            clsLabel="whitespace-pre-wrap"
                            classInputContainer="w-full flex items-center justify-start"
                          />
                        </div>
                      </div>
                      <div className="flex items-center ">
                        <CheckboxField
                          name="not_same"
                          title="Thích bài viết bảng tin"
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
                    </div>
                    <div className="w-[0.5px] border-r h-[145px]"></div>
                    <div className="w-[50%] flex flex-wrap">
                      <div className="flex items-center">
                        <CheckboxField
                          name="not_same"
                          title="Chia sẻ bài viết ngẫu nhiên về tường"
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
                            span="Bài viết"
                            clsLabel="whitespace-pre-wrap"
                            classInputContainer="w-full flex items-center justify-start"
                          />
                        </div>
                      </div>
                      <div className="flex items-center my-2">
                        <CheckboxField
                          name="not_same"
                          title="Lướt video trên Watch"
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
                            span="Video"
                            clsLabel="whitespace-pre-wrap"
                            classInputContainer="w-full flex items-center justify-start"
                          />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <CheckboxField
                          name="not_same"
                          title="Chia sẽ ngẫu nhiên về tường"
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
                            span="Video"
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
                          title="Bình luận bài viết bảng tin"
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
                          title="Tìm video theo từ khoá"
                          classInputContainer="w-[280px]"
                          classLabel="text-sm"
                        />
                        <div className="flex items-center">
                          <InputField
                            name="keyword_video"
                            placeholder="Nhập từ khoá vào đây"
                            classInputContainer="ml-[8px]"
                            inputClassName="!py-[5px] px-[10px] hover:shadow-[0_0_2px_#00a6ff] border border-[#00a6ff] change_placeholder_inter"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="flex justify-end gap-3 px-5 py-3">
        <ButtonFlowbite type="submit" color="blue">
          {t('add')}
        </ButtonFlowbite>
        <ButtonFlowbite onClick={handleClose} className="bg-red-500">
          {t('cancel')}
        </ButtonFlowbite>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalAddScript
