import { ReactNode } from 'react'
import { BadgeContainer } from './styles'

interface BadgeProps {
  text: string
  icon: ReactNode
  color: 'yellow-dark' | 'yellow-light' | 'gray' | 'purple'
}

export function Badge({ icon, text, color }: BadgeProps) {
  return (
    <BadgeContainer>
      <div className={color}>{icon}</div>
      <span>{text}</span>
    </BadgeContainer>
  )
}
