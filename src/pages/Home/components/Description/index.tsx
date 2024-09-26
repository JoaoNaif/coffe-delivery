import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeTitle from '../../../../assets/coffeTitle.svg'
import { Badge } from '../Badge'
import { DescriptionContainer } from './styles'

export function Description() {
  return (
    <DescriptionContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h4>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h4>
        <ul>
          <Badge
            text="Compra simples e segura"
            icon={<ShoppingCart size={20} weight="fill" />}
            color="yellow-dark"
          />
          <Badge
            text="Embalagem matém o café intacto"
            icon={<Package size={20} weight="fill" />}
            color="gray"
          />
          <Badge
            text="Entrega rápida e rastreada"
            icon={<Timer size={20} weight="fill" />}
            color="yellow-light"
          />
          <Badge
            text="O café chega fresquinho até você"
            icon={<Coffee size={20} weight="fill" />}
            color="purple"
          />
        </ul>
      </div>
      <img src={coffeTitle} alt="" />
    </DescriptionContainer>
  )
}
