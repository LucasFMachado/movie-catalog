import { ReactNode } from 'react'
import { Content } from './styles'

interface BadgeProps {
  children: ReactNode
}

function Badge({ children }: BadgeProps) {
  return <Content>{children}</Content>
}

export { Badge }
