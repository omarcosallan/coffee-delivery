import { Minus, Plus } from '@phosphor-icons/react'
import { IconWrapper, InputQuantityContainer } from './style'

interface InputQuantityProps {
  onIncrease: () => void
  onDecrease: () => void
  quantity: number
}

export function InputQuantity({
  onIncrease,
  onDecrease,
  quantity,
}: InputQuantityProps) {
  return (
    <InputQuantityContainer>
      <IconWrapper type="button" disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="bold" />
      </IconWrapper>
      <input type="number" disabled value={quantity} />
      <IconWrapper type="button" onClick={onIncrease}>
        <Plus size={14} weight="bold" />
      </IconWrapper>
    </InputQuantityContainer>
  )
}
