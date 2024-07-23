import CheckboxField from '@renderer/components/CustomField/CheckboxField'
import InputField from '@renderer/components/CustomField/InputField'
import SelectField from '@renderer/components/CustomField/SelectField'
import TextAreaField from '@renderer/components/CustomField/TextAreaField'
import ToolTips from '@renderer/components/Tooltips'
import { RenderInputNumber } from '@renderer/components/VirtualMarketing.tsx/RenderInputNumber'
import { renderBoxInputPostPageId } from '@renderer/pages/data/dataContentForm'
import { Dispatch, FC, SetStateAction } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { BsFillQuestionOctagonFill } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'

const FormPostByPageId: FC<{
  register: UseFormRegister<FieldValues>
  setFormDT: Dispatch<SetStateAction<any>>
  formDT: any
}> = ({ register, setFormDT, formDT }) => {
  const { t } = useTranslation()
  console.log(renderBoxInputPostPageId, 'renderBoxInputPostPageId')

  return (
    <div>
      {renderBoxInputPostPageId.map((r) => (
        <div
          key={r.id}
          className={`w-full mb-2 border bg-[#f9f9f95c] rounded-[5px] p-2 
                 items-center ${r.spanTwo ? 'block' : 'flex'}`}
        >
          <h2 className={`text-sm font-medium mr-2 w-[56%] flex items-center ${r.classTitle}`}>
            {t(r.name)}
            {r?.note && (
              <ToolTips content={t(r.note)}>
                <BsFillQuestionOctagonFill className="text-[#434343] ml-2" />
              </ToolTips>
            )}
          </h2>
          <div className={` ${r.spanTwo ? 'flex items-center ' : ' '}`}>
            {RenderInputNumber({
              register,
              formDT,
              setFormDT,
              name: r.name,
              key: r.name,
              span: r.spanTwo ? undefined : r.span,
              type: r.spanTwo ? 'from' : '',
              classInputContainer: '!w-fit !m-0'
            })}
            {r.spanTwo &&
              RenderInputNumber({
                register,
                formDT,
                setFormDT,
                name: r.name,
                key: r.name,
                span: r.spanTwo,
                type: 'to'
              })}
          </div>
        </div>
      ))}
      <CheckboxField
        name="deny_post_duplicate_between_page_in_account"
        title={t('deny_post_duplicate_between_page_in_account')}
        classInputContainer="my-3"
      />
      <div className="my-2 ">
        <h2 className="text-blue-500 pt-2 border-t">{t('config_scan_post')}</h2>
        <div className="border rounded-[10px] p-2 bg-[#f9f9f95c]">
          <p className="text-sm my-1 font-medium flex items-center">
            <RxDotFilled className="text-[20px]" />
            {t('enter_pageId_get_pageList')}
          </p>
          <InputField
            name="enter_pageId_get_pageList"
            placeholder={t('enter_pageId_here_eachId')}
            inputClassName="focus:border-blue-400 bg-white"
          />
          {RenderInputNumber({
            register,
            formDT,
            setFormDT,
            name: 'newest_post',
            title: t('each_pageId_scan_out'),
            span: t('newest_post'),
            key: 'newest_post',
            classInputContainer: 'w-full my-2 !block min-[1400px]:!flex',
            classInputParent: '!justify-start',
            childrenLabelLeft: <RxDotFilled className="text-[20px]" />,
            clsLabel: 'flex items-center mb-1'
          })}
        </div>
      </div>
      <div className="my-2">
        <h2 className="text-blue-500">{t('config_edit_post')}</h2>
        <div className="border rounded-[10px] p-2 bg-[#f9f9f95c]">
          <div className="flex items-center mb-2">
            <CheckboxField name="add_into" title={t('add_into')} />
            <div className="flex items-center ml-3">
              {' '}
              <SelectField
                name="add_into"
                height="2px"
                options={[
                  { label: t('top'), value: 'top' },
                  { label: t('last'), value: 'end' }
                ]}
              />
              <p className="ml-2 text-sm font-medium">{t('content_post')}</p>
            </div>
          </div>
          <TextAreaField
            name="enter_spin"
            placeholder="enter_structure_spin"
            clsTextArea="bg-white"
          />
          <CheckboxField
            name="delete_content_keepImage_and_content"
            title={t('delete_content_keepImage_and_content')}
            classInputContainer="mt-1 mb-2"
          />
          <TextAreaField
            name="enter_spin"
            placeholder="enter_structure_spin"
            clsTextArea="bg-white"
          />
          <CheckboxField
            name="delete_preHashTag"
            title={t('delete_preHashTag')}
            classInputContainer="my-2"
          />
          <CheckboxField name="add_newHashTag" title={t('add_newHashTag')} classInputContainer="" />
        </div>
      </div>
    </div>
  )
}

export default FormPostByPageId
