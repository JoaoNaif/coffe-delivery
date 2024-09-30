import { useContext } from 'react'
import { data } from '../../data/coffe'
import { DeliveryAddress } from './components/DeliveryAddress'
import { FinalValue } from './components/FinalValue'
import { ItemCoffe } from './components/ItemCoffe'
import { PaymentMethod } from './components/PaymentMethod'
import { CheckoutContainer } from './styles'
import { OrderContext } from '../../context/OrdersContext'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { AddressContext } from '../../context/AddressContext'
import { useNavigate } from 'react-router-dom'
import { CartEmpty } from './components/CartEmpty'

const newAddressValidationSchema = z.object({
  cep: z.string().min(8, 'CEP deve ter pelo menos 8 caracteres'),
  street: z.string().min(1, 'Rua é obrigatória'),
  number: z.number().min(1, 'Número deve ser maior que 0'),
  complement: z.string().optional(),
  district: z.string().min(1, 'Bairro é obrigatório'),
  city: z.string().min(1, 'Cidade é obrigatória'),
  uf: z.string().length(2, 'UF deve ter 2 caracteres'),
  payment: z.enum(['money', 'credit_card', 'debit_card']),
})

export type NewAddressFormData = z.infer<typeof newAddressValidationSchema>

export function Checkout() {
  const { createNewAddress } = useContext(AddressContext)
  const { orders } = useContext(OrderContext)

  const navigate = useNavigate()

  const coffeIds = orders.map((item) => item.productId)
  const coffe = data
  const filter = coffe.filter((item) => coffeIds.includes(item.id))

  const newAddressForm = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: 0,
      complement: '',
      district: '',
      city: '',
      uf: '',
      payment: 'money',
    },
  })

  const { handleSubmit, reset } = newAddressForm

  function handleCreateNewAddress(data: NewAddressFormData) {
    if (orders.length > 0) {
      createNewAddress(data)
      reset()
      navigate('/success')
    }
  }

  return (
    <CheckoutContainer>
      {orders.length > 0 ? (
        <form
          className="form-container"
          onSubmit={handleSubmit(handleCreateNewAddress)}
        >
          <div className="input-container">
            <h1 className="title-check">Complete seu pedido</h1>
            <FormProvider {...newAddressForm}>
              <DeliveryAddress />
              <PaymentMethod />
            </FormProvider>
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
              <button className="btn-confirm" type="submit">
                CONFIRMAR PEDIDO
              </button>
            </div>
          </div>
        </form>
      ) : (
        <CartEmpty />
      )}
    </CheckoutContainer>
  )
}
