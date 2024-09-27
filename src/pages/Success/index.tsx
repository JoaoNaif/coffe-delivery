import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Check } from './components/Check'
import { SuccessContainer } from './styles'

import photo from '../../assets/Illustration.svg'

export function Success() {
  return (
    <SuccessContainer>
      <div className="check-container">
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <div className="main-container">
          <ul className="list-check">
            <Check
              bold={true}
              icon={<MapPin size={20} />}
              title="Entrega em Rua Teste, 100"
              subtitle="Santo - São Paulo, SP"
            />
            <Check
              bold={false}
              icon={<Timer size={20} />}
              title="Previsão de entrega"
              subtitle="20 min - 30 min"
            />
            <Check
              bold={false}
              icon={<CurrencyDollar size={20} />}
              title="Pagamento na entrega"
              subtitle="Cartão de Crédito"
            />
          </ul>
          <img src={photo} alt="" />
        </div>
      </div>
    </SuccessContainer>
  )
}
