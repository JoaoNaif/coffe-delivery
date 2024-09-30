import { NavLink } from 'react-router-dom'
import { SmileySad } from 'phosphor-react'
import { CartEmptyContainer } from './styles'

interface CartEmptyProps {
  title: string
  subtitle: string
}

export function CartEmpty({ title, subtitle }: CartEmptyProps) {
  return (
    <CartEmptyContainer>
      <SmileySad size={100} />
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <NavLink to={'/'}>QUERO CAFÉ!!!</NavLink>
    </CartEmptyContainer>
  )
}
