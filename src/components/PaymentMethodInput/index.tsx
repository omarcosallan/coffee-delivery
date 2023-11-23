import { InputHTMLAttributes, ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'

import { ContentContainer, PaymentMethodInputContainer } from './style'

interface PaymentMethodInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  icon: ReactNode
  title: string
}

export function PaymentMethodInput({
  id,
  icon,
  title,
  ...props
}: PaymentMethodInputProps) {
  const { register } = useFormContext()

  return (
    <PaymentMethodInputContainer>
      <input id={id} type="radio" {...props} {...register('paymentMethod')} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {title}
        </ContentContainer>
      </label>
    </PaymentMethodInputContainer>
  )
}
