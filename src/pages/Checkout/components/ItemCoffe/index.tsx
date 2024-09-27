import { Trash } from 'phosphor-react'
import { CoffeType } from '../../../../@types/CoffeType'
import { CountButton } from '../../../../components/CountButton'
import { ItemCoffeContainer } from './styles'

interface ItemCoffeProps {
  coffe: CoffeType
}

export function ItemCoffe({ coffe }: ItemCoffeProps) {
  return (
    <ItemCoffeContainer>
      <img src={coffe.src} alt="" />
      <div className="info-container">
        <p>{coffe.title}</p>
        <div className="button-container">
          <CountButton />
          <button type="button" className="btn-trash">
            <Trash />
            <span>REMOVER</span>
          </button>
        </div>
      </div>
      <p className="price">R$ {coffe.price}</p>
    </ItemCoffeContainer>
  )
}
