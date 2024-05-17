import { BiSolidDashboard } from 'react-icons/bi'
import configStatic from '.'
export interface configItemSidebar {
  path?: string
  title?: string
  isHeader?: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: (prop?) => JSX.Element
}

export interface configSidebarType extends configItemSidebar {
  children?: configItemSidebar[]
}

export const configSidebar: configSidebarType[] = [
  {
    path: configStatic.router.home,
    title: 'Quản lý tài khoản',
    icon: BiSolidDashboard
  },
  {
    title: 'Tương tác tài khoản',
    icon: BiSolidDashboard,
    path: configStatic.router.InteractionAcc
  },
  {
    title: 'Viral Marketing',
    icon: BiSolidDashboard,
    children: [
      {
        title: 'Share bài viết',
        icon: BiSolidDashboard
      },
      {
        title: 'Đồng ý - Hủy kết bạn',
        icon: BiSolidDashboard
      },
      {
        title: 'Bình luận trang cá nhân',
        icon: BiSolidDashboard
      },
      {
        title: 'Bình luận vào nhóm',
        icon: BiSolidDashboard
      },
      {
        title: 'Gửi tin nhắn cá nhân',
        icon: BiSolidDashboard
      },
      {
        title: 'Tham gia nhóm',
        icon: BiSolidDashboard
      },
      {
        title: 'Đăng bài cá nhân',
        icon: BiSolidDashboard
      },
      {
        title: 'Đăng bài cá nhân theo UID',
        icon: BiSolidDashboard
      },
      {
        title: 'Đăng bài nhóm',
        icon: BiSolidDashboard
      },
      {
        title: 'Đăng bài nhóm theo ID',
        icon: BiSolidDashboard
      },
      {
        title: 'Seeding bài viết',
        icon: BiSolidDashboard
      },
      {
        title: 'Đăng Reel Page Profile',
        icon: BiSolidDashboard
      }
    ]
  }
]

export default configSidebar
