import { Trash } from 'phosphor-react'
import { CoffeType } from '../../../../@types/CoffeType'
import { CountButton } from '../../../../components/CountButton'
import { ItemCoffeContainer } from './styles'
import { useContext } from 'react'
import { OrderContext } from '../../../../context/OrdersContext'

interface ItemCoffeProps {
  coffe: CoffeType
}

export function ItemCoffe({ coffe }: ItemCoffeProps) {
  const { orders, addOneMore, reduceOneLess, removeOrder } =
    useContext(OrderContext)

  const order = orders.find((i) => i.productId === coffe.id)
  const quantity = order ? order.quantity : 1

  function addAmount() {
    if (order) {
      addOneMore(order.productId)
    }
  }

  function subAmount() {
    if (order) {
      reduceOneLess(order.productId)
    }
  }

  function handleRemoveOrder() {
    if (order) {
      removeOrder(order.id)
    }
  }

  return (
    <ItemCoffeContainer>
      <img src={coffe.src} alt="" />
      <div className="info-container">
        <p>
          {coffe.title} - {order?.quantity}
        </p>
        <div className="button-container">
          <CountButton
            amount={quantity}
            addAmount={addAmount}
            subAmount={subAmount}
          />
          <button
            onClick={handleRemoveOrder}
            type="button"
            className="btn-trash"
          >
            <Trash />
            <span>REMOVER</span>
          </button>
        </div>
      </div>
      <p className="price">R$ {(coffe.price * quantity).toFixed(2)}</p>
    </ItemCoffeContainer>
  )
}
