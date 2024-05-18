import { default as FormConfigInteraction } from '@renderer/components/Form/FormConfigInteraction'
import FormInteractionFriend from '@renderer/components/Form/FormInteractionFriend'
import FormInteractionIndividual from '@renderer/components/Form/FormInteractionIndividual'

export const configInteraction = [
  {
    id: 'individual',
    title: 'Tương tác cá nhân',
    content: <FormInteractionIndividual />
  },
  {
    id: 'friend',
    title: 'Tương tác bạn bè',
    content: <FormInteractionFriend />
  },
  {
    id: 'group',
    title: 'Tương tác nhóm',
    content: '65',
    disabled: true
  },
  {
    id: 'page',
    title: 'Tương tác Page',
    content: <FormConfigInteraction />,
    disabled: true
  },
  {
    id: 'info',
    title: 'Cập nhật thông tin tài khoản',
    content: <FormConfigInteraction />,
    disabled: true
  }
]
