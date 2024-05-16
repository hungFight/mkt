import { configContextMenuType } from '@renderer/components/RenderContextMenu'
import { LayoutPanelLeftIcon, Loader2 } from 'lucide-react'

export const configMenuActionAccount: configContextMenuType[] = [
  {
    Icon: Loader2,
    action: 'Chọn'
  },

  {
    Icon: Loader2,
    action: 'Bỏ chọn'
  },

  {
    Icon: LayoutPanelLeftIcon,
    action: 'Đăng nhập Facebook'
  },
  {
    Icon: LayoutPanelLeftIcon,
    action: 'Đăng nhập Hotmail'
  },
  {
    Icon: LayoutPanelLeftIcon,
    action: 'Tạo Chorme Profile'
  },
  {
    Icon: LayoutPanelLeftIcon,
    action: 'Kiểm tra tài khoản '
  },
  {
    Icon: LayoutPanelLeftIcon,
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
