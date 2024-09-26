import { MapPinLine } from 'phosphor-react'
import { DeliveryAddressContainer } from './styles'

export function DeliveryAddress() {
  return (
    <DeliveryAddressContainer>
      <div className="title-container">
        <MapPinLine size={22} />
        <div className="description-container">
          <h2>Endereço de Entrega</h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </div>
      <input type="text" placeholder="CEP" />
      <input type="text" placeholder="Rua" />
      <div className="number-container">
        <input type="text" placeholder="Número" />
        <input type="text" placeholder="Complemento" className="complement" />
      </div>
      <div className="city-container">
        <input type="text" placeholder="Bairro" />
        <input type="text" placeholder="Cidade" className="city" />
        <input type="text" placeholder="UF" className="uf" />
      </div>
    </DeliveryAddressContainer>
  )
}
