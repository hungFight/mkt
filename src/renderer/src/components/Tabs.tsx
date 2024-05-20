/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { ReactNode, useState } from 'react'

interface TabConfig {
  id: string
  title: string
  content: ReactNode
  disabled?: boolean
}

interface TabsProps {
  tabs: TabConfig[]
}

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  const handleTabClick = (id: string) => {
    setActiveTab(id)
  }

  return (
    <div>
      <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="default-tab"
          role="tablist"
        >
          {tabs.map((tab) => (
            <li key={tab.id} className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                } ${tab.disabled ? 'cursor-not-allowed opacity-50' : ''}`}
                id={`${tab.id}-tab`}
                type="button"
                role="tab"
                aria-controls={tab.id}
                aria-selected={activeTab === tab.id}
                onClick={() => !tab.disabled && handleTabClick(tab.id)}
                disabled={tab.disabled} // Disable the button if the tab is disabled
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div id="default-tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`p-4 rounded-lg bg-gray-50 dark:bg-gray-800 ${
              activeTab === tab.id ? 'block' : 'hidden'
            }`}
            id={tab.id}
            role="tabpanel"
            aria-labelledby={`${tab.id}-tab`}
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">
              <strong className="font-medium text-gray-800 dark:text-white">{tab.content}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tabs
