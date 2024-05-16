import { Button, ButtonProps } from 'flowbite-react'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { LoadingIcon } from './Icon'

export type ColorButton =
  | 'blue'
  | 'gray'
  | 'dark'
  | 'light'
  | 'success'
  | 'failure'
  | 'warning'
  | 'purple'

type sizeButton = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

interface ButtonFlowbiteProps extends Omit<ButtonProps, 'color' | 'gradientMonochrome' | 'size'> {
  color?: ColorButton
  gradientMonochrome?: ColorButton
  size?: sizeButton
}

const ButtonFlowbite: FC<ButtonFlowbiteProps> = ({ color, size, children, href, ...rest }) => {
  return (
    <Button
      as={href ? Link : null}
      href={href ? href : undefined}
      color={color}
      size={size}
      processingSpinner={<LoadingIcon isSpin />}
      {...rest}
      type={rest?.type ?? 'button'}
    >
      {children}
    </Button>
  )
}

export default ButtonFlowbite
