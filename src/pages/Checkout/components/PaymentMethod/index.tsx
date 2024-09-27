import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentMethodContainer } from './styles'

export function PaymentMethod() {
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
        <input type="radio" name="payment" id="credit" />
        <label htmlFor="credit">
          <CreditCard size={20} />
          <span>CRÉDITO</span>
        </label>
        <input type="radio" name="payment" id="debit" />
        <label htmlFor="debit">
          <Bank size={20} />
          <span>DÉBITO</span>
        </label>
        <input type="radio" name="payment" id="money" />
        <label htmlFor="money">
          <Money size={20} />
          <span>DINHEIRO</span>
        </label>
      </div>
    </PaymentMethodContainer>
  )
}
