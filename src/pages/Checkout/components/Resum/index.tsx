import { useContext } from 'react'
import {
  CheckoutOverview,
  CoffeesNotFound,
  ConfirmOrder,
  Content,
  Delivery,
  ResumContainer,
  SubTotal,
  Total,
} from './style'
import { CoffeesContext } from '../../../../contexts/CoffeesContext'
import { CoffeeCart } from '../CoffeeCart'
import { Title } from '../../style'
import { formatPrice } from '../../../../utils/formatPrice'
import { NavLink } from 'react-router-dom'
import { useFormContext } from 'react-hook-form'

export function Resum() {
  const { coffeesInCart, delivery } = useContext(CoffeesContext)

  const {
    formState: { isValid },
  } = useFormContext()

  const subTotal = coffeesInCart.reduce(
    (total, coffee) => total + coffee.price * coffee.quantity,
    0,
  )
  const total = subTotal + delivery

  return (
    <ResumContainer>
      <Title>Cafés selecionados</Title>

      <Content>
        {coffeesInCart.length <= 0 && (
          <CoffeesNotFound>
            <p>Você não possui cafés selecionados</p>
            <NavLink to="/">Adicionar ao carrinho</NavLink>
          </CoffeesNotFound>
        )}
        {coffeesInCart.length >= 1 && (
          <>
            {coffeesInCart.map((coffee) => {
              return <CoffeeCart key={coffee.id} coffee={coffee} />
            })}

            <CheckoutOverview>
              <SubTotal>
                Total de itens <span>R$ {formatPrice(subTotal)}</span>
              </SubTotal>
              <Delivery>
                Entrega <span>R$ {formatPrice(delivery)}</span>
              </Delivery>
              <Total>
                Total <span>R$ {formatPrice(total)}</span>
              </Total>
            </CheckoutOverview>

            <ConfirmOrder type="submit" disabled={!isValid}>
              Confirmar pedido
            </ConfirmOrder>
          </>
        )}
      </Content>
    </ResumContainer>
  )
}
