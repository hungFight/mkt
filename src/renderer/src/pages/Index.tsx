/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../store/themeConfigSlice'
import Table from './Components/Table'

const Index = (): JSX.Element => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setPageTitle('Sales Admin'))
  })

  return (
    <div>
      <div>
        <Table></Table>
      </div>
    </div>
  )
}

export default Index
