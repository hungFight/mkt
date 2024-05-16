import { MantineTableCustomProps } from '@renderer/components/MantineTableCustom'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

const useTranslationTable = (
  column: MantineTableCustomProps['column']
): MantineTableCustomProps['column'] => {
  const { i18n, t } = useTranslation()

  const columnTranslation = useMemo(() => {
    return column.map((item) => ({ ...item, title: t(`${item?.title}`) }))
  }, [i18n?.language, column])

  return columnTranslation
}

export default useTranslationTable
