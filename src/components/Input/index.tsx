import { InputHTMLAttributes } from 'react'
import { InputContainer, TextOnTheRight } from './style'
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  error?: string
  textOnTheRight?: string
}

export function Input({ name, error, textOnTheRight, ...props }: InputProps) {
  const { register } = useFormContext()

  return (
    <InputContainer hasError={!!error} className={props.className}>
      <input {...props} {...register(name)} />
      {textOnTheRight && <TextOnTheRight>{textOnTheRight}</TextOnTheRight>}
    </InputContainer>
  )
}
