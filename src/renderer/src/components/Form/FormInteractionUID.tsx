import CheckboxField from '../CustomField/CheckboxField'
import InputField from '../CustomField/InputField'
import InputNumberField from '../CustomField/InputNumberField'
import { LiaHandPointer } from 'react-icons/lia'
import { Dispatch, FC, SetStateAction } from 'react'
import {
  PropsHandleTextarea,
  PropsInNumberIndividual,
  PropsSwitchScript
} from '../Modal/ModalAddScript'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import TextAreaField from '../CustomField/TextAreaField'
import { FieldValues, UseFormRegister } from 'react-hook-form'

const FormInteractionUID: FC<{
  inNumber: PropsInNumberIndividual
  setInNumber: Dispatch<SetStateAction<PropsInNumberIndividual>>
  isShowTextarea: boolean
  register: UseFormRegister<FieldValues>
  setHandleTextarea: Dispatch<SetStateAction<PropsHandleTextarea>>
}> = ({ inNumber, setInNumber, isShowTextarea, register, setHandleTextarea }): JSX.Element => {
  const { t } = useTranslation()
  const handleSubmit = (): void => {
    console.log(123)
  }
  return (
    <div className="relative right-0 " style={{ animation: 'move_choiceList_right 0.3s linear' }}>
      <div className="border-b pb-3 pt-1">
        <CheckboxField
          title={t('interaction_by_UID')}
          name="interaction_by_UID"
          classLabel="block mb-0 h-[38px] mt-[16px] text-sm font-medium text-gray-900 whitespace-nowrap"
          classInputContainer="w-1/2"
          register={{ ...register('interaction_by_UID') }}
          defaultChecked
          onChange={(e: any) =>
            setHandleTextarea((pre) => ({ ...pre, comment_UID: e.target.checked }))
          }
        />
        <div className={`w-1/2 ${isShowTextarea ? '' : 'pointer-events-none opacity-60'}`}>
          <TextAreaField
            isRequire
            title={t('please_enter_UID')}
            placeholder="..."
            register={{ ...register('please_enter_UID', { required: true }) }}
            name="please_enter_UID"
            clsTextArea="text-[15px] p-5 "
            clsTextLabel="!text-sm font-medium"
          />
          {/* {errors.ai_title && (
                <p className="text-[13px] mt-[-3px] text-red-500 ">{t('require')}</p>
              )} */}
        </div>
      </div>
      <div className="py-3 flex items-center justify-between">
        <div className="w-fit">
          <div className="flex items-center mb-2 ">
            <CheckboxField
              name="like_post_of_friend"
              register={{ ...register('like_post_of_friend', { required: true }) }}
              title={t('like_post_of_friend')}
              defaultChecked
              classLabel=" text-sm"
              classInputContainer="w-[280px]"
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                name="like_post_of_friend_1"
                register={{ ...register('like_post_of_friend_1', { required: true }) }}
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    surfNews: { ...pre.surfNews, one: e.target.value }
                  }))
                }
                value={inNumber.surfNews.one}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                clsLabel="whitespace-pre-wrap"
                classInputContainer=" flex items-center justify-start"
              />{' '}
              <InputNumberField
                min={1}
                name="like_post_of_friend_2"
                register={{ ...register('like_post_of_friend_2', { required: true }) }}
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    surfNews: { ...pre.surfNews, two: e.target.value }
                  }))
                }
                value={inNumber.surfNews.two}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span={t('UID')}
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start"
              />
            </div>
          </div>{' '}
          <div className="flex items-center ">
            <CheckboxField
              name="comment_post_of_friend"
              register={{ ...register('comment_post_of_friend', { required: true }) }}
              title={t('comment_post_of_friend')}
              classLabel=" text-sm"
              defaultChecked
              classInputContainer="w-[280px]"
            />
            <div className="flex items-center">
              <InputNumberField
                min={1}
                max={100}
                name="comment_post_of_friend_1"
                register={{ ...register('comment_post_of_friend_1', { required: true }) }}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    surfNews: { ...pre.surfNews, one: e.target.value }
                  }))
                }
                value={inNumber.surfNews.one}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                clsLabel="whitespace-pre-wrap"
                classInputContainer=" flex items-center justify-start"
              />{' '}
              <InputNumberField
                min={1}
                name="comment_post_of_friend_2"
                register={{ ...register('comment_post_of_friend_2', { required: true }) }}
                max={100}
                onChange={(e: any) =>
                  setInNumber((pre) => ({
                    ...pre,
                    surfNews: { ...pre.surfNews, two: e.target.value }
                  }))
                }
                value={inNumber.surfNews.two}
                classInput="ml-2 !w-[70px] !px-2 !py-1"
                span={t('UID')}
                clsLabel="whitespace-pre-wrap"
                classInputContainer="w-full flex items-center justify-start"
              />
            </div>
          </div>
        </div>
      </div>{' '}
    </div>
  )
}

export default FormInteractionUID
