import { configContextMenuType } from '@renderer/components/RenderContextMenu'
import {
  BadgeCheck,
  Chrome,
  CircleX,
  Facebook,
  LayoutPanelLeftIcon,
  ListChecks,
  Mail,
  MousePointer2
} from 'lucide-react'

export const configMenuActionAccount: configContextMenuType[] = [
  {
    Icon: MousePointer2,
    action: 'Chọn'
  },
  {
    Icon: CircleX,
    action: 'Bỏ chọn'
  },

  {
    Icon: Facebook,
    action: 'Đăng nhập Facebook'
  },
  {
    Icon: Mail,
    action: 'Đăng nhập Hotmail'
  },
  {
    Icon: Chrome,
    action: 'Tạo Chorme Profile'
  },
  {
    Icon: BadgeCheck,
    action: 'Kiểm tra tài khoản '
  },
  {
    Icon: ListChecks,
    action: 'Kiểm tra năm tạo tài khoản'
  }
]

export const configDefaultAction: configContextMenuType[] = [
  {
    Icon: LayoutPanelLeftIcon,
    action: 'unchecked'
  },

  {
    Icon: LayoutPanelLeftIcon,
    action: 'copy'
  },

  {
    Icon: LayoutPanelLeftIcon,
    action: 'delete'
  }
]

export const configContextCate: configContextMenuType[] = [
  {
    Icon: LayoutPanelLeftIcon,
    action: 'unchecked'
  },

  {
    Icon: LayoutPanelLeftIcon,
    action: 'delete'
  }
]
