import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Check } from './components/Check'
import { SuccessContainer } from './styles'

import photo from '../../assets/Illustration.svg'
import { useContext } from 'react'
import { AddressContext } from '../../context/AddressContext'
import { CartEmpty } from '../../components/CartEmpty'

export function Success() {
  const { address } = useContext(AddressContext)

  const last = address[address.length - 1]

  return (
    <SuccessContainer>
      {address.length > 0 ? (
        <div className="check-container">
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
          <div className="main-container">
            <ul className="list-check">
              <Check
                bold={true}
                icon={<MapPin size={20} />}
                title={`Rua ${last.data.street}, ${last.data.number}`}
                subtitle={`${last.data.district} - ${last.data.city}, ${last.data.uf}`}
                color="purple"
              />
              <Check
                bold={false}
                icon={<Timer size={20} />}
                title="Previsão de entrega"
                subtitle="20 min - 30 min"
                color="yellow"
              />
              <Check
                bold={false}
                icon={<CurrencyDollar size={20} />}
                title="Pagamento na entrega"
                subtitle={`
                  ${last.data.payment === 'money' ? 'Dinheiro' : ''}
                  ${last.data.payment === 'credit' ? 'Cartão de crédito' : ''}
                  ${last.data.payment === 'debit' ? 'Cartão de débito' : ''}
                `}
                color="dark-yellow"
              />
            </ul>
            <img src={photo} alt="" />
          </div>
        </div>
      ) : (
        <CartEmpty
          title="Não existe pedido"
          subtitle="Nevegue pela loja e faça seu pedido"
        />
      )}
    </SuccessContainer>
  )
}
