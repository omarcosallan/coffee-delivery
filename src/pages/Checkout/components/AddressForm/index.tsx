import { Input } from '../../../../components/Input'
import { useFormContext } from 'react-hook-form'

import { AddressFormContainer } from './style'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressForm() {
  const { formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType

  return (
    <AddressFormContainer>
      <Input
        name="cep"
        placeholder="CEP"
        className="cep"
        error={errors.cep?.message}
      />

      <Input
        name="street"
        placeholder="Rua"
        className="street"
        error={errors.number?.message}
      />

      <Input
        name="number"
        type="number"
        placeholder="Número"
        className="number"
        error={errors.number?.message}
      />

      <Input
        name="complement"
        placeholder="Complemento"
        textOnTheRight="Opcional"
        className="complement"
        error={errors.complement?.message}
      />

      <Input
        name="neighborhood"
        placeholder="Bairro"
        className="neighborhood"
        error={errors.neighborhood?.message}
      />

      <Input
        name="city"
        placeholder="Cidade"
        className="city"
        error={errors.city?.message}
      />
      <Input
        name="uf"
        placeholder="UF"
        className="uf"
        error={errors.uf?.message}
      />
    </AddressFormContainer>
  )
}
