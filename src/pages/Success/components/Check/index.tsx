import { ReactNode } from 'react'
import { CheckContainer } from './styles'

interface CheckProps {
  icon: ReactNode
  title: string
  subtitle: string
  bold: boolean
}

export function Check({ icon, title, subtitle, bold }: CheckProps) {
  const isBold = bold

  return (
    <CheckContainer>
      <div className="icon">{icon}</div>
      <div className="info-container">
        <p className={isBold ? 'is-bold' : ''}>{title}</p>
        <span className={!isBold ? 'is-bold' : ''}>{subtitle}</span>
      </div>
    </CheckContainer>
  )
}
