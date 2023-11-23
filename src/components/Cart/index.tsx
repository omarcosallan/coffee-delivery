import { ShoppingCart } from '@phosphor-icons/react'

import { CartContainer } from './style'
import { useContext } from 'react'
import { CoffeesContext } from '../../contexts/CoffeesContext'

export function Cart() {
  const { cartQuantity } = useContext(CoffeesContext)

  return (
    <CartContainer>
      {cartQuantity >= 1 && <span>{cartQuantity}</span>}
      <ShoppingCart weight="fill" size={22} />
    </CartContainer>
  )
}
