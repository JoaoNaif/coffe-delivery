import { MapPinLine } from 'phosphor-react'
import { DeliveryAddressContainer } from './styles'
import { useFormContext } from 'react-hook-form'

export function DeliveryAddress() {
  const { register, formState } = useFormContext()

  const { errors } = formState

  return (
    <DeliveryAddressContainer>
      <div className="title-container">
        <MapPinLine size={22} />
        <div className="description-container">
          <h2>Endereço de Entrega</h2>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </div>
      <input
        type="text"
        className={errors.cep && 'error'}
        placeholder="CEP"
        id="cep"
        {...register('cep')}
      />
      <input
        type="text"
        className={errors.street && 'error'}
        placeholder="Rua"
        id="street"
        {...register('street')}
      />
      <div className="number-container">
        <input
          type="number"
          className={errors.number && 'error'}
          placeholder="Número"
          id="number"
          {...register('number', { valueAsNumber: true })}
        />
        <input
          type="text"
          placeholder="Complemento (opicional)"
          className="complement"
          id="complement"
          {...register('complement')}
        />
      </div>
      <div className="city-container">
        <input
          type="text"
          className={errors.district && 'error'}
          placeholder="Bairro"
          id="district"
          {...register('district')}
        />
        <input
          type="text"
          className={`city ${errors.district && 'error'}`}
          placeholder="Cidade"
          id="city"
          {...register('city')}
        />
        <input
          type="text"
          className={`uf ${errors.district && 'error'}`}
          placeholder="UF"
          id="uf"
          {...register('uf')}
        />
      </div>
    </DeliveryAddressContainer>
  )
}
