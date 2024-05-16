import App from '@renderer/App'
import { PropsWithChildren } from 'react'

const BlankLayout = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <App>
      <div className="text-black dark:text-white-dark min-h-screen">{children} </div>
    </App>
  )
}

export default BlankLayout
