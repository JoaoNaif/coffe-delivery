import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentMethodContainer } from './styles'
import { useFormContext } from 'react-hook-form'

export function PaymentMethod() {
  const { register } = useFormContext()

  return (
    <PaymentMethodContainer>
      <div className="title-container">
        <CurrencyDollar size={22} />
        <div className="description-container">
          <h2>Pagamento</h2>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>
      <div className="paymantMethod">
        <input
          type="radio"
          value="credit"
          id="credit"
          {...register('payment')}
        />
        <label htmlFor="credit">
          <CreditCard size={20} />
          <span>CRÉDITO</span>
        </label>
        <input type="radio" value="debit" id="debit" {...register('payment')} />
        <label htmlFor="debit">
          <Bank size={20} />
          <span>DÉBITO</span>
        </label>
        <input type="radio" value="money" id="money" {...register('payment')} />
        <label htmlFor="money">
          <Money size={20} />
          <span>DINHEIRO</span>
        </label>
      </div>
    </PaymentMethodContainer>
  )
}
