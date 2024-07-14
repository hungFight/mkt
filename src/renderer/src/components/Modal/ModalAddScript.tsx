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
import FormInteractionIndividual from '../Form/FormInteractionIndividual'

interface ModalTrashAccountProps {
  isShow: boolean
  setIsShow?: Dispatch<SetStateAction<boolean>>
}
export interface PropsSwitchScript {
  add: boolean
  edit: boolean
}
export interface PropsInNumber {
  joinG: number
  outG: {
    one: number
    two: number
  }
  outGW: {
    one: number
    two: number
  }
  answerPG: {
    one: number
    two: number
  }
  likePG: {
    one: number
    two: number
  }
  likeP: {
    one: number
    two: number
  }
  commentPG: number
  friendG: {
    one: number
    two: number
    three: number
    four: number
  }
  inviteG: {
    one: number
    two: number
    three: number
    four: number
  }
}

const ModalAddScript: FC<ModalTrashAccountProps> = ({ isShow, setIsShow }) => {
  const { t } = useTranslation()
  const { register, handleSubmit } = useForm()
  const [switchScript, setSwitchScript] = useState<PropsSwitchScript>({ add: false, edit: false }) // for group interaction
  const [choiceList, setChoiceList] = useState<number>(1)
  const [inNumber, setInNumber] = useState({
    // for group interaction
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
    { id: 1, name: t('personal_interaction') },
    { id: 2, name: t('friend_interaction') },
    { id: 3, name: t('group_interaction') }
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
                className={`flex items-center mt-1 ${
                  !switchScript.add ? 'opacity-60 select-none pointer-events-none' : ''
                }`}
              >
                <InputField
                  name="script"
                  placeholder={t('name_script')}
                  inputClassName="border-blue-500 border !py-2"
                />
                <ButtonC
                  title={t('add_script')}
                  className="bg-blue-500 p-[10px] ml-2 border-[#b1b1b1]"
                />
              </div>
            </div>
            <div className={``}>
              <ToggleSwitch
                spanText={t('edit_current_script')}
                checked={switchScript.edit}
                onChange={(e) => setSwitchScript((pre) => ({ ...pre, edit: e.target.checked }))}
              />
              <div
                className={`flex items-center mt-1 ${
                  !switchScript.edit ? 'opacity-60 select-none pointer-events-none' : ''
                }`}
              >
                <SelectField
                  name="script"
                  placeholder={t('script')}
                  parenSelect="w-[200px] rounded-[5px] border border-blue-500"
                />
                <ButtonC title={t('delete_script')} className="bg-red-500 p-[10px] ml-2" />
              </div>
            </div>
          </div>
          <div className=" py-4 pt-[14px] border-b">
            <div className="flex items-center w-fit">
              <InputNumberField
                min={1}
                name="stream"
                max={100}
                title={t('total_act')}
                // onChange={(e: any) => setInNumber(e.target.value)}
                // value={inNumber}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span={t('action')}
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
                title={t('interaction_2')}
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
                span={t('second')}
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start mb-2"
              />{' '}
            </div>
          </div>
          <div className="mt-2 py-2">
            <div className=" w-fit">
              <CheckboxField
                name="not_same"
                title={t('no_same_action')}
                classInputContainer="mb-2"
                classLabel=" text-sm"
              />
              <CheckboxField name="not_same" title={t('no_yes_action')} classLabel=" text-sm" />
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
                <FormInteractionIndividual
                  inNumber={inNumber}
                  setInNumber={setInNumber}
                  switchScript={switchScript}
                  setSwitchScript={setSwitchScript}
                />
              )}
              {choiceList === 1 && (
                <div
                  className="relative right-0 "
                  style={{ animation: 'move_choiceList_right 0.3s linear' }}
                >
                  <div className="flex items-center border-b pb-3 pt-1">
                    <CheckboxField
                      name="not_same"
                      title={t('read_noti')}
                      classInputContainer="w-[280px]"
                      classLabel=" text-sm"
                    />

                    <div className="flex items-center">
                      <InputNumberField
                        min={1}
                        name="stream"
                        max={100}
                        title={t('each_video_watch')}
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
                        span={t('second')}
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
                          title={t('surf_blog')}
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
                            span={t('second')}
                            clsLabel="whitespace-pre-wrap"
                            classInputContainer="w-full flex items-center justify-start"
                          />
                        </div>
                      </div>{' '}
                      <div className="flex items-center my-2">
                        <CheckboxField
                          name="not_same"
                          title={t('surf_story')}
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
                          title={t('like_post_news')}
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
                            span={t('post')}
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
                          title={t('share_post_random_wall')}
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
                            span={t('Bài viết')}
                            clsLabel="whitespace-pre-wrap"
                            classInputContainer="w-full flex items-center justify-start"
                          />
                        </div>
                      </div>
                      <div className="flex items-center my-2">
                        <CheckboxField
                          name="not_same"
                          title={t('surf_story_on_watch')}
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
                          title={t('share_random_wall')}
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
                          title={t('comment_post_news')}
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
                            span={t('post')}
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
                          {t('please_enter_content_each_line')}
                        </a>
                      </div>
                      <div className="flex items-center my-2">
                        <CheckboxField
                          name="not_same"
                          title={t('find_video_by_keyword')}
                          classInputContainer="w-[280px]"
                          classLabel="text-sm"
                        />
                        <div className="flex items-center">
                          <InputField
                            name="keyword_video"
                            placeholder={t('enter_keyword_into')}
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
