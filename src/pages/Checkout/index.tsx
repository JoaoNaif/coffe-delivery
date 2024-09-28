import { useContext } from 'react'
import { data } from '../../data/coffe'
import { DeliveryAddress } from './components/DeliveryAddress'
import { FinalValue } from './components/FinalValue'
import { ItemCoffe } from './components/ItemCoffe'
import { PaymentMethod } from './components/PaymentMethod'
import { CheckoutContainer } from './styles'
import { OrderContext } from '../../context/OrdersContext'

export function Checkout() {
  const { orders } = useContext(OrderContext)

  const coffeIds = orders.map((item) => item.productId)
  const coffe = data
  const filter = coffe.filter((item) => coffeIds.includes(item.id))

  return (
    <CheckoutContainer>
      <form className="form-container">
        <div className="input-container">
          <h1 className="title-check">Complete seu pedido</h1>
          <DeliveryAddress />
          <PaymentMethod />
        </div>

        <div className="value-container">
          <h1 className="title-check">Cafés selecionados</h1>
          <div className="total-container">
            <ul className="list-coffe">
              {filter.map((item) => (
                <ItemCoffe key={item.id} coffe={item} />
              ))}
            </ul>
            <FinalValue />
            <button className="btn-confirm">CONFIRMAR PEDIDO</button>
          </div>
        </div>
      </form>
    </CheckoutContainer>
  )
}
