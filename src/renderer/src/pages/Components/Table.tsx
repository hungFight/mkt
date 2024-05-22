import { Accounts } from '@renderer/apis'
import logoTable from '@renderer/assets/images/Table-Logo.png'
import sortBy from 'lodash/sortBy'
import { DataTable, DataTableSortStatus } from 'mantine-datatable'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
interface Item {
  invoice: string
  name: string
  email: string
  date: string
  amount: string
  status: {
    color: string
    tooltip: string
  }
}

const Table = (): JSX.Element => {
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await Accounts.getAll()
        if (response.status === 200) {
          const fetchedItems = response.data as Item[]
          setItems(fetchedItems)
          setInitialRecords(sortBy(fetchedItems, 'invoice'))
        } else {
          console.error('Fetch failed with status:', response.status)
        }
      } catch (error) {
        console.error('An error occurred during fetch:', error)
      }
    }
    fetchData()
  }, [])

  const [page, setPage] = useState(1)
  const PAGE_SIZES = [10, 20, 30, 50, 100]
  const [pageSize, setPageSize] = useState(PAGE_SIZES[0])
  const [initialRecords, setInitialRecords] = useState<Item[]>([])
  const [records, setRecords] = useState<Item[]>([])
  const [search, setSearch] = useState('')
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
    columnAccessor: 'invoice',
    direction: 'asc'
  })

  useEffect(() => {
    setPage(1)
  }, [pageSize])

  useEffect(() => {
    const from = (page - 1) * pageSize
    const to = from + pageSize
    setRecords([...initialRecords.slice(from, to)])
  }, [page, pageSize, initialRecords])

  useEffect(() => {
    setInitialRecords(() => {
      return items.filter((item) => {
        return (
          item.invoice.toLowerCase().includes(search.toLowerCase()) ||
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.email.toLowerCase().includes(search.toLowerCase()) ||
          item.date.toLowerCase().includes(search.toLowerCase()) ||
          item.amount.toLowerCase().includes(search.toLowerCase()) ||
          item.status.tooltip.toLowerCase().includes(search.toLowerCase())
        )
      })
    })
  }, [search])

  useEffect(() => {
    const sortedRecords = sortBy(initialRecords, sortStatus.columnAccessor)
    setRecords(sortStatus.direction === 'desc' ? sortedRecords.reverse() : sortedRecords)
    setPage(1)
  }, [sortStatus, initialRecords])

  const EmptyState = (): JSX.Element => (
    <div className="flex flex-col justify-center">
      <img src={logoTable} alt="" />
    </div>
  )

  return (
    <div className="panel px-0 border-white-light dark:border-[#1b2e4b]">
      <div className="invoice-table">
        <div className="mb-4.5 px-5 flex md:items-center md:flex-row flex-col gap-5">
          <div className="flex items-center gap-2">
            <Link to="/apps/invoice/add" className="btn btn-primary gap-2">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              Add New
            </Link>
          </div>
          <div className="ltr:ml-auto rtl:mr-auto">
            <input
              type="text"
              className="form-input w-auto"
              placeholder="Search..."
              value={search}
              onChange={(e): void => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="datatables pagination-padding">
          <DataTable
            className="whitespace-nowrap table-hover"
            records={records}
            columns={[
              {
                accessor: 'invoice',
                sortable: true,
                render: ({ invoice }) => (
                  <NavLink to="/apps/invoice/preview">
                    <div className="text-primary underline hover:no-underline font-semibold">{`#${invoice}`}</div>
                  </NavLink>
                )
              },
              {
                accessor: 'name',
                sortable: true,
                render: ({ name }) => (
                  <div className="flex items-center font-semibold">
                    <div>{name}</div>
                  </div>
                )
              },
              {
                accessor: 'email',
                sortable: true
              },
              {
                accessor: 'date',
                sortable: true
              },
              {
                accessor: 'amount',
                sortable: true,
                titleClassName: 'text-left',
                render: ({ amount }) => (
                  <div className="text-left font-semibold">{`$${amount}`}</div>
                )
              },
              {
                accessor: 'status',
                sortable: true,
                render: ({ status }) => (
                  <span className={`badge badge-outline-${status.color} color-${status.color} `}>
                    {status.tooltip}
                  </span>
                )
              }
            ]}
            highlightOnHover
            totalRecords={initialRecords.length}
            recordsPerPage={pageSize}
            page={page}
            onPageChange={(p): void => setPage(p)}
            recordsPerPageOptions={PAGE_SIZES}
            onRecordsPerPageChange={setPageSize}
            sortStatus={sortStatus}
            onSortStatusChange={setSortStatus}
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
            noRecordsIcon={<EmptyState />}
          />
        </div>
      </div>
    </div>
  )
}

export default Table
