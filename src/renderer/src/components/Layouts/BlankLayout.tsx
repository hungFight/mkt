import { PropsWithChildren } from 'react'
import App from '@renderer/App'

const BlankLayout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <App>
      <div className="text-black dark:text-white-dark min-h-screen">{children} </div>
    </App>
  )
}

export default BlankLayout
