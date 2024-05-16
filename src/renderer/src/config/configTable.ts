import { MantineTableCustomProps } from '@renderer/components/MantineTableCustom'

export const configTableManagerAccount: MantineTableCustomProps['column'] = [
  {
    accessor: 'uid',
    title: 'UID',
    sortable: true
  },

  {
    accessor: 'password',
    title: 'Mật khẩu',
    sortable: true
  },

  {
    accessor: 'category',
    title: 'Danh mục',
    sortable: true
  },

  {
    accessor: 'privateKey',
    title: 'Private Key'
  },
  {
    accessor: 'email',
    title: 'Email'
  },
  {
    accessor: 'recoveryEmail',
    title: 'Mail khôi phục'
  },
  {
    accessor: 'cookie',
    title: 'Cookies'
  },
  {
    accessor: 'token',
    title: 'Token'
  },
  {
    accessor: 'status',
    title: 'Trạng thái'
  },
  {
    accessor: 'proxy',
    title: 'Proxy'
  },
  {
    accessor: 'last-opening',
    title: 'Hành động cuối'
  },
  {
    accessor: 'open-chrome',
    title: 'Mở Chrome'
  }
]
