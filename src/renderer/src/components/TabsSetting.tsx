/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import SettingSystem from './Layouts/Setting/SettingSystem'
import SettingTheme from './Layouts/Setting/SettingTheme'

const TabsSetting = (): JSX.Element => {
  return (
    <div>
      <div className="space-y-8 pt-5">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-1">
          {/* Justify Center Tabs */}
          <div className="panel" id="justify">
            <div className="mb-5">
              <Tab.Group>
                <Tab.List className="mt-3 flex flex-wrap justify-between space-x-2 rtl:space-x-reverse">
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <div className="flex-auto text-center !outline-none">
                        <button
                          className={`${selected ? 'bg-info text-white !outline-none' : ''}
                                                    before:inline-block' -mb-[1px] block rounded p-3.5 py-2 hover:bg-info hover:text-white`}
                          style={{ width: '100%' }}
                        >
                          Setting Theme
                        </button>
                      </div>
                    )}
                  </Tab>
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <div className="flex-auto text-center !outline-none">
                        <button
                          className={`${selected ? 'bg-info text-white !outline-none' : ''}
                                                    before:inline-block' -mb-[1px] block rounded p-3.5 py-2 hover:bg-info hover:text-white`}
                          style={{ width: '100%' }}
                        >
                          Setting System
                        </button>
                      </div>
                    )}
                  </Tab>
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel>
                    <div className="active pt-5">
                      <SettingTheme />
                    </div>
                  </Tab.Panel>
                  <Tab.Panel>
                    <div className="pt-5">
                      <SettingSystem />
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabsSetting
