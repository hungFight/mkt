import { BiSolidDashboard } from 'react-icons/bi'
import configStatic from '.'
import {
  MdAccountCircle,
  MdFactCheck,
  MdInsertPageBreak,
  MdOutlineContentPaste
} from 'react-icons/md'
import { IoIosMenu } from 'react-icons/io'
import { FaAddressCard, FaPeopleGroup } from 'react-icons/fa6'
import { BsFeather } from 'react-icons/bs'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { RiAccountPinCircleFill, RiMenuAddFill, RiPagesFill } from 'react-icons/ri'
import { SlNote } from 'react-icons/sl'
import { CiCirclePlus } from 'react-icons/ci'
import { LiaNotesMedicalSolid } from 'react-icons/lia'
import { PiNotebookFill } from 'react-icons/pi'
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
    title: 'account_management',
    icon: FaAddressCard
  },
  {
    title: 'Quản lý nội dung',
    icon: AiOutlineMenuFold,
    path: configStatic.router.contentAcc
  },
  {
    title: 'Tương tác',
    icon: MdOutlineContentPaste,
    path: configStatic.router.InteractionAcc,
    children: [
      {
        title: 'Tương tác bằng PageProfile',
        icon: SlNote,
        path: configStatic.router.InteractionAcc
      }
    ]
  },
  {
    title: 'Viral Marketing',
    icon: FaPeopleGroup,
    children: [
      {
        title: 'Share bài viết',
        icon: BiSolidDashboard,
        path: configStatic.router.ShareViralMarketing
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
  },
  {
    title: 'Cập nhật thông tin',
    icon: BsFeather,
    path: configStatic.router.contentAcc,
    children: [
      {
        title: 'Cập nhật thông tin tài khoản',
        icon: MdAccountCircle,
        path: configStatic.router.ShareViralMarketing
      },
      {
        title: 'Cập nhật thông tin Page',
        icon: MdInsertPageBreak,
        path: configStatic.router.ShareViralMarketing
      }
    ]
  },
  {
    title: 'Quản Trị Page',
    icon: RiPagesFill,
    path: configStatic.router.contentAcc,
    children: [
      {
        title: 'Tạo Page Profile',
        icon: LiaNotesMedicalSolid,
        path: configStatic.router.ShareViralMarketing
      },
      {
        title: 'Quản Trị Page Profile',
        icon: PiNotebookFill,
        path: configStatic.router.ShareViralMarketing
      },
      {
        title: 'Chấp Nhận Lời Mời Quản Trị',
        icon: MdFactCheck,
        path: configStatic.router.ShareViralMarketing
      },
      {
        title: 'Mời Người Theo Dõi',
        icon: BiSolidDashboard,
        path: configStatic.router.ShareViralMarketing
      }
    ]
  }
]

export default configSidebar
