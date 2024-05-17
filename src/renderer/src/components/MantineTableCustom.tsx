/* eslint-disable @typescript-eslint/no-explicit-any */
import useTranslationTable from '@renderer/hook/useTranslationTable'
import sortBy from 'lodash/sortBy'
import { DataTable, DataTableColumn, DataTableProps, DataTableSortStatus } from 'mantine-datatable'
import { Dispatch, FC, SetStateAction, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

type DataTablePropsNew = Omit<
  DataTableProps<any>,
  | 'columns'
  | 'records'
  | 'groups'
  | 'withBorder'
  | 'borderRadius'
  | 'loaderSize'
  | 'loaderVariant'
  | 'loaderColor'
  | 'emptyState'
>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MantineTableCustomProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  column: Array<DataTableColumn<any>>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[]
  PAGE_SIZES?: number[]
  initSort?: DataTableSortStatus
  isNoStt?: boolean
  isSearch?: boolean
  dependency?: any[]
  funcSearch?: (item?: any) => boolean
  funcSearchSuccess?: (filteData?: any) => void
  pase_size_active?: 'first_child' | 'last_child' | ((data: number[]) => number)
  dependencyPageSize?: any[]
  fucPageSizeChange?: (setPageSize: Dispatch<SetStateAction<number>>, PAGE_SIZES: number[]) => void
} & DataTablePropsNew

const MantineTableCustom: FC<MantineTableCustomProps> = ({
  column,
  data,
  PAGE_SIZES = [10, 20, 50, 100, 200],
  initSort = {
    columnAccessor: 'invoice',
    direction: 'asc'
  },
  isNoStt = false,
  isSearch,
  dependency = [],
  pase_size_active = 'first_child',
  funcSearch,
  funcSearchSuccess,
  dependencyPageSize = [],
  fucPageSizeChange,
  ...rest
}): JSX.Element => {
  const { t } = useTranslation()
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(() => {
    let num = 0
    if (typeof pase_size_active === 'string') {
      num =
        pase_size_active === 'first_child' ? PAGE_SIZES?.[0] : PAGE_SIZES[PAGE_SIZES?.length - 1]
    } else {
      num = pase_size_active(PAGE_SIZES)
    }
    return num
  })
  const [selectedRecords, setSelectedRecords] = useState<any[]>([])

  const [initialRecords, setInitialRecords] = useState(data)
  const [records, setRecords] = useState(data)
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>(initSort)
  const columnTranslation = useTranslationTable(column)
  const initDataPagination = useCallback(
    ({
      page,
      pageSize,
      initialRecords
    }: {
      page: number
      pageSize: number
      initialRecords: any
    }) => {
      const from = (page - 1) * pageSize
      const to = from + pageSize
      const sortedRecords = sortBy(initialRecords, sortStatus.columnAccessor)
      const directionArr = sortStatus.direction === 'desc' ? sortedRecords.reverse() : sortedRecords

      return directionArr.slice(from, to)
    },
    []
  )

  useEffect(() => {
    if (dependencyPageSize && dependencyPageSize?.length > 0) {
      fucPageSizeChange && fucPageSizeChange(setPageSize, PAGE_SIZES)
    }
  }, [...dependencyPageSize])

  useEffect(() => {
    setInitialRecords(data)
    const initData = initDataPagination({
      page,
      pageSize,
      initialRecords: data
    })
    setRecords(initData)
  }, [data])

  useEffect(() => {
    setPage(1)
  }, [pageSize])

  useEffect(() => {
    const sortedRecords = sortBy(initialRecords, sortStatus.columnAccessor)
    setRecords(sortStatus.direction === 'desc' ? sortedRecords.reverse() : sortedRecords)
    setPage(1)
  }, [sortStatus, initialRecords])

  useEffect(() => {
    if (isSearch) {
      if (Array.isArray(data)) {
        const filterData = data.filter((item) => {
          return funcSearch && funcSearch(item)
        })
        funcSearchSuccess && funcSearchSuccess(filterData)
        const initData = initDataPagination({
          page: 1,
          pageSize,
          initialRecords
        })
        setInitialRecords(filterData)
        setRecords(initData)
      }
    }
  }, [isSearch, ...dependency])

  useEffect(() => {
    const initData = initDataPagination({
      page,
      pageSize,
      initialRecords
    })
    setRecords(initData)
  }, [page, pageSize, initialRecords])

  return (
    <div className="custom-table">
      <div className="datatables pagination-padding">
        <DataTable
          className="whitespace-nowrap table-hover rounded-[10px]"
          noRecordsText={t('Không tìm thấy dữ liệu')}
          paginationText={({
            from,
            to,
            totalRecords
          }: {
            from: number
            to: number
            totalRecords: number
          }): string => {
            return `Showing ${from} to ${to} of ${totalRecords} entries`
          }}
          highlightOnHover
          {...rest}
          records={records}
          columns={
            isNoStt
              ? columnTranslation
              : [
                  {
                    accessor: 'index',
                    title: 'STT',
                    textAlignment: 'right',
                    width: 60,
                    render: (record) => (page - 1) * pageSize + records.indexOf(record) + 1
                  },
                  ...columnTranslation
                ]
          }
          totalRecords={initialRecords.length}
          recordsPerPage={pageSize}
          page={page}
          onPageChange={(p): void => setPage(p)}
          recordsPerPageOptions={PAGE_SIZES}
          onRecordsPerPageChange={setPageSize}
          sortStatus={sortStatus}
          onSortStatusChange={setSortStatus}
          defaultColumnRender={(row: any, _, accessor: any): string => {
            let data = row[accessor as keyof typeof row]
            if (typeof data === 'number') data = data.toString()
            return typeof data === 'string' ? data : '-'
          }}
          selectedRecords={selectedRecords}
          onSelectedRecordsChange={setSelectedRecords}
        />
      </div>
    </div>
  )
}

export default MantineTableCustom
