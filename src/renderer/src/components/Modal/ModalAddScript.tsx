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
import FormInteractionGroup from '../Form/FormInteractionGroup'
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
                <FormInteractionGroup
                  inNumber={inNumber}
                  setInNumber={setInNumber}
                  switchScript={switchScript}
                  setSwitchScript={setSwitchScript}
                />
              )}
              {choiceList === 1 && (
                <FormInteractionIndividual
                  inNumber={inNumberIndividual}
                  setInNumber={setInNumberIndividual}
                />
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
