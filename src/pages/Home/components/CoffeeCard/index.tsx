import { useState, useContext } from 'react'

import { ShoppingCart } from '@phosphor-icons/react'
import { Coffee } from '../../../../@types/coffee'
import { Badge } from '../../../../components/Badge'
import { formatPrice } from '../../../../utils/formatPrice'
import { InputQuantity } from '../../../../components/InputQuantity'

import { CoffeesContext } from '../../../../contexts/CoffeesContext'

import {
  ActionsFooter,
  Badges,
  ButtonCart,
  CoffeeCardContainer,
  Description,
  Name,
  Price,
} from './style'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { addCoffeeToCart } = useContext(CoffeesContext)

  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  function handleAddCoffeeToCart() {
    const coffeeInCartData = {
      ...coffee,
      quantity,
    }

    addCoffeeToCart(coffeeInCartData)

    setQuantity(1)
  }

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt="" />
      <Badges>
        {coffee.tags.map((tag) => {
          return <Badge key={tag} text={tag} />
        })}
      </Badges>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <ActionsFooter>
        <Price>
          <span>R$ </span> {formatPrice(coffee.price)}
        </Price>
        <div>
          <InputQuantity
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <ButtonCart onClick={handleAddCoffeeToCart}>
            <ShoppingCart weight="fill" size={22} />
          </ButtonCart>
        </div>
      </ActionsFooter>
    </CoffeeCardContainer>
  )
}
