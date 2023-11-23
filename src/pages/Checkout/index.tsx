import { FormProvider, useForm } from 'react-hook-form'
import { Form } from './components/Form'
import { Resum } from './components/Resum'
import { CheckoutContainer } from './style'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod
    .string()
    .min(8, 'Informe o CEP')
    .max(9, { message: 'O CEP deve ter no máximo 9 caracteres' }),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  uf: zod
    .string()
    .min(1, 'Informe a UF')
    .length(2, 'UF deve ter exatamente 2 caracteres')
    .transform((uf) => {
      return uf.toUpperCase()
    }),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

type ConfirmOrderFormData = zod.infer<typeof confirmOrderFormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/success', {
      state: data,
    })
  }

  return (
    <form onSubmit={handleSubmit(handleConfirmOrder)}>
      <FormProvider {...confirmOrderForm}>
        <CheckoutContainer>
          <Form />
          <Resum />
        </CheckoutContainer>
      </FormProvider>
    </form>
  )
}
