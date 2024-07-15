import CheckboxField from '../CustomField/CheckboxField'
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
import ToggleSwitch from '../ToggleSwitch'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import TextAreaField from '../CustomField/TextAreaField'

const FormInteractionPage: FC<{
  inNumber: PropsInNumberIndividual
  setInNumber: Dispatch<SetStateAction<PropsInNumberIndividual>>
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
    <form className="relative left-0 " style={{ animation: 'move_choiceList_left 0.3s linear' }}>
      <div className="flex items-start ">
        <h3 className="text-blue-500 font-medium mr-4">{t('choice_interaction_page')}</h3>
        <div className="flex items-center mt-[2px]">
          <fieldset className="">
            <ToggleSwitch
              id="id"
              spanText={t('by_list_id')}
              checked={true}
              circle
              clsLabel="!m-0"
              name="by_group"
              onChange={(e) => setSwitchScript((pre) => ({ ...pre, add: e.target.checked }))}
            />
          </fieldset>
        </div>
      </div>
      <div className={`w-1/2`}>
        <TextAreaField
          isRequire
          title={t('please_enter_page_id_here')}
          placeholder="..."
          register={{ ...register('please_enter_page_id_here', { required: true }) }}
          name="please_enter_page_id_here"
          clsTextArea="text-[15px] p-5 "
          clsTextLabel="!text-sm font-medium "
        />
        {/* {errors.ai_title && (
                <p className="text-[13px] mt-[-3px] text-red-500 ">{t('require')}</p>
              )} */}
      </div>
      <div className="py-3 pt-1  w-full">
        <div className="flex items-baseline justify-between w-full">
          <div className="w-fit">
            <div className="flex items-center  ">
              <CheckboxField
                name="like_page"
                title={t('like_page')}
                defaultChecked
                register={{ ...register('like_page') }}
                classLabel=" text-sm"
                classInputContainer="w-[280px]"
              />
              <div className="flex items-center">
                <InputNumberField
                  min={1}
                  name="like_page_1"
                  register={{ ...register('like_page_1') }}
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
                  name="like_page_2"
                  register={{ ...register('like_page_2') }}
                  max={100}
                  onChange={(e: any) =>
                    setInNumber((pre) => ({
                      ...pre,
                      surfNews: { ...pre.surfNews, two: e.target.value }
                    }))
                  }
                  value={inNumber.surfNews.two}
                  classInput="ml-2 !w-[70px] !px-2 !py-1"
                  span={t('page')}
                  clsLabel="whitespace-pre-wrap"
                  classInputContainer="w-full flex items-center justify-start"
                />
              </div>
            </div>{' '}
            <div className="flex items-center my-2">
              <CheckboxField
                name="follow_page"
                title={t('follow_page')}
                defaultChecked
                register={{ ...register('follow_page') }}
                classLabel=" text-sm"
                classInputContainer="w-[280px]"
              />
              <div className="flex items-center">
                <InputNumberField
                  min={1}
                  name="follow_page_1"
                  register={{ ...register('follow_page_1') }}
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
                  name="follow_page_2"
                  register={{ ...register('follow_page_2') }}
                  max={100}
                  onChange={(e: any) =>
                    setInNumber((pre) => ({
                      ...pre,
                      surfNews: { ...pre.surfNews, two: e.target.value }
                    }))
                  }
                  value={inNumber.surfNews.two}
                  classInput="ml-2 !w-[70px] !px-2 !py-1"
                  span={t('page')}
                  clsLabel="whitespace-pre-wrap"
                  classInputContainer="w-full flex items-center justify-start"
                />
              </div>
            </div>
          </div>
          <div className="w-[0.5px] border-r h-[50px] relative top-[35px]"></div>

          <div className="w-1/2">
            <div className="flex items-center ">
              <CheckboxField
                name="like_post_on_page"
                register={{ ...register('like_post_on_page') }}
                defaultChecked
                title={t('like_post_on_page')}
                classLabel=" text-sm"
                classInputContainer="w-[280px]"
              />
              <div className="flex items-center">
                <InputNumberField
                  min={1}
                  name="like_post_on_page_1"
                  register={{ ...register('like_post_on_page_1') }}
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
                  name="like_post_on_page_2"
                  register={{ ...register('like_post_on_page_2') }}
                  max={100}
                  onChange={(e: any) =>
                    setInNumber((pre) => ({
                      ...pre,
                      surfNews: { ...pre.surfNews, two: e.target.value }
                    }))
                  }
                  value={inNumber.surfNews.two}
                  classInput="ml-2 !w-[70px] !px-2 !py-1"
                  span={t('post')}
                  clsLabel="whitespace-pre-wrap"
                  classInputContainer="w-full flex items-center justify-start"
                />
              </div>
            </div>
            <div className=" my-2 w-full">
              <div className="flex items-center ">
                <CheckboxField
                  name="comment_post_on_page"
                  register={{ ...register('comment_post_on_page') }}
                  title={t('comment_post_on_page')}
                  classLabel=" text-sm"
                  classInputContainer="w-[280px]"
                  defaultChecked
                  onChange={(e: any) =>
                    setHandleTextarea((pre) => ({ ...pre, comment_on_page: e.target.checked }))
                  }
                />
                <div className="flex items-center">
                  <InputNumberField
                    min={1}
                    name="comment_post_on_page_1"
                    register={{ ...register('comment_post_on_page_1') }}
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
                    name="comment_post_on_page_2"
                    register={{ ...register('comment_post_on_page_2') }}
                    max={100}
                    onChange={(e: any) =>
                      setInNumber((pre) => ({
                        ...pre,
                        surfNews: { ...pre.surfNews, two: e.target.value }
                      }))
                    }
                    value={inNumber.surfNews.two}
                    classInput="ml-2 !w-[70px] !px-2 !py-1"
                    span={t('post')}
                    clsLabel="whitespace-pre-wrap"
                    classInputContainer="w-full flex items-center justify-start"
                  />
                </div>{' '}
              </div>
            </div>
          </div>
        </div>
        <div className={`mt-2 ${isShowTextarea ? '' : 'pointer-events-none opacity-60'}`}>
          <TextAreaField
            isRequire
            title={t('please_enter_content_of_page')}
            placeholder="..."
            register={{ ...register('please_enter_content_of_page', { required: true }) }}
            name="please_enter_content_of_page"
            clsTextArea="text-[15px] p-5 "
            clsTextLabel="!text-sm font-medium "
          />
          {/* {errors.ai_title && (
                <p className="text-[13px] mt-[-3px] text-red-500 ">{t('require')}</p>
              )} */}
        </div>
      </div>{' '}
    </form>
  )
}

export default FormInteractionPage
