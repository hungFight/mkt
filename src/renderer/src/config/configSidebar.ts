import { BiSolidDashboard } from 'react-icons/bi'
import configStatic from '.'
import {
  MdAccountCircle,
  MdFactCheck,
  MdInsertPageBreak,
  MdOutlineContentPaste,
  MdOutlinePostAdd
} from 'react-icons/md'
import { IoIosMenu } from 'react-icons/io'
import { FaAddressCard, FaComments, FaPeopleGroup, FaRegComments } from 'react-icons/fa6'
import { BsFeather } from 'react-icons/bs'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { RiAccountPinCircleFill, RiMenuAddFill, RiPagesFill, RiQrScan2Line } from 'react-icons/ri'
import { SlNote } from 'react-icons/sl'
import { CiCirclePlus } from 'react-icons/ci'
import { LiaNotesMedicalSolid, LiaPagerSolid } from 'react-icons/lia'
import { PiFilmReelLight, PiNotebookFill, PiVideoLight } from 'react-icons/pi'
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
    title: 'content_management',
    icon: AiOutlineMenuFold,
    path: configStatic.router.contentManagement
  },
  {
    title: 'interaction',
    icon: MdOutlineContentPaste,
    children: [
      {
        title: 'interact_by_pageProfile',
        icon: SlNote,
        path: configStatic.router.interactionPageProfile
      }
    ]
  },
  {
    title: 'Viral Marketing',
    icon: FaPeopleGroup,
    children: [
      {
        title: 'scan_pageProfile',
        icon: RiQrScan2Line,
        path: configStatic.router.scanViralMarketing
      },
      {
        title: 'post_PageProfile',
        icon: MdOutlinePostAdd,
        path: configStatic.router.postViralMarketing
      },
      {
        title: 'comment_by_uid',
        icon: FaRegComments,
        path: configStatic.router.commentViralMarketing
      },
      {
        title: 'post_reels_facebook',
        icon: PiFilmReelLight,
        path: configStatic.router.postReelsFViralMarketing
      },
      {
        title: 'post_video_pageProfile',
        icon: PiVideoLight,
        path: configStatic.router.postVideoPageProfile
      },
      {
        title: 'post_by_pageId',
        icon: LiaPagerSolid,
        path: configStatic.router.postByPageId
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
    path: 'ds'
  },
  {
    title: 'Quản Trị Page',
    icon: RiPagesFill,
    path: 'aa'
  }
]

export default configSidebar
