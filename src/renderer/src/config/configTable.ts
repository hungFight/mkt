import { MantineTableCustomProps } from '@renderer/components/MantineTableCustom'

export const configTableManagerAccount: MantineTableCustomProps['column'] = [
  {
    accessor: 'uid',
    title: 'UID',
    sortable: true
  },

  {
    accessor: 'password',
    title: 'Mật khẩu'
  },

  {
    accessor: 'category',
    title: 'Danh mục'
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

export const configTableAddAccount: MantineTableCustomProps['column'] = [
  {
    accessor: 'uid',
    title: 'UID',
    sortable: true
  },

  {
    accessor: 'password',
    title: 'Mật khẩu'
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
    accessor: 'proxy',
    title: 'Proxy'
  }
]

export const configTableInteractionAccount: MantineTableCustomProps['column'] = [
  {
    accessor: 'uid',
    title: 'UID',
    sortable: true
  },

  {
    accessor: 'name',
    title: 'Tên'
  },

  {
    accessor: 'email',
    title: 'Email'
  },

  {
    accessor: 'friend',
    title: 'Bạn bè'
  },
  {
    accessor: 'group',
    title: 'Nhóm'
  },
  {
    accessor: 'recoveryEmail',
    title: 'Thông tin hành động đang chạy'
  },
  {
    accessor: 'cookie',
    title: 'Tiến trình đã chạy'
  }
]
