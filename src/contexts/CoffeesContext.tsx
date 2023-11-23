import { ReactNode, createContext, useEffect, useState } from 'react'
import { Coffee } from '../@types/coffee'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CoffeesContextType {
  coffeesInCart: CartItem[]
  cartQuantity: number
  delivery: number
  addCoffeeToCart: (coffee: CartItem) => void
  removeCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (
    coffee: CartItem,
    type: 'increase' | 'decrease',
  ) => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

interface CoffeesContextProviderProps {
  children: ReactNode
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeesInCart, setCoffeesInCart] = useState<CartItem[]>(() => {
    const storedStateAsJson = localStorage.getItem(
      '@coffees-delivery:coffees-state-1.0.0',
    )

    if (storedStateAsJson) {
      return JSON.parse(storedStateAsJson)
    }

    return []
  })

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesInCart)

    localStorage.setItem('@coffees-delivery:coffees-state-1.0.0', stateJSON)
  }, [coffeesInCart])

  const cartQuantity = coffeesInCart.length

  const delivery = 3.5

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeIndex = coffeesInCart.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newItem = produce(coffeesInCart, (draft) => {
      if (coffeeIndex < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeIndex].quantity += coffee.quantity
      }
    })

    setCoffeesInCart(newItem)
  }

  function removeCoffeeToCart(coffee: CartItem) {
    const coffeeIndex = coffeesInCart.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newItem = produce(coffeesInCart, (draft) => {
      draft.splice(coffeeIndex, 1)
    })

    setCoffeesInCart(newItem)
  }

  function changeCartItemQuantity(
    coffee: CartItem,
    type: 'increase' | 'decrease',
  ) {
    const newCart = produce(coffeesInCart, (draft) => {
      const coffeeInCart = coffeesInCart.findIndex(
        (cartItem) => cartItem.id === coffee.id,
      )

      if (coffeeInCart >= 0) {
        const item = draft[coffeeInCart]

        draft[coffeeInCart].quantity =
          type === 'increase' ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCoffeesInCart(newCart)
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffeesInCart,
        cartQuantity,
        delivery,
        addCoffeeToCart,
        removeCoffeeToCart,
        changeCartItemQuantity,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  )
}
