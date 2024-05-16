import MantineTableCustom from '@renderer/components/MantineTableCustom'
import { configTableManagerAccount } from '@renderer/config/configTable'
import { dataAccounts } from '@renderer/pages/data/dataTable'

const TableManagerAccount = (): JSX.Element => {
  return (
    <div className=" rounded-lg bg-white">
      <div className="md:flex md:space-x-4 md:items-center space-y-4 md:space-y-0 md:justify-between"></div>
      <div className="bg-white custom-shadow rounded-[20px] ">
        <MantineTableCustom column={configTableManagerAccount} data={dataAccounts} />
      </div>
    </div>
  )
}

export default TableManagerAccount
