import { ShoppingCart } from 'phosphor-react'
import { CoffeType } from '../../../../@types/CoffeType'
import { CoffeContainer } from './styles'
import { CountButton } from '../../../../components/CountButton'
import { useContext, useState } from 'react'
import { OrderContext } from '../../../../context/OrdersContext'

import { v4 as uuidv4 } from 'uuid'

interface CoffeProps {
  coffe: CoffeType
}

export function Coffe({ coffe }: CoffeProps) {
  const { createNewOrder } = useContext(OrderContext)

  const [amount, setAmount] = useState(1)

  const productId = coffe.id

  function addAmount() {
    setAmount((state) => state + 1)
  }

  function subAmount() {
    setAmount((state) => {
      if (state === 1) {
        return 1
      }

      return state - 1
    })
  }

  function handleCreateNewOrder(productId: string, quantity: number) {
    createNewOrder(productId, quantity)
  }

  return (
    <CoffeContainer>
      <img src={coffe.src} alt="" />
      <ul className="attributes">
        {coffe.attributes.map((attribute) => (
          <li key={uuidv4()}>{attribute}</li>
        ))}
      </ul>
      <h1>{coffe.title}</h1>
      <p>{coffe.description}</p>
      <div className="container-price">
        <span className="value">
          <p>R$</p>
          {coffe.price}
        </span>
        <div className="container-sale">
          <CountButton
            amount={amount}
            addAmount={addAmount}
            subAmount={subAmount}
          />
          <button
            className="sale"
            onClick={() => handleCreateNewOrder(productId, amount)}
          >
            <ShoppingCart weight="fill" size={20} />
          </button>
        </div>
      </div>
    </CoffeContainer>
  )
}
