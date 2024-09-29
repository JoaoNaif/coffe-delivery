import { useContext } from 'react'
import { OrderContext } from '../../../../context/OrdersContext'
import { FinalValueContainer } from './styles'

export function FinalValue() {
  const { orders } = useContext(OrderContext)

  const tax = 3.5

  const value = orders.map((i) => i.quantity * i.price)
  const total = value.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  )

  const finalValue = total + tax
  return (
    <FinalValueContainer>
      <li>
        <p>Total de itens</p>
        <span>R$ {total.toFixed(2)}</span>
      </li>
      <li>
        <p>Entrega</p>
        <span>R$ {tax.toFixed(2)}</span>
      </li>
      <li>
        <p>Total</p>
        <span>R$ {finalValue.toFixed(2)}</span>
      </li>
    </FinalValueContainer>
  )
}
