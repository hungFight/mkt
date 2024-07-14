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
    accessor: 'open',
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
    accessor: 'pass',
    title: 'Mật khẩu'
  },

  {
    accessor: 'private',
    title: 'Private Key'
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
    accessor: 'email',
    title: 'Email'
  },
  {
    accessor: 'email_password',
    title: 'Mật khẩu email'
  },
  {
    accessor: 'recovery_mail',
    title: 'Mail khôi phục'
  },
  {
    accessor: 'birthday',
    title: 'Ngày sinh'
  },
  {
    accessor: 'proxy',
    title: 'Proxy'
  }
]
export const configTableTrashAccount: MantineTableCustomProps['column'] = [
  {
    accessor: 'uid',
    title: 'UID',
    sortable: true
  },

  {
    accessor: 'password',
    title: 'pass'
  },

  {
    accessor: 'Da',
    title: 'category'
  },
  {
    accessor: 'privateKey',
    title: 'Private Key'
  },
  {
    accessor: 'recoveryEmail',
    title: 'auth_status'
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
export const configTableAddInAddIndex: MantineTableCustomProps['column'] = [
  {
    accessor: 'indexName',
    title: 'Tên danh mục'
  },
  {
    accessor: 'method',
    title: 'Phương thức'
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
export const configTableAddIndex: MantineTableCustomProps['column'] = [
  {
    accessor: 'title',
    title: 'Tiều đề'
  },
  {
    accessor: 'content',
    title: 'Nội dung'
  },

  {
    accessor: 'with_image',
    title: 'Kèm ảnh'
  },
  {
    accessor: 'type_post',
    title: 'Kiểu bài'
  },
  {
    accessor: 'time',
    title: 'Thời gian'
  }
]

export const configTableSettingSystem: MantineTableCustomProps['column'] = [
  {
    accessor: 'name',
    title: 'Họ và tên',
    sortable: true
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
    accessor: 'act',
    title: 'Lần tương tác cuối cùng'
  }
]
