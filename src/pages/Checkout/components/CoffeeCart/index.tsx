import { Trash } from '@phosphor-icons/react'
import { InputQuantity } from '../../../../components/InputQuantity'
import { CartItem, CoffeesContext } from '../../../../contexts/CoffeesContext'
import {
  Actions,
  CoffeeCartContainer,
  Details,
  Price,
  RemoveButton,
} from './style'
import { formatPrice } from '../../../../utils/formatPrice'
import { useContext } from 'react'

interface CoffeeCartProps {
  coffee: CartItem
}

export function CoffeeCart({ coffee }: CoffeeCartProps) {
  const { removeCoffeeToCart, changeCartItemQuantity } =
    useContext(CoffeesContext)

  function handleDeleteCoffeeToCart() {
    removeCoffeeToCart(coffee)
  }

  function handleIncrease() {
    changeCartItemQuantity(coffee, 'increase')
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee, 'decrease')
  }

  return (
    <CoffeeCartContainer>
      <Details>
        <img src={`/coffees/${coffee.photo}`} alt="" />
        <div>
          <p>{coffee.name}</p>
          <Actions>
            <InputQuantity
              quantity={coffee.quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <RemoveButton onClick={handleDeleteCoffeeToCart}>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </Actions>
        </div>
      </Details>
      <Price>R$ {formatPrice(coffee.price * coffee.quantity)}</Price>
    </CoffeeCartContainer>
  )
}
