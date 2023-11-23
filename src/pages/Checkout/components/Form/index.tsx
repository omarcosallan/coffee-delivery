import { CurrencyDollar, MapPin } from '@phosphor-icons/react'
import { useFormContext } from 'react-hook-form'
import { AddressForm } from '../AddressForm'
import { PaymentMethodOptions } from '../PaymentMethodOptions'

import { FormCard, FormContainer, TitleCard } from './style'
import { Title } from '../../style'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function Form() {
  const { formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <FormContainer>
      <Title>Complete seu pedido</Title>

      <div>
        <FormCard>
          <TitleCard colorIcon="yellow">
            <MapPin size={22} weight="regular" />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </TitleCard>

          <AddressForm />
        </FormCard>

        <FormCard>
          <TitleCard colorIcon="purple">
            <CurrencyDollar size={22} weight="regular" />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </TitleCard>
          <PaymentMethodOptions />
          {errors && <p>{errors.paymentMethod?.message}</p>}
        </FormCard>
      </div>
    </FormContainer>
  )
}
