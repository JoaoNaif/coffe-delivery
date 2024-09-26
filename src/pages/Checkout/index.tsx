import { data } from '../../data/coffe'
import { DeliveryAddress } from './components/DeliveryAddress'
import { FinalValue } from './components/FinalValue'
import { PaymentMethod } from './components/PaymentMethod'
import { CheckoutContainer } from './styles'

export function Checkout() {
  const coffe = data
  const filter = coffe.filter((item) => item.id.includes('5'))
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
          <div>
            {filter.map((item) => item.title)}
            <FinalValue />
            <button>CONFIRMAR PEDIDO</button>
          </div>
        </div>
      </form>
    </CheckoutContainer>
  )
}
