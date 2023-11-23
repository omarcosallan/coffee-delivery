import { NavLink } from 'react-router-dom'
import { MapPin } from '@phosphor-icons/react'

import { ActionsContainer, HeaderContainer, Location } from './style'
import logoCoffeeDelivery from '../../assets/logo.svg'
import { Cart } from '../Cart'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>

      <ActionsContainer>
        <Location>
          <MapPin weight="fill" size={22} />
          Venha-Ver, RN
        </Location>

        <NavLink to="/checkout">
          <Cart />
        </NavLink>
      </ActionsContainer>
    </HeaderContainer>
  )
}
