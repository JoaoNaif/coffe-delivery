import { MapPinLine } from 'phosphor-react'
import { DeliveryAddressContainer } from './styles'
import { useFormContext } from 'react-hook-form'

export function DeliveryAddress() {
  const { register } = useFormContext()

  return (
    <DeliveryAddressContainer>
      <div className="title-container">
        <MapPinLine size={22} />
        <div className="description-container">
          <h2>Endereço de Entrega</h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </div>
      <input type="text" placeholder="CEP" id="cep" {...register('cep')} />
      <input
        type="text"
        placeholder="Rua"
        id="street"
        {...register('street')}
      />
      <div className="number-container">
        <input
          type="number"
          placeholder="Número"
          id="number"
          {...register('number', { valueAsNumber: true })}
        />
        <input
          type="text"
          placeholder="Complemento"
          className="complement"
          id="complement"
          {...register('complement')}
        />
      </div>
      <div className="city-container">
        <input
          type="text"
          placeholder="Bairro"
          id="district"
          {...register('district')}
        />
        <input
          type="text"
          placeholder="Cidade"
          className="city"
          id="city"
          {...register('city')}
        />
        <input
          type="text"
          placeholder="UF"
          className="uf"
          id="uf"
          {...register('uf')}
        />
      </div>
    </DeliveryAddressContainer>
  )
}
