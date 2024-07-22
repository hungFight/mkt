import ToolTips from '@renderer/components/Tooltips'
import { RenderInputNumber } from '@renderer/components/VirtualMarketing.tsx/RenderInputNumber'
import { renderBoxInputPostPageId } from '@renderer/pages/data/dataContentForm'
import React, { Dispatch, FC, SetStateAction } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { BsFillQuestionOctagonFill } from 'react-icons/bs'

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
          className={`w-full mb-2 border bg-[#f9f9f95c] rounded-[5px] border-[#c1c1c1] p-2 
                 items-center ${r.spanTwo ? 'block' : 'flex'}`}
        >
          <h2 className="text-sm font-medium mr-2 w-[56%] flex items-center">
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
    </div>
  )
}

export default FormPostByPageId
