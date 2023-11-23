import { Bank, CreditCard, Money } from '@phosphor-icons/react'
import { PaymentMethodInput } from '../../../../components/PaymentMethodInput'

import { PaymentMethodOptionsContainer } from './style'

export const paymentMethods = {
  credit: {
    title: 'Cartão de crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    title: 'Cartão de débito',
    icon: <Bank size={16} />,
  },
  money: {
    title: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export function PaymentMethodOptions() {
  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { title, icon }]) => (
        <PaymentMethodInput
          key={title}
          id={key}
          icon={icon}
          title={title}
          value={key}
        />
      ))}
    </PaymentMethodOptionsContainer>
  )
}
