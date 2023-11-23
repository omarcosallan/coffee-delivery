import {
  ContentContainer,
  IconWrraper,
  InfoOrder,
  SuccessContainer,
} from './style'

import successImg from '../../assets/success-img.svg'
import { MapPin, Timer } from '@phosphor-icons/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const paymentMethods = {
  debit: 'Cartão de débito',
  credit: 'Cartão de crédito',
  money: 'Dinheiro',
}

export function Success() {
  const { state } = useLocation()

  const navigate = useNavigate()

  if (!state) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      navigate('/checkout')
    }, [navigate])

    return null
  }

  return (
    <SuccessContainer>
      <strong>Uhu! Pedido confirmado</strong>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <ContentContainer>
        <InfoOrder>
          <div>
            <IconWrraper background="purple">
              <MapPin weight="fill" />
            </IconWrraper>
            <p>
              Entrega em{' '}
              <strong>
                Rua {state.street}, {state.number}
              </strong>
              <br />
              {state.neighborhood}, {state.city} - {state.uf}
            </p>
          </div>

          <div>
            <IconWrraper background="yellow">
              <Timer weight="fill" />
            </IconWrraper>
            <p>
              Previsão de entrega
              <br />
              <strong>20 - 30 min</strong>
            </p>
          </div>

          <div>
            <IconWrraper background="yellow-dark">
              <MapPin weight="fill" />
            </IconWrraper>
            <p>
              Pagamento na entrega
              <br />
              <strong>{paymentMethods[state.paymentMethod]}</strong>
            </p>
          </div>
        </InfoOrder>
        <img src={successImg} alt="" />
      </ContentContainer>
    </SuccessContainer>
  )
}
