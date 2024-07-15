import { Link } from 'react-router-dom'
import CheckboxField from '../CustomField/CheckboxField'
import InputField from '../CustomField/InputField'
import InputNumberDistanceField from '../CustomField/InputNumberDistanceField'
import InputNumberField from '../CustomField/InputNumberField'
import ToggleSwitch from '../ToggleSwitch'
import { LiaHandPointer } from 'react-icons/lia'
import { Dispatch, FC, SetStateAction } from 'react'
import { PropsHandleTextarea, PropsInNumber, PropsSwitchScript } from '../Modal/ModalAddScript'
import { useTranslation } from 'react-i18next'
import TextAreaField from '../CustomField/TextAreaField'
import { FieldValues, UseFormRegister } from 'react-hook-form'

const FormInteractionGroup: FC<{
  inNumber: PropsInNumber
  setInNumber: Dispatch<SetStateAction<PropsInNumber>>
  switchScript: PropsSwitchScript
  setSwitchScript: Dispatch<SetStateAction<PropsSwitchScript>>
  register: UseFormRegister<FieldValues>
  setHandleTextarea: Dispatch<SetStateAction<PropsHandleTextarea>>
  isShowTextarea: boolean
}> = ({
  inNumber,
  setInNumber,
  switchScript,
  setSwitchScript,
  register,
  setHandleTextarea,
  isShowTextarea
}): JSX.Element => {
  const { t } = useTranslation()
  const handleSubmit = (): void => {
    console.log(123)
  }
  return (
    <div className=" " style={{ animation: 'move_choiceList_left 0.3s linear' }}>
      <div className="flex items-start ">
        <h3 className="text-blue-500 font-medium mr-4">{t('choice_interaction_group')}</h3>
        <div className="flex items-center mt-[2px]">
          <fieldset className="">
            <ToggleSwitch
              id="group"
              spanText={t('group_of_account')}
              checked={switchScript.add}
              circle
              name="by_group"
              clsLabel="!m-0 !mr-4"
              onChange={(e) => setSwitchScript((pre) => ({ ...pre, add: e.target.checked }))}
            />
            <ToggleSwitch
              id="id"
              spanText={t('group_id')}
              checked={switchScript.add}
              circle
              clsLabel="!m-0"
              name="by_group"
              onChange={(e) => setSwitchScript((pre) => ({ ...pre, add: e.target.checked }))}
            />
          </fieldset>
        </div>
      </div>
      <div className={`mt-2 w-1/2`}>
        <TextAreaField
          isRequire
          title={t('please_enter_id_here')}
          placeholder="..."
          register={{ ...register('please_enter_id_here', { required: true }) }}
          name="please_enter_id_here"
          clsTextArea="text-[15px] p-5 "
          clsTextLabel="!text-sm font-medium"
        />
        {/* {errors.ai_title && (
                <p className="text-[13px] mt-[-3px] text-red-500 ">{t('require')}</p>
              )} */}
      </div>
      <div className="pt-5 border-t flex items-center justify-between">
        <div className="w-full">
          <div className="flex items-center">
            <CheckboxField
              name="join_group"
              title={t('Join_group')}
              register={{ ...register('join_group') }}
              classInputContainer="w-[280px]"
              defaultChecked
              classLabel=" text-sm"
            />
            <InputNumberField
              min={1}
              name="join_group_1"
              max={100}
              onChange={(e: any) => setInNumber((pre) => ({ ...pre, joinG: e.target.value }))}
              value={inNumber.joinG}
              register={{ ...register('join_group_1') }}
              classInput="ml-2 !w-[70px] !px-2 !py-1"
              span={t('group')}
              clsLabel="whitespace-pre-wrap"
              classInputContainer=" flex items-center justify-start"
            />{' '}
          </div>
          <div className="flex items-center my-2">
            <CheckboxField
              name="like_comments_in_group"
              title={t('like_comments_in_group')}
              classLabel=" text-sm"
              defaultChecked
              register={{ ...register('like_comments_in_group') }}
              classInputContainer="w-[280px]"
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                name="like_comments_in_group_1"
                max={100}
                register={{ ...register('like_comments_in_group_1') }}
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
                name="like_comments_in_group_2"
                max={100}
                register={{ ...register('like_comments_in_group_2') }}
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
          </div>
          <div className=" ">
            <div className="flex items-center ">
              <CheckboxField
                name="comment_post_in_group"
                register={{ ...register('comment_post_in_group') }}
                title={t('comment_post_in_group')}
                classInputContainer="w-[280px]"
                classLabel="text-sm"
                defaultChecked
                onChange={(e: any) =>
                  setHandleTextarea((pre) => ({ ...pre, interaction_group: e.target.checked }))
                }
              />
              <InputNumberField
                min={1}
                name="comment_post_in_group_1"
                register={{ ...register('comment_post_in_group_1') }}
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    commentPG: { ...pre.commentPG, one: e.target.value }
                  }))
                }
                value={inNumber.commentPG.one}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                clsLabel="whitespace-pre-wrap"
                classInputContainer=" flex items-center justify-start"
              />{' '}
              <InputNumberField
                min={1}
                name="comment_post_in_group_2"
                register={{ ...register('comment_post_in_group_2') }}
                max={100}
                onChange={(e: any) => setInNumber((pre) => ({ ...pre, commentPG: e.target.value }))}
                value={inNumber.commentPG.two}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span={t('post')}
                clsLabel="whitespace-pre-wrap"
                classInputContainer=" flex items-center justify-start"
              />{' '}
            </div>
            <div className={`mt-4 ${isShowTextarea ? '' : 'pointer-events-none opacity-60'}`}>
              <TextAreaField
                isRequire
                title={t('please_enter_comment_post_here')}
                placeholder="..."
                register={{ ...register('please_enter_comment_post_here', { required: true }) }}
                name="please_enter_comment_post_here"
                clsTextArea="text-[15px] p-5  "
                clsTextLabel="!text-sm font-medium"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormInteractionGroup
