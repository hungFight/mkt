import { Modal } from 'flowbite-react'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import ButtonFlowbite from '../ButtonFlowbite'
import InputField from '../CustomField/InputField'
import SelectField from '../CustomField/SelectField'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import ToggleSwitch from '../ToggleSwitch'
import ButtonC from '../CustomField/ButtonC'
import InputNumberField from '../CustomField/InputNumberField'
import CheckboxField from '../CustomField/CheckboxField'
import FormInteractionGroup from '../Form/FormInteractionGroup'
import FormInteractionIndividual from '../Form/FormInteractionIndividual'
import FormInteractionFriend from '../Form/FormInteractionPage'
import FormInteractionUID from '../Form/FormInteractionUID'
import FormInteractionUpdateInfo from '../Form/FormInteractionUpdateInfo'
import ModalConfirm from './ModalConfirm'
import { GoTrash } from 'react-icons/go'
import { ToastContainer, toast } from 'react-toastify'
import ModalRenderAI from './ModalRenderAI'

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

  likePG: {
    one: number
    two: number
  }
  commentPG: {
    one: number
    two: number
  }
}
export interface PropsInNumberIndividual {
  eachVideo: {
    one: number
    two: number
  }
  surfNews: {
    one: number
    two: number
  }
  surfStory: {
    one: number
    two: number
  }
  likeNews: {
    one: number
    two: number
  }
  shareRandomPost: {
    one: number
    two: number
  }
  surfVideoOnWatch: {
    one: number
    two: number
  }
  shareRandom: {
    one: number
    two: number
  }
  commentNews: {
    one: number
    two: number
  }
}
export interface PropsHandleTextarea {
  comment_post_news: boolean
  comment_UID: boolean
  interaction_group: boolean
  comment_on_page: boolean
}
const ModalAddScript: FC<ModalTrashAccountProps> = ({ isShow, setIsShow }) => {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()
  const [isShowModalConfirm, setIsShowModalConfirm] = useState<boolean>(false)
  const [isShowModalRenderAI, setIsShowModalRenderAI] = useState<boolean>(false)
  const [switchScript, setSwitchScript] = useState<PropsSwitchScript>({ add: false, edit: false }) // for group interaction
  const [choiceList, setChoiceList] = useState<number>(1)

  const [rootCheck, setRootCheck] = useState({
    totalAction: 1,
    spaceTwo: { one: 1, two: 1 }
  })
  const [inNumber, setInNumber] = useState({
    // for group interaction
    joinG: 1,
    likePG: { one: 1, two: 1 },
    commentPG: { one: 1, two: 1 }
  })
  const [inNumberIndividual, setInNumberIndividual] = useState({
    // for group interaction
    eachVideo: { one: 1, two: 1 },
    surfNews: { one: 1, two: 1 },
    surfStory: { one: 1, two: 1 },
    likeNews: { one: 1, two: 1 },
    shareRandomPost: { one: 1, two: 1 },
    surfVideoOnWatch: { one: 1, two: 1 },
    shareRandom: { one: 1, two: 1 },
    commentNews: { one: 1, two: 1 }
  })
  const [handleTextarea, setHandleTextarea] = useState<PropsHandleTextarea>({
    comment_post_news: true,
    comment_UID: true,
    interaction_group: true,
    comment_on_page: true
  })
  const handleClose = (): void => setIsShow && setIsShow(false)
  const onSubmit = (data): void => {
    console.log(data, 'Hello data')

    // setIsShow && setIsShow(false)
    // toast.success('Thêm tài khoản thành công')
  }
  const datList = [
    { id: 1, name: t('personal_interaction') },
    { id: 2, name: t('interaction_by_UID') },
    { id: 3, name: t('group_interaction') },
    { id: 4, name: t('page_interaction') },
    { id: 5, name: t('update_account_info') }
  ]
  const handleDeleteScript = () => {
    setIsShowModalConfirm(true)
  }
  const handleDeleteScriptConfirm = (v) => {
    if (v) toast.success('delete_success')
    setIsShowModalConfirm(false)
  }
  return (
    <Modal show={isShow} onClose={handleClose} className="modal-interactive modal relative">
      <Modal.Header className="px-5 py-3 absolute top-0 left-0 w-full bg-white z-50">
        {t('interactive_config')}
      </Modal.Header>
      <form
        className="overflow-auto mt-[56px]"
        onSubmit={handleSubmit(onSubmit)}
        onChange={(e: any) => console.log(e.target.checked, 'eeee')}
      >
        <Modal.Body>
          <div className="space-y-3 mb-3 overflow-auto h-full">
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
                    title={t('render_ai')}
                    className="bg-blue-500 p-[10px] ml-2 border-[#b1b1b1]"
                    onClick={() => setIsShowModalRenderAI(true)}
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
                  <ButtonC
                    title={t('delete_script')}
                    className="bg-red-500 p-[10px] ml-2"
                    onClick={handleDeleteScript}
                  />
                </div>
              </div>
            </div>
            <div className=" py-4 pt-[14px] border-b">
              <div className="flex items-center w-fit">
                <InputNumberField
                  min={1}
                  name="total_act"
                  max={100}
                  register={{ ...register('total_act') }}
                  title={t('total_act')}
                  onChange={(e: any) =>
                    setRootCheck((pre) => ({ ...pre, totalAction: e.target.value }))
                  }
                  value={rootCheck.totalAction}
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
                  name="interaction_2_1"
                  register={{ ...register('interaction_2_1') }}
                  max={100}
                  title={t('interaction_2')}
                  onChange={(e: any) =>
                    setRootCheck((pre) => ({
                      ...pre,
                      spaceTwo: { ...rootCheck.spaceTwo, one: e.target.value }
                    }))
                  }
                  value={rootCheck.spaceTwo.one}
                  classInput="ml-2 !w-[70px] !px-2 !py-1"
                  clsTitle="w-[200px] text-[15px]"
                  clsLabel="whitespace-pre-wrap"
                  classInputContainer="w-full flex items-center justify-start mb-2"
                />{' '}
                <InputNumberField
                  min={1}
                  name="interaction_2_2"
                  max={100}
                  register={{ ...register('interaction_2_2') }}
                  onChange={(e: any) =>
                    setRootCheck((pre) => ({
                      ...pre,
                      spaceTwo: { ...rootCheck.spaceTwo, two: e.target.value }
                    }))
                  }
                  value={rootCheck.spaceTwo.two}
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
                  register={{ ...register('no_same_action') }}
                  name="no_same_action"
                  defaultChecked
                  title={t('no_same_action')}
                  classLabel=" text-sm"
                />
                <CheckboxField
                  register={{ ...register('no_yes_action') }}
                  name="no_yes_action"
                  classInputContainer="my-2"
                  defaultChecked
                  title={t('no_yes_action')}
                  classLabel=" text-sm"
                />{' '}
                <CheckboxField
                  register={{ ...register('auto_created_by_chatGPT') }}
                  name="auto_created_by_chatGPT"
                  title={t('auto_created_by_chatGPT')}
                  defaultChecked
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
              <div className="w-full p-2 px-3 rounded-[5px] bg-[rgb(249_249_249_/_34%)] border h-auto mt-4 overflow-hidden">
                <div className={` ${choiceList === 1 ? 'block' : 'hidden'}`}>
                  <FormInteractionIndividual
                    inNumber={inNumberIndividual}
                    setInNumber={setInNumberIndividual}
                    register={register}
                    setHandleTextarea={setHandleTextarea}
                    isShowTextarea={handleTextarea.comment_post_news}
                  />
                </div>{' '}
                <div className={` ${choiceList === 2 ? 'block' : 'hidden'}`}>
                  <FormInteractionUID
                    inNumber={inNumberIndividual}
                    setInNumber={setInNumberIndividual}
                    register={register}
                    setHandleTextarea={setHandleTextarea}
                    isShowTextarea={handleTextarea.comment_UID}
                  />
                </div>{' '}
                <div className={` ${choiceList === 3 ? 'block' : 'hidden'}`}>
                  <FormInteractionGroup
                    inNumber={inNumber}
                    setInNumber={setInNumber}
                    switchScript={switchScript}
                    setSwitchScript={setSwitchScript}
                    register={register}
                    setHandleTextarea={setHandleTextarea}
                    isShowTextarea={handleTextarea.interaction_group}
                  />
                </div>{' '}
                <div className={` ${choiceList === 4 ? 'block' : 'hidden'}`}>
                  <FormInteractionFriend
                    inNumber={inNumberIndividual}
                    setInNumber={setInNumberIndividual}
                    switchScript={switchScript}
                    setSwitchScript={setSwitchScript}
                    register={register}
                    setHandleTextarea={setHandleTextarea}
                    isShowTextarea={handleTextarea.comment_on_page}
                  />
                </div>{' '}
                <div className={` ${choiceList === 5 ? 'block' : 'hidden'}`}>
                  <FormInteractionUpdateInfo />
                </div>
              </div>
            </div>
            {isShowModalConfirm && (
              <ModalConfirm
                icon={<GoTrash />}
                titleLeftB={t('yes')}
                titleRightB={t('no')}
                title={t('is_delete_this_script')}
                onClick={handleDeleteScriptConfirm}
              />
            )}
            {isShowModalRenderAI && (
              <ModalRenderAI
                title={t('Tạo bình luận cho bài viết')}
                setIsShow={setIsShowModalRenderAI}
                isShow={isShowModalRenderAI}
                Tags={
                  <div className="flex items-center">
                    <InputNumberField
                      min={1}
                      name="stream"
                      max={100}
                      title={t('quantity_created')}
                      classInput="ml-2 !w-[70px] !px-2 !py-1"
                      clsLabel="whitespace-pre-wrap"
                      clsTitle="w-[155px]"
                      classInputContainer="w-full flex items-center justify-start"
                    />
                  </div>
                }
              />
            )}
            <Modal.Footer className="flex justify-end gap-3 px-5 py-3">
              <ButtonFlowbite type="submit" color="blue">
                {t('add')}
              </ButtonFlowbite>
              <ButtonFlowbite onClick={handleClose} className="bg-red-500">
                {t('cancel')}
              </ButtonFlowbite>
            </Modal.Footer>
          </div>
          <ToastContainer />
        </Modal.Body>
      </form>
    </Modal>
  )
}

export default ModalAddScript
