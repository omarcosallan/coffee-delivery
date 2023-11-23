import { BagdeContainer } from './style'

interface BadgeProps {
  text: string
}

export function Badge({ text }: BadgeProps) {
  return <BagdeContainer>{text}</BagdeContainer>
}
