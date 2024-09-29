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

const newAddressValidationSchema = z.object({
  cep: z.string(),
  street: z.string(),
  number: z.coerce.number(),
  complement: z.string().optional(),
  district: z.string(),
  city: z.string(),
  uf: z.string().max(2, 'maximum 2 characters'),
  payment: z.enum(['money', 'debit', 'credit']),
})

type NewAddressFormData = z.infer<typeof newAddressValidationSchema>

export function Checkout() {
  const { orders } = useContext(OrderContext)

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
    console.log(data)
    reset()
  }

  return (
    <CheckoutContainer>
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
    </CheckoutContainer>
  )
}
