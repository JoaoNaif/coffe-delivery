import { NavLink } from 'react-router-dom'
import { SmileySad } from 'phosphor-react'
import { CartEmptyContainer } from './styles'

export function CartEmpty() {
  return (
    <CartEmptyContainer>
      <SmileySad size={100} />
      <h1>Seu carrinho está vazio</h1>
      <p>Nevegue pela loja e escolha seu café</p>
      <NavLink to={'/'}>QUERO CAFÉ!!!</NavLink>
    </CartEmptyContainer>
  )
}
