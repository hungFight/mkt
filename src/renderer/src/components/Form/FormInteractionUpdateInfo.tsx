import CheckboxField from '../CustomField/CheckboxField'
import InputField from '../CustomField/InputField'
import InputNumberField from '../CustomField/InputNumberField'
import { LiaHandPointer } from 'react-icons/lia'
import { Dispatch, FC, SetStateAction } from 'react'
import { PropsInNumberIndividual, PropsSwitchScript } from '../Modal/ModalAddScript'
import { useTranslation } from 'react-i18next'

const FormInteractionUpdateInfo = (): JSX.Element => {
  const { t } = useTranslation()
  const handleSubmit = (): void => {
    console.log(123)
  }
  return (
    <div className="relative right-0 " style={{ animation: 'move_choiceList_left 0.3s linear' }}>
      <div className="flex items-center  py-3 ">
        <CheckboxField
          name="get_all_info_page_profile"
          title={t('get_all_info_page_profile')}
          classInputContainer="w-[280px]"
          classLabel=" text-sm "
        />
      </div>
    </div>
  )
}

export default FormInteractionUpdateInfo
