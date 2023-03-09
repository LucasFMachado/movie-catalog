import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Content } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

function Button({ children, ...props }: ButtonProps) {
  return <Content {...props}>{children}</Content>
}

export { Button }
