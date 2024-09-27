import { FinalValueContainer } from './styles'

export function FinalValue() {
  return (
    <FinalValueContainer>
      <li>
        <p>Total de itens</p>
        <span>R$ 20,50</span>
      </li>
      <li>
        <p>Entrega</p>
        <span>R$ 3,50</span>
      </li>
      <li>
        <p>Total</p>
        <span>R$ 33,20</span>
      </li>
    </FinalValueContainer>
  )
}
