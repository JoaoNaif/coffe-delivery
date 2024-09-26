import { ShoppingCart } from 'phosphor-react'
import { CoffeType } from '../../../../@types/CoffeType'
import { CoffeContainer } from './styles'
import { CountButton } from '../../../../components/CountButton'

interface CoffeProps {
  coffe: CoffeType
}

export function Coffe({ coffe }: CoffeProps) {
  return (
    <CoffeContainer>
      <img src={coffe.src} alt="" />
      <ul className="attributes">
        {coffe.attributes.map((attribute) => (
          <li key={coffe.id}>{attribute}</li>
        ))}
      </ul>
      <h1>{coffe.title}</h1>
      <p>{coffe.description}</p>
      <div className="container-price">
        <span className="value">
          <p>R$</p>
          {coffe.price}
        </span>
        <div className="container-sale">
          <CountButton />
          <button className="sale">
            <ShoppingCart weight="fill" size={20} />
          </button>
        </div>
      </div>
    </CoffeContainer>
  )
}
