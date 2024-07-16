import MantineTableCustom from '@renderer/components/MantineTableCustom'
import { configTableManagerAccount } from '@renderer/config/configTable'
import { dataAccounts } from '@renderer/pages/data/dataTable'
import chromeIcon from '@renderer/assets/images/Google_Chrome_icon.png'
import { ToastContainer, toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import { FC } from 'react'

const TableManagerAccount: FC<{ hiddenArray: string[] }> = ({ hiddenArray }): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div className=" rounded-lg bg-white">
      <div className="md:flex md:space-x-4 md:items-center space-y-4 md:space-y-0 md:justify-between"></div>
      <div className="bg-white custom-shadow rounded-[20px] ">
        <MantineTableCustom
          column={configTableManagerAccount.filter((r) =>
            hiddenArray.some((h) => h === r.accessor)
          )}
          data={dataAccounts.map((account) => ({
            ...account,
            open: (
              <div
                className="cursor-pointer"
                onClick={() => toast.success(t('open_chrome_success'))}
              >
                <img src={chromeIcon} alt="chrome" className="w-8 h-8 m-auto" />
              </div>
            )
          }))}
        />
      </div>
      <ToastContainer />
    </div>
  )
}

export default TableManagerAccount
