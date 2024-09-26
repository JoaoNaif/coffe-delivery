import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/coffeLogo.svg'
import { NavLink } from 'react-router-dom'
import { HeaderContainer } from './styles'

export function Header() {
  const num = 4
  const cartClass: string = num > 0 ? 'full' : 'empty'
  return (
    <HeaderContainer>
      <NavLink to="/" title="Página inicial">
        <img src={logo} alt="" />
      </NavLink>
      <nav>
        <div>
          <MapPin size={22} weight="fill" />
          <p>São Paulo, SP</p>
        </div>
        <NavLink
          className={cartClass}
          to="/checkout"
          title="Carrinho de compras"
        >
          <ShoppingCart size={22} weight="fill" />
          {num > 0 && <span>{num}</span>}
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
