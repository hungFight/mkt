import logo from '@renderer/assets/images/Table-Logo.png'
import useTranslationTable from '@renderer/hook/useTranslationTable'
import sortBy from 'lodash/sortBy'
import { DataTable, DataTableColumn, DataTableProps, DataTableSortStatus } from 'mantine-datatable'
import React, { FC, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

type DataTablePropsNew = Omit<
  DataTableProps<unknown>,
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

export type MantineTableCustomProps = {
  column: Array<DataTableColumn<unknown>>
  height?: number | string
  data: unknown[]
  PAGE_SIZES?: number[]
  initSort?: DataTableSortStatus
  isNoStt?: boolean
  isSearch?: boolean
  dependency?: unknown[]
  funcSearch?: (item?: unknown) => boolean
  funcSearchSuccess?: (filteData?: unknown) => void
  pase_size_active?: 'first_child' | 'last_child' | ((data: number[]) => number)
  dependencyPageSize?: unknown[]
  clsTable?: string
  fucPageSizeChange?: (
    setPageSize: React.Dispatch<React.SetStateAction<number>>,
    PAGE_SIZES: number[]
  ) => void
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
  clsTable,
  funcSearchSuccess,
  height,
  ...rest
}): JSX.Element => {
  const { t } = useTranslation()
  const columnTranslation = useTranslationTable(column)
  const [selectedRecords, setSelectedRecords] = useState<unknown[]>([])
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(() => {
    let num = 0
    if (typeof pase_size_active === 'string') {
      num = pase_size_active === 'first_child' ? PAGE_SIZES[0] : PAGE_SIZES[PAGE_SIZES.length - 1]
    } else {
      num = pase_size_active(PAGE_SIZES)
    }
    return num
  })
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>(initSort)
  const [filteredData, setFilteredData] = useState(data)

  const sortedData = useMemo(() => {
    const sortedRecords = sortBy(filteredData, sortStatus.columnAccessor)
    return sortStatus.direction === 'desc' ? sortedRecords.reverse() : sortedRecords
  }, [filteredData, sortStatus])

  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize
    const end = start + pageSize
    return sortedData.slice(start, end)
  }, [sortedData, page, pageSize])

  useEffect(() => {
    setFilteredData(data)
  }, [data])

  useEffect(() => {
    if (isSearch && funcSearch) {
      const result = data.filter(funcSearch)
      setFilteredData(result)
      if (funcSearchSuccess) {
        funcSearchSuccess(result)
      }
    } else {
      setFilteredData(data)
    }
  }, [isSearch, data, ...dependency])

  useEffect(() => {
    setPage(1)
  }, [pageSize])

  const EmptyState = (): JSX.Element => (
    <div className="flex flex-col justify-center w-[50px]">
      <img src={logo} alt="" />
    </div>
  )
  return (
    <div className="custom-table">
      <div className="datatables pagination-padding relative">
        <div className="w-full h-[45px] bg-[rgb(196_200_200_/_22%)] shadow-[0_0_1px] shadow-[rgb(78_78_78)] absolute top-0 left-0 z-10 rounded-t-[10px] pointer-events-none"></div>
        <DataTable
          height={height}
          className={`whitespace-nowrap table-hover rounded-[10px] ${clsTable}`}
          noRecordsText={t('empty')}
          paginationText={({ from, to, totalRecords }): string =>
            `Hiển thị ${from} đến ${to} trong ${totalRecords} dữ liệu`
          }
          // highlightOnHover
          {...rest}
          records={paginatedData}
          columns={
            isNoStt
              ? columnTranslation
              : [
                  {
                    accessor: 'index',
                    title: 'STT',
                    textAlignment: 'right',
                    width: 60,
                    render: (record) => (page - 1) * pageSize + paginatedData.indexOf(record) + 1
                  },
                  ...columnTranslation
                ]
          }
          totalRecords={filteredData.length}
          recordsPerPage={pageSize}
          page={page}
          onPageChange={(p): void => setPage(p)}
          recordsPerPageOptions={PAGE_SIZES}
          onRecordsPerPageChange={setPageSize}
          sortStatus={sortStatus}
          onSortStatusChange={setSortStatus}
          selectedRecords={selectedRecords}
          onSelectedRecordsChange={setSelectedRecords}
          noRecordsIcon={<EmptyState />}
        ></DataTable>
      </div>
    </div>
  )
}

export default MantineTableCustom
