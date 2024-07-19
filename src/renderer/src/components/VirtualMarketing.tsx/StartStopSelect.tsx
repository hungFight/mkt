import SelectField, { SelectDefault } from '../CustomField/SelectField'
import { Button } from 'flowbite-react'
import { CirclePlay, CircleX } from 'lucide-react'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

const StartStopSelect: FC<{ options: SelectDefault[]; changeSelected?: (value: any) => void }> = ({
  options,
  changeSelected
}) => {
  const { t } = useTranslation()
  return (
    <div className="flex items-center justify-start pb-2">
      <SelectField
        name="script"
        placeholder={t('choice_index')}
        parenSelect="w-[200px]"
        borderColorFocus="#2795d8bf"
        changeSelected={changeSelected}
        options={options}
        boxShadow="0 0 1px"
        height="25px"
      />
      <div className="gap-2 flex h-fit items-center justify-between ml-2 ">
        {/* <SelectField name="group" placeholder="Danh mục" className="w-[50%] py-0" /> */}
        <Button
          className="bg-green-700 rounded-[10px] h-max btn-start py-[2px]"
          size="sm"
          // onClick={handleStart}
          type="submit"
        >
          <CirclePlay size={20} className="mr-2" />
          {t('start')}
        </Button>
        <Button className="bg-red-700 rounded-[10px] h-max py-[2px]" size="sm">
          <CircleX size={20} className="mr-2" />
          {t('stop')}
        </Button>
      </div>
    </div>
  )
}

export default StartStopSelect
